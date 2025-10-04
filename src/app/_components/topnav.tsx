"use client";

import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { Film } from "lucide-react";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between py-4">
      {/* Logo */}
      <div className="flex items-center gap-2 text-emerald-500 font-bold text-xl">
        <Film className="w-6 h-6" />
        MovieHub
      </div>

      {/* Auth Controls */}
      <div>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-md transition">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <SignOutButton>
            <button className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-md transition">
              Sign Out
            </button>
          </SignOutButton>
        </SignedIn>
      </div>
    </nav>
  );
}
