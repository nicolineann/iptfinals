// src/app/api/movies/route.ts
import { NextResponse } from "next/server";
import pool from "../../../lib/db"; // relative path from app/api/movies

export async function POST(req: Request) {
  try {
    const { title, year } = await req.json();
    if (!title) return NextResponse.json({ error: "Title required" }, { status: 400 });

    const client = await pool.connect();
    try {
      const result = await client.query(
        "INSERT INTO movies (title, year) VALUES ($1, $2) RETURNING *",
        [title, year ?? null]
      );
      return NextResponse.json({ success: true, data: result.rows[0] });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error("POST /api/movies error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await pool.connect();
    try {
      const res = await client.query("SELECT * FROM movies ORDER BY id ASC");
      return NextResponse.json({ movies: res.rows });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error("GET /api/movies error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
