import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import QuotesSection from "@/components/QuotesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <QuotesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
