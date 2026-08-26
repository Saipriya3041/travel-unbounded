import DestinationCard from "./DestinationCard";
import { destinations } from "../data/destination";

export default function DestinationSection({ category, title }) {
  const filtered = destinations.filter((d) => d.category === category);

  return (
    <section className="my-12 px-6">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </section>
  );
}
