export default function DestinationCard({ destination }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 overflow-hidden">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold text-blue-700">{destination.name}</h3>
        <p className="text-gray-600 mt-2">{destination.description}</p>
        <p className="mt-3 font-semibold text-blue-600">
          Starting from ₹{destination.price}
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition duration-300"
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
}
