//import Link from "next/link";
import { Spotlight } from "~/components/ui/Spotlight";
import { SparklesCore } from "~/components/ui/sparkles";
import Header from "~/components/ui/navbar";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#000000] text-white">
      <Header />
      <Spotlight />
      <div className="flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
        <h1 className="relative z-20 text-center text-3xl font-bold text-white md:text-7xl lg:text-9xl">
          A Different Kinda Fix
        </h1>
        <div className="relative h-40 w-[40rem]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </main>
  );
}
