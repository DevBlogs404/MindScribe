// "use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "./components/Logo";
import heroImage from "../public/heroImage.webp";

export default function Home() {
  return (
    <main className=" w-screen h-screen overflow-hidden flex items-center justify-center">
      <Image src={heroImage} alt="hero" fill className="absolute" />
      <div className=" relative z-10 px-10 py-5 text-center text-white max-w-screen-sm rounded-md bg-slate-900/90 backdrop-blur-sm">
        <Logo />
        <p className="my-3 text-xl">
          The AI-powered SaSS solution to generate SEO-optimized blog posts in
          minutes. Get high-quality content, without sacrificing your time.
        </p>
        <Link href="/post/new" className="btn">
          Begin
        </Link>
      </div>
    </main>
  );
}
