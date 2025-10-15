"use client";

import { useParams } from "next/navigation";
import { movies } from "~/data/movies"; // path to your data
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function MoviePage() {
  const params = useParams();
  const slug = params.slug as string;
  const movie = movies.find((m) => m.slug === slug);

  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [ratedMovies, setRatedMovies] = useState<{ title: string; rating: number }[]>([]);

  // load saved per-user ratings from localStorage (demo)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("ratedMovies") || "[]");
    setRatedMovies(saved);
    const found = saved.find((r: any) => r.title === movie?.title);
    if (found) setRating(found.rating);
  }, [movie?.title]);

  const handleRate = (value: number) => {
    setRating(value);
    const updated = ratedMovies.filter((r) => r.title !== movie?.title);
    updated.push({ title: movie!.title, rating: value });
    setRatedMovies(updated);
    localStorage.setItem("ratedMovies", JSON.stringify(updated));
  };

  if (!movie) return <div className="p-8 text-center text-white">Movie not found</div>;

  return (
    <>
      <SignedOut>
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <h2 className="text-2xl mb-4">Please sign in to view this movie</h2>
            <SignInButton mode="modal">
              <button className="bg-red-600 px-4 py-2 rounded">Sign In</button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="min-h-screen p-8 bg-black text-white flex items-start justify-center">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe src={movie.trailer} className="w-full h-full" allowFullScreen />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <p className="text-gray-300">{movie.description}</p>
              <p><strong>Cast:</strong> {movie.cast}</p>
              <p><strong>Published:</strong> {movie.published}</p>

              <div className="mt-4">
                <div className="flex items-center gap-2">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={28} onClick={() => handleRate(s)} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)}
                      className={s <= (hover || rating) ? "text-yellow-400 fill-yellow-400 cursor-pointer" : "text-gray-500 cursor-pointer"} />
                  ))}
                  <span className="ml-2 text-sm">{rating ? `${rating}/5` : "No rating yet"}</span>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-700 pt-4">
                <h3 className="font-semibold">Your Rated Movies</h3>
                {ratedMovies.length === 0 ? <p className="text-gray-500">No rated movies yet.</p> :
                  <ul className="space-y-1">
                    {ratedMovies.map((r) => <li key={r.title} className="flex justify-between"><span>{r.title}</span><span className="text-yellow-400">{r.rating}★</span></li>)}
                  </ul>}
              </div>
            </div>
          </div>
        </div>
      </SignedIn>
    </>
  );
}
