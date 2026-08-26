export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md border-b-2 border-blue-600">
      <h1 className="text-3xl font-extrabold text-blue-600 tracking-wide">
        Travel Unbounded
      </h1>
      <div className="space-x-10 text-lg font-semibold">
        <a
          href="/"
          className="text-blue-600 hover:text-blue-800 transition duration-300 border-b-2 border-transparent hover:border-blue-600"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-blue-600 hover:text-blue-800 transition duration-300 border-b-2 border-transparent hover:border-blue-600"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-blue-600 hover:text-blue-800 transition duration-300 border-b-2 border-transparent hover:border-blue-600"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
