import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingForm from "../../components/BookingForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-8 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          Booking Enquiry
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Ready to plan your next adventure? Fill out the form below and our travel experts will reach out within 24 hours to craft your perfect itinerary.
        </p>
      </section>

      <section className="py-12 px-6 flex justify-center bg-white">
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 shadow-xl rounded-xl p-8 w-full max-w-lg">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Enquiry Form
          </h2>
          <BookingForm />
        </div>
      </section>

      <section className="py-12 px-8 bg-gradient-to-r from-blue-100 to-blue-200 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Contact Details</h2>
        <p className="text-gray-700 text-lg">
          📍 Bengaluru HQ — 541, 7th Main Rd, HAL 2nd Stage
        </p>
        <p className="text-gray-700 text-lg mt-2">
          📞 Phone: <span className="font-semibold text-blue-600">+91 98765 43210</span>
        </p>
        <p className="text-gray-700 text-lg mt-2">
          ✉️ Email: <span className="font-semibold text-blue-600">info@travelunbounded.com</span>
        </p>
      </section>

      <Footer />
    </>
  );
}
