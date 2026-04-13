import { NextRequest, NextResponse } from "next/server";
import { db, initializeDb } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const { searchParams } = new URL(request.url);
  const source = searchParams.get("source");

  let sql = "SELECT * FROM contact_submissions";
  const args: string[] = [];

  if (source) {
    sql += " WHERE source = ?";
    args.push(source);
  }

  sql += " ORDER BY created_at DESC";

  const result = await db.execute({ sql, args });
  return NextResponse.json({ submissions: result.rows });
}

export async function PATCH(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const { id, read } = await request.json();
  await db.execute({
    sql: "UPDATE contact_submissions SET read = ? WHERE id = ?",
    args: [read ? 1 : 0, id],
  });

  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const { id } = await request.json();
  await db.execute({
    sql: "DELETE FROM contact_submissions WHERE id = ?",
    args: [id],
  });

  return NextResponse.json({ success: true });
}
