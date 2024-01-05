import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "St Louis Roofer",
  description: "Divine Metal and Roofing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundImage: "url(/bg.png)" }}>
        {children}
      </body>
    </html>
  );
}
