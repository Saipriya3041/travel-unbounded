import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-8 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
          About Travel Unbounded
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          At <span className="font-semibold text-blue-600">Travel Unbounded</span>, we believe the best journeys aren’t sold from a catalogue — they’re crafted around the people taking them. Every itinerary is a story waiting to be lived.
        </p>
      </section>

      {/* Offices Section */}
      <section className="py-12 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Offices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600">Bengaluru HQ</h3>
            <p className="text-gray-600 mt-2">541, 7th Main Rd, HAL 2nd Stage</p>
          </div>
          <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600">Kochi</h3>
            <p className="text-gray-600 mt-2">LR Towers, S Janatha Road</p>
          </div>
          <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600">Nairobi</h3>
            <p className="text-gray-600 mt-2">Westpark Towers, Muthithi Road</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-100 to-blue-200 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600">✅ Personally‑Vetted Experiences</h3>
            <p className="text-gray-600 mt-2">Every trip is hand‑picked for authenticity and comfort.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600">🗺️ Local Guides</h3>
            <p className="text-gray-600 mt-2">Explore destinations through the eyes of locals.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600">🧭 Custom Itineraries</h3>
            <p className="text-gray-600 mt-2">Tailored journeys that match your interests and pace.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600">📞 24×7 Support</h3>
            <p className="text-gray-600 mt-2">We’re always here to make your travel smooth and safe.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
