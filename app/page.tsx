import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Services from "@/components/sections/Services";
import Courses from "@/components/sections/Courses";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <VideoShowcase />
      <Services />
      <Courses />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
