import { db } from "../../../lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT content_key, content_value FROM site_content"
    );
    return Response.json({ ok: true, rows });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}