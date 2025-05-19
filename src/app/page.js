"use client";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import WeddingPackages from "../components/WeddingPackages";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import WeddingStory from "@/components/WeddingStory";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <AboutSection />
      <WeddingStory />
      <WeddingPackages />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
