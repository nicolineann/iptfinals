"use client";

import { useState } from "react";
import Image from "next/image";
import { TopNav } from "./_components/topnav";
import { cn } from "~/lib/utils";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

// 🎞️ Browse Movies data
const allMovies = [
  { title: "The Witch Part 2", category: "KOREAN", img: "/movies/witch2.jpg" },
  { title: "Parasite", category: "KOREAN", img: "/movies/parasite.jpg" },
  { title: "Hello, Love, Goodbye", category: "FILIPINO", img: "/movies/hellolovegoodbye.jpg" },
  { title: "Seven Sundays", category: "FILIPINO", img: "/movies/sevensundays.jpg" },
  { title: "Your Name", category: "JAPANESE", img: "/movies/yourname.jpg" },
  { title: "Spirited Away", category: "JAPANESE", img: "/movies/spiritedaway.jpg" },
  { title: "Bad Genius", category: "THAI", img: "/movies/badgenius.jpg" },
  { title: "Brother of the Year", category: "THAI", img: "/movies/brotheroftheyear.jpg" },
  { title: "Avengers: Endgame", category: "AMERICAN", img: "/movies/endgame.jpg" },
  { title: "Inception", category: "AMERICAN", img: "/movies/inception.jpg" },
];

const categories = ["ALL", "FILIPINO", "JAPANESE", "THAI", "KOREAN", "AMERICAN"];

const featuredMovies = [
  {
    title: "Oppenheimer",
    desc: "A brilliant physicist leads the Manhattan Project.",
    video: "https://www.youtube.com/embed/uYPbbksJxIg",
  },
  {
    title: "John Wick 4",
    desc: "John Wick faces his deadliest challenge yet.",
    video: "https://www.youtube.com/embed/qEVUtrk8_B4",
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    desc: "Miles Morales embarks on a multiversal journey.",
    video: "https://www.youtube.com/embed/shW9i6k8cB0",
  },
  {
    title: "Arby",
    desc: "Nakakalungkot",
    video: "https://www.youtube.com/embed/emLo7ejzBEY",
  },
];

export default function Page() {
  const [filter, setFilter] = useState("ALL");
  const [selectedMovie, setSelectedMovie] = useState<{
    title: string;
    video: string;
  } | null>(null);

  const filteredMovies =
    filter === "ALL"
      ? allMovies
      : allMovies.filter((movie) => movie.category === filter);

  return (
    <div
      className={cn(
        "bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 min-h-screen flex flex-col"
      )}
    >
      {/* 🧭 Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <TopNav />
        </div>
      </header>

      {/* 🌐 Main Content */}
      <main className="flex-1 flex justify-center px-4 py-10">
        <div className="max-w-6xl w-full space-y-16">
          {/* 🎞️ Browse Movies */}
          <section>
            <h2 className="text-3xl font-bold">Browse Movies</h2>
            <Separator className="my-4 bg-red-800" />

            {/* Filter Buttons */}
            <div className="flex gap-3 flex-wrap mb-6">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    filter === cat
                      ? "bg-red-600 text-white"
                      : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Movies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredMovies.map((movie, idx) => (
                <Card
                  key={idx}
                  className="bg-gray-900/70 border border-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={movie.img}
                      alt={movie.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="p-3">
                    <CardTitle className="text-sm truncate text-white">
                      {movie.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
  {filteredMovies.map((movie, idx) => (
    <Link key={idx} href={`/movie/${encodeURIComponent(movie.title)}`}>
      <Card className="bg-gray-900/70 border border-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform cursor-pointer">
        <div className="relative w-full h-64">
          <Image
            src={movie.img}
            alt={movie.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader className="p-3">
          <CardTitle className="text-sm truncate text-white">
            {movie.title}
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  ))}
</div>
          {/* 🔥 Featured Movies */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              Featured <Badge className="bg-red-600 text-white">Hot</Badge>
            </h2>
            <Separator className="my-3 bg-red-800" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredMovies.map((movie, idx) => (
                <Card
                  key={idx}
                  className="bg-gray-950/70 border border-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-red-600/40 hover:scale-[1.02] transition-transform"
                >
                  <div className="relative w-full h-52">
                    <iframe
                      src={movie.video}
                      className="w-full h-full rounded-lg"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{movie.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {movie.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      onClick={() =>
                        setSelectedMovie({ title: movie.title, video: movie.video })
                      }
                      className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg"
                    >
                      Watch Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* 🎥 Latest Movies */}
          <section>
            <h2 className="text-2xl font-bold">Latest Movies</h2>
            <Separator className="my-3 bg-red-800" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[ 
                { title: "The Batman", video: "https://www.youtube.com/embed/mqqft2x_Aa4" },
                { title: "Doctor Strange 2", video: "https://www.youtube.com/embed/aWzlQ2N6qqg" },
                { title: "Avengers: Endgame", video: "https://www.youtube.com/embed/TcMBFSGVi1c" },
                { title: "Dune", video: "https://www.youtube.com/embed/8g18jFHCLXk" },
                { title: "Black Panther: Wakanda Forever", video: "https://www.youtube.com/embed/_Z3QKkl1WyM" },
                { title: "The Flash", video: "https://www.youtube.com/embed/hebWYacbdvc" },
              ].map((movie, idx) => (
                <Card
                  key={idx}
                  className="bg-gray-950/70 border border-gray-800 rounded-lg overflow-hidden hover:shadow-md hover:shadow-red-500/30 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="relative w-full h-64">
                    <iframe
                      src={movie.video}
                      className="w-full h-full rounded-lg"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                  <CardHeader className="p-3">
                    <CardTitle className="text-sm truncate text-white">
                      {movie.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* ⚫ Footer */}
      <footer className="border-t border-gray-800 bg-black/60 backdrop-blur-md py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} MovieHub. All rights reserved.
      </footer>

      {/* 🎬 Watch Now Modal (Wider Version) */}
      <Dialog open={!!selectedMovie} onOpenChange={() => setSelectedMovie(null)}>
        <DialogContent className="max-w-5xl bg-gray-950 border border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-white text-center">
              {selectedMovie?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedMovie && (
            <div className="mt-4 aspect-video w-full">
              <iframe
                src={selectedMovie.video + "?autoplay=1"}
                className="w-full h-full rounded-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
