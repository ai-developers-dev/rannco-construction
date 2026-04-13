import { NextResponse } from "next/server";
import { db, initializeDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  await initializeDb();

  const categories = await db.execute(
    "SELECT * FROM project_categories ORDER BY display_order ASC, id ASC"
  );

  const images = await db.execute(
    "SELECT * FROM project_images ORDER BY display_order ASC, id ASC"
  );

  // Group images by category
  const imageMap = new Map<number, { id: number; path: string }[]>();
  for (const img of images.rows) {
    const catId = img.category_id as number;
    if (!imageMap.has(catId)) imageMap.set(catId, []);
    imageMap.get(catId)!.push({
      id: img.id as number,
      path: img.image_path as string,
    });
  }

  const result = categories.rows.map((cat) => ({
    id: cat.id as number,
    title: cat.title as string,
    description: cat.description as string,
    icon: cat.icon as string,
    images: imageMap.get(cat.id as number) || [],
  }));

  return NextResponse.json({ categories: result });
}
