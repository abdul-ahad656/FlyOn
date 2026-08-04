import FeaturedStats from "./FeaturedStats";
import FeaturedCTA from "./FeaturedCTA";

const FeaturedOverlay = () => {
  return (
    <div
      className="
        absolute
        bottom-10
        left-10
        max-w-xl
        rounded-[34px]
        border
        border-white/20
        bg-white/10
        p-8
        text-white
        backdrop-blur-2xl
      "
    >
      <span
        className="
          inline-flex
          rounded-full
          bg-white/15
          px-4
          py-2
          text-sm
          uppercase
          tracking-[2px]
        "
      >
        Featured Destination
      </span>

      <h2
        className="
          mt-6
          font-heading
          text-5xl
          font-bold
        "
      >
        Maldives
      </h2>

      <p
        className="
          mt-6
          leading-8
          text-white/80
        "
      >
        Experience crystal-clear lagoons, private villas,
        sunset cruises, and unforgettable luxury curated
        exclusively for Flyon travelers.
      </p>

      <FeaturedStats />

      <FeaturedCTA />
    </div>
  );
};

export default FeaturedOverlay;