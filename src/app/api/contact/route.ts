import { NextRequest, NextResponse } from "next/server";
import { db, initializeDb } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    await initializeDb();

    const body = await request.json();
    const { name, email, phone, service, message, source } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    await db.execute({
      sql: `INSERT INTO contact_submissions (name, email, phone, service, message, source) VALUES (?, ?, ?, ?, ?, ?)`,
      args: [name, email, phone || null, service || null, message, source || "contact_page"],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
