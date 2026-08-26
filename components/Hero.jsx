export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh]"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      {/* Overlay with neon gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/70 via-purple-600/60 to-pink-500/70 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
          India's Most Trusted Experiential Travel Experts
        </h1>
        <p className="mt-6 text-xl md:text-2xl max-w-2xl leading-relaxed">
          Crafting journeys that go beyond sightseeing — discover, feel, and live the adventure.
        </p>
        <a
          href="/contact"
          className="mt-8 bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 px-8 py-4 rounded-lg text-black font-bold text-lg shadow-xl transform hover:scale-110 transition duration-300"
        >
          🚀 Plan Your Trip
        </a>
      </div>
    </section>
  );
}
