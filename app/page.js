import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import DestinationSection from "../components/DestinationSection";

export default function HomePage() {
  return (
    <>
      {/* ✅ Top Navigation */}
      <Navbar />

      {/* ✅ Hero Banner */}
      <Hero />

      {/* ✅ India Destinations */}
      <DestinationSection category="india" title="India Destinations" />

      {/* ✅ International Destinations */}
      <DestinationSection category="international" title="International Destinations" />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}
