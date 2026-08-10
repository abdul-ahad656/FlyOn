import DestinationCard from "./DestinationCard";
import { destinations } from "./data";

const DestinationGrid = () => {
  const featured = destinations.find(
    (destination) => destination.featured
  );

  const sideCards = destinations.filter(
    (destination) =>
      !destination.featured &&
      (destination.title === "Dubai" ||
        destination.title === "Kyoto")
  );

  const bottomCards = destinations.filter(
    (destination) =>
      !destination.featured &&
      !["Dubai", "Kyoto"].includes(
        destination.title
      )
  );

  return (
    <div className="mt-16 w-full">
      {/* =========================================
          PRIMARY EDITORIAL GRID
      ========================================= */}

      <div
        className="
          grid
          gap-6
          lg:grid-cols-[1.8fr_1fr]
          lg:items-stretch
        "
      >
        {/* -----------------------------------------
            FEATURED DESTINATION
        ----------------------------------------- */}

        {featured && (
          <DestinationCard
            destination={featured}
            variant="featured"
          />
        )}

        {/* -----------------------------------------
            RIGHT-SIDE DESTINATIONS
        ----------------------------------------- */}

        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-1
          "
        >
          {sideCards.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              variant="side"
            />
          ))}
        </div>
      </div>

      {/* =========================================
          BOTTOM EDITORIAL ROW
      ========================================= */}

      <div
        className="
          mt-6
          grid
          gap-6
          sm:grid-cols-2
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