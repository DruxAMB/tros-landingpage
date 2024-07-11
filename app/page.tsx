import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/hero-section";
import { NavBar } from "@/components/nav-bar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <div className="p-3 pb-0 lg:px-28">
        <HeroSection />
      </div>
      <Footer />
    </main>
  );
}
