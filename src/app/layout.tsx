import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "My App",
  description: "Welcome to my Next.js app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={geist.className}>
        <body className="bg-black text-white">{children}</body>
      </html>
    </ClerkProvider>
  );
}
