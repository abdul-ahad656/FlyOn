// import DestinationCard from "./DestinationCard";

// import { destinations } from "./data";

// const DestinationGrid = () => {
//   const cards = destinations.filter(
//     (item) => !item.featured
//   );

//   return (
//     <div
//       className="
//         mt-16
//         grid
//         gap-8
//         md:grid-cols-2
//         xl:grid-cols-3
//       "
//     >
//       {cards.map((destination) => (
//         <DestinationCard
//           key={destination.id}
//           destination={destination}
//         />
//       ))}
//     </div>
//   );
// };

// export default DestinationGrid;

import DestinationCard from "./DestinationCard";
import { destinations } from "./data";

const DestinationGrid = () => {
  const featured = destinations.find(
    (item) => item.featured
  );

  const sideCards = destinations.filter(
    (item) =>
      !item.featured &&
      (item.title === "Dubai" || item.title === "Kyoto")
  );

  const bottomCards = destinations.filter(
    (item) =>
      !item.featured &&
      !["Dubai", "Kyoto"].includes(item.title)
  );

  return (
    <div className="mt-20">
      {/* Editorial Grid */}

      <div
        className="
          grid
          gap-6
          lg:grid-cols-[2fr_1fr]
        "
      >
        {/* Featured */}

        {featured && (
          <DestinationCard
            destination={featured}
            variant="featured"
          />
        )}

        {/* Right Stack */}

        <div
          className="
            flex
            flex-col
            gap-6
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

      {/* Bottom Row */}

      <div
        className="
          mt-6
          grid
          gap-6
          md:grid-cols-3
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