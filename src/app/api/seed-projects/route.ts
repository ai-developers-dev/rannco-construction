import { NextResponse } from "next/server";
import { db, initializeDb } from "@/lib/db";

export async function GET() {
  try {
    await initializeDb();

    // Check if categories already exist
    const existing = await db.execute("SELECT COUNT(*) as count FROM project_categories");
    if ((existing.rows[0].count as number) > 0) {
      return NextResponse.json({ message: "Project data already seeded" });
    }

    // Create Residential category
    const res1 = await db.execute({
      sql: "INSERT INTO project_categories (title, description, icon, display_order) VALUES (?, ?, ?, ?)",
      args: [
        "Residential",
        "Custom homes, renovations, additions, and remodels for homeowners across Southern Illinois.",
        "home",
        0,
      ],
    });
    const residentialId = Number(res1.lastInsertRowid);

    // Create Commercial category
    const res2 = await db.execute({
      sql: "INSERT INTO project_categories (title, description, icon, display_order) VALUES (?, ?, ?, ?)",
      args: [
        "Commercial",
        "Office buildings, retail spaces, churches, and commercial construction throughout the region.",
        "building",
        1,
      ],
    });
    const commercialId = Number(res2.lastInsertRowid);

    // Residential images
    const residentialImages = [
      "/images/projects/IMG_6650.PNG",
      "/images/projects/IMG_6655.PNG",
      "/images/projects/IMG_1540.PNG",
      "/images/projects/IMG_6647.PNG",
      "/images/projects/IMG_6648.PNG",
      "/images/projects/IMG_6649.PNG",
      "/images/projects/IMG_6653.PNG",
      "/images/projects/IMG_6654.PNG",
      "/images/projects/IMG_6656.PNG",
      "/images/projects/IMG_6657.PNG",
      "/images/projects/IMG_6658.PNG",
      "/images/projects/IMG_6659.PNG",
      "/images/projects/IMG_8302.jpeg",
      "/images/projects/IMG_8303.jpeg",
      "/images/projects/IMG_8304.jpeg",
      "/images/projects/IMG_8305.jpeg",
      "/images/projects/IMG_8306.jpeg",
      "/images/projects/IMG_8307.jpeg",
    ];

    for (let i = 0; i < residentialImages.length; i++) {
      await db.execute({
        sql: "INSERT INTO project_images (category_id, image_path, display_order) VALUES (?, ?, ?)",
        args: [residentialId, residentialImages[i], i],
      });
    }

    // Commercial images
    const commercialImages = [
      "/images/projects/IMG_1543.PNG",
      "/images/projects/IMG_6651.PNG",
      "/images/projects/IMG_6652.PNG",
      "/images/projects/IMG_6753.PNG",
      "/images/projects/IMG_8308.jpeg",
      "/images/projects/IMG_8309.jpeg",
      "/images/projects/IMG_8310.jpeg",
      "/images/projects/IMG_8311.jpeg",
    ];

    for (let i = 0; i < commercialImages.length; i++) {
      await db.execute({
        sql: "INSERT INTO project_images (category_id, image_path, display_order) VALUES (?, ?, ?)",
        args: [commercialId, commercialImages[i], i],
      });
    }

    return NextResponse.json({
      message: "Project data seeded successfully",
      residential: residentialImages.length,
      commercial: commercialImages.length,
    });
  } catch (error) {
    console.error("Seed projects error:", error);
    return NextResponse.json({ error: "Seed failed" }, { status: 500 });
  }
}
