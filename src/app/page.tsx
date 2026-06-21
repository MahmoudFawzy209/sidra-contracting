import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <Services />

      {/* Footer & Floating CTAs */}
      <Footer />
      <FloatingActions />
    </main>
  );
}
