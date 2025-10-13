"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Movie } from "~/lib/movies";

export default function MovieCard({ movie }: { movie: Movie }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movies/${movie.slug}`)}
      className="cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition"
    >
      <Image
        src={movie.img}
        alt={movie.title}
        width={300}
        height={400}
        className="object-cover w-full h-72"
      />
      <div className="p-2">
        <h2 className="text-lg font-bold">{movie.title}</h2>
        <p className="text-sm text-gray-400">{movie.category}</p>
      </div>
    </div>
  );
}
