import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { execSync } from "child_process";
import path from "path";
import { put, del } from "@vercel/blob";
import { db, initializeDb } from "@/lib/db";
import { getSession } from "@/lib/auth";

const isProduction = process.env.VERCEL === "1";

export async function GET(request: NextRequest) {
  await initializeDb();

  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get("category_id");

  let sql = "SELECT * FROM project_images";
  const args: (string | number)[] = [];

  if (categoryId) {
    sql += " WHERE category_id = ?";
    args.push(Number(categoryId));
  }

  sql += " ORDER BY display_order ASC, id ASC";

  const result = await db.execute({ sql, args });
  return NextResponse.json({ images: result.rows });
}

async function uploadToBlob(buffer: Buffer, fileName: string): Promise<string> {
  const blob = await put(`projects/${fileName}`, buffer, {
    access: "public",
    addRandomSuffix: false,
  });
  return blob.url;
}

async function uploadLocal(buffer: Buffer, fileName: string): Promise<string> {
  const uploadDir = path.join(process.cwd(), "public", "uploads", "projects");
  const filePath = path.join(uploadDir, fileName);
  await writeFile(filePath, buffer);
  return `/uploads/projects/${fileName}`;
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const formData = await request.formData();
  const categoryId = formData.get("category_id") as string;
  const files = formData.getAll("files") as File[];

  if (!categoryId || files.length === 0) {
    return NextResponse.json(
      { error: "Category ID and at least one file are required" },
      { status: 400 }
    );
  }

  const savedImages: { id: number; path: string }[] = [];

  const maxOrder = await db.execute({
    sql: "SELECT COALESCE(MAX(display_order), -1) as max_order FROM project_images WHERE category_id = ?",
    args: [Number(categoryId)],
  });
  let nextOrder = (maxOrder.rows[0].max_order as number) + 1;

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    let buffer = Buffer.from(bytes);

    const ext = path.extname(file.name).toLowerCase() || ".jpg";
    const baseName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const isHeic = ext === ".heic" || ext === ".heif";

    let finalName: string;
    let imageUrl: string;

    if (isHeic && !isProduction) {
      // Local dev: convert HEIC to JPEG using sips (macOS only)
      const origName = `${baseName}${ext}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads", "projects");
      const origPath = path.join(uploadDir, origName);
      finalName = `${baseName}.jpg`;
      const finalPath = path.join(uploadDir, finalName);

      await writeFile(origPath, buffer);
      try {
        execSync(`sips -s format jpeg -s formatOptions 85 -Z 2000 "${origPath}" --out "${finalPath}"`, { stdio: "pipe" });
        execSync(`rm "${origPath}"`, { stdio: "pipe" });
      } catch {
        finalName = origName;
      }
      imageUrl = `/uploads/projects/${finalName}`;
    } else if (isHeic && isProduction) {
      // Production: upload as-is (or skip HEIC - browsers still can't display them)
      // For now, upload the raw file - users should upload JPG/PNG in production
      finalName = `${baseName}${ext}`;
      imageUrl = await uploadToBlob(buffer, finalName);
    } else {
      // Normal image (JPG, PNG, WEBP, etc.)
      finalName = `${baseName}${ext}`;

      if (isProduction) {
        imageUrl = await uploadToBlob(buffer, finalName);
      } else {
        imageUrl = await uploadLocal(buffer, finalName);
      }
    }

    const result = await db.execute({
      sql: "INSERT INTO project_images (category_id, image_path, display_order) VALUES (?, ?, ?)",
      args: [Number(categoryId), imageUrl, nextOrder],
    });

    savedImages.push({ id: Number(result.lastInsertRowid), path: imageUrl });
    nextOrder++;
  }

  return NextResponse.json({ success: true, images: savedImages });
}

export async function PATCH(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const { orderedIds } = await request.json();

  if (!Array.isArray(orderedIds)) {
    return NextResponse.json({ error: "orderedIds array is required" }, { status: 400 });
  }

  for (let i = 0; i < orderedIds.length; i++) {
    await db.execute({
      sql: "UPDATE project_images SET display_order = ? WHERE id = ?",
      args: [i, orderedIds[i]],
    });
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const { id } = await request.json();

  // Get the image path before deleting
  const img = await db.execute({
    sql: "SELECT image_path FROM project_images WHERE id = ?",
    args: [id],
  });

  // Delete from blob storage if it's a blob URL
  if (img.rows.length > 0) {
    const imagePath = img.rows[0].image_path as string;
    if (imagePath.includes("blob.vercel-storage.com")) {
      try {
        await del(imagePath);
      } catch {
        // Ignore blob deletion errors
      }
    }
  }

  await db.execute({
    sql: "DELETE FROM project_images WHERE id = ?",
    args: [id],
  });

  return NextResponse.json({ success: true });
}
