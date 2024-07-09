
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/hero-section";
import { NavBar } from "@/components/nav-bar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-3 md:px-28">
      <NavBar />
      <HeroSection />
      <Footer />
    </main>
  );
}
