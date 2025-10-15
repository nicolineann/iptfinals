import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import fs from "fs";
import path from "path";

// Path to local JSON file for demo storage
const dataFile = path.join(process.cwd(), "data", "ratings.json");

// Utility: Load & save data
function loadRatings() {
  if (!fs.existsSync(dataFile)) return [];
  const data = fs.readFileSync(dataFile, "utf-8");
  return JSON.parse(data);
}

function saveRatings(data: any) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

export async function POST(req: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { movieSlug, rating } = await req.json();
  if (!movieSlug || !rating)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const ratings = loadRatings();

  // Check if user already rated
  const existing = ratings.find(
    (r: any) => r.userId === user.id && r.movieSlug === movieSlug
  );

  if (existing) {
    existing.rating = rating;
  } else {
    ratings.push({ userId: user.id, movieSlug, rating, createdAt: new Date() });
  }

  saveRatings(ratings);
  return NextResponse.json({ success: true });
}

export async function GET() {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const ratings = loadRatings().filter((r: any) => r.userId === user.id);
  return NextResponse.json(ratings);
}
