import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MenuItem } from "@/common";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "St Louis Roofer",
  description: "Divine Metal and Roofing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundImage: "url(/bg.png)" }}>
        <div className="container mx-auto lg:max-w-screen-xl p-4 flex flex-col gap-4">
          <div className="p-4 bg-white">
            <div
              className="p-4 py-20 flex flex-col items-center"
              style={{
                backgroundImage:
                  "url(https://divinemetalandroofing.com/wp-content/uploads/2021/08/Architectural-Roof.jpg?id=498)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="flex flex-col gap-4">
                <a href="#" rel="home" aria-current="page">
                  <Image
                    width={425}
                    height={250}
                    src="/logo.png"
                    className="custom-logo"
                    alt="Divine Metal And Roofing"
                    sizes="(max-width: 425px) 100vw, 425px"
                  />
                </a>
                <p className="site-title uppercase text-4xl font-bold">
                  <a href="#" rel="home">
                    Divine Metal And Roofing
                  </a>
                </p>
                <p className="site-description"></p>
              </div>
            </div>
          </div>
          <nav>
            <ul className="flex bg-[#504741] justify-center">
              <MenuItem title="Home" href="/" />
              <MenuItem title="Residential" href="/residential" />
              <MenuItem title="Commercial" href="/commercial" />
              <MenuItem title="Replacement And Installation" href="/replacement-and-installation" />
              <MenuItem title="Roof Repair" href="roof-repair" />
              <MenuItem title="Gallery" href="gallery" />
              <MenuItem title="About Us" href="about-us" />
            </ul>
          </nav>
          <main className="bg-white text-default p-8">{children}</main>
          <footer className="flex bg-white mt-2 p-8 flex-row items-start justify-between">
            <div className="flex-1">
              <Image
                width={250}
                height={75}
                src="/logo.png"
                className="custom-logo m-8"
                alt="Divine Metal And Roofing"
                sizes="(max-width: 425px) 100vw, 425px"
              />
            </div>
            <div className="flex flex-row gap-8 mx-8 w-3/5">
              <div className="flex flex-1 flex-col text-default gap-1">
                <p className="text-primary font-bold text-2xl mb-3">Services</p>
                <Link href={"/residential"}>Residential</Link>
                <Link href={"/commercial"}>Commercial</Link>
                <Link href={"/replacement-and-installation"}>Replacement and Installation</Link>
                <Link href={"/roof-repair"}>Roof Repair</Link>
              </div>
              <div className="flex flex-1 flex-col text-default  gap-1">
                <p className="text-primary font-bold text-2xl  mb-3">Contact Us</p>
                <Link href={""}>(636)-751-2237</Link>
                <Link href={""}>Privacy Policy</Link>
              </div>
              <div className="flex-1 flex-col text-default  gap-1">
                <p className="text-primary font-bold text-2xl  mb-3">Follow Us</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
