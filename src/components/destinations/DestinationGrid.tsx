import DestinationCard from "./DestinationCard";

import { destinations } from "./data";

const DestinationGrid = () => {
  const cards = destinations.filter(
    (item) => !item.featured
  );

  return (
    <div
      className="
        mt-16
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {cards.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  );
};

export default DestinationGrid;