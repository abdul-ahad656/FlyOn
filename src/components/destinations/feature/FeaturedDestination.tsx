import featuredImage from "../../assets/destinations/maldives.jpeg";

import FeaturedOverlay from "./FeaturedOverlay";

const FeaturedDestination = () => {
  return (
    <section
      className="
        relative
        mt-20
        overflow-hidden
        rounded-[42px]
        border
        border-white/60
        bg-white
        shadow-[0_50px_120px_rgba(15,23,42,.10)]
      "
    >
      <div className="relative h-[720px] overflow-hidden">

        <img
          src={featuredImage}
          alt="Maldives"
          className="
            h-full
            w-full
            object-cover
            will-change-transform
          "
        />

        {/* Image Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />

        <FeaturedOverlay />
      </div>
    </section>
  );
};

export default FeaturedDestination;