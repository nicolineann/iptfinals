"use client";

import { useState } from "react";
import { movies } from "~/lib/movies";
import { useUser, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";

export default function MovieDetailPage({ params }: { params: { slug: string } }) {
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  const movie = movies.find((m) => m.slug === params.slug);
  if (!movie) return <div className="p-8 text-center">Movie not found</div>;

  if (!user)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold mb-4">Sign in to view this movie</h1>
        <SignInButton>
          <Button className="bg-red-600 hover:bg-red-700">Sign In</Button>
        </SignInButton>
      </div>
    );

  return (
    <main className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Side - Movie Poster */}
      <div className="flex flex-col items-center">
        <Image
          src={movie.img}
          alt={movie.title}
          width={500}
          height={700}
          className="rounded-xl object-cover mb-6"
        />

        <Dialog open={open} onOpenChange={setOpen}>

          <DialogContent className="max-w-5xl w-full">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold">
                {movie.title} - Trailer
              </DialogTitle>
            </DialogHeader>
            <div className="aspect-video">
              <iframe
                src={movie.trailer}
                title={movie.title}
                className="w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Right Side - Movie Info */}
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-400 text-sm mb-4">{movie.category}</p>
        <p className="text-base mb-4">{movie.description}</p>
        <p className="mb-2">
          <strong>Cast:</strong> {movie.cast}
        </p>
        <p>
          <strong>Published:</strong> {movie.published}
        </p>
      </div>
    </main>
  );
}
