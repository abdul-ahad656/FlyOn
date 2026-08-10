import DestinationCard from "./DestinationCard";
import { destinations } from "./data";

const DestinationGrid = () => {
  const cards = destinations.filter(
    (destination) => !destination.featured
  );

  const sideCards = cards.filter(
    (destination) =>
      destination.title === "Dubai" ||
      destination.title === "Kyoto"
  );

  const bottomCards = cards.filter(
    (destination) =>
      !["Dubai", "Kyoto"].includes(destination.title)
  );

  return (
    <div className="mt-16">
      {/* --------------------------------
          Editorial Upper Grid
      -------------------------------- */}

      <div
        className="
          grid
          gap-6
          lg:grid-cols-[1.65fr_1fr]
        "
      >
        {/* Large Destination */}

        {sideCards[0] && (
          <DestinationCard
            destination={sideCards[0]}
            variant="featured"
          />
        )}

        {/* Stacked Destinations */}

        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-1
          "
        >
          {sideCards.slice(1).map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              variant="side"
            />
          ))}
        </div>
      </div>

      {/* --------------------------------
          Lower Editorial Grid
      -------------------------------- */}

      <div
        className="
          mt-6
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {bottomCards.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            variant="bottom"
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationGrid;