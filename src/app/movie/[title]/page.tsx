"use client";

import { useParams } from "next/navigation";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { movieData } from "~/lib/movies";

export default function MoviePage() {
  const params = useParams();
  const title = decodeURIComponent(params.title as string);
  const movie = movieData[title];

  if (!movie) {
    return (
      <div className="text-center text-white py-20 text-2xl">
        Movie not found 😢
      </div>
    );
  }

  return (
    <>
      {/* Require sign in */}
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
          <h1 className="text-3xl font-bold mb-4">
            Please sign in to view this movie
          </h1>
          <SignInButton mode="modal">
            <button className="bg-red-600 px-5 py-3 rounded-lg text-white hover:bg-red-700 transition">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>

      {/* Show movie when signed in */}
      <SignedIn>
        <div className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-black text-white p-8 gap-8">
          {/* Left: Trailer */}
          <div className="flex-1">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-700">
              <iframe
                src={movie.trailer}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right: Movie Info */}
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="text-gray-300">{movie.description}</p>
            <p>
              <span className="font-semibold text-gray-400">Cast:</span>{" "}
              {movie.cast}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Release Date:</span>{" "}
              {movie.published}
            </p>
          </div>
        </div>
      </SignedIn>
    </>
  );
}
