import FeaturedImage from "./FeaturedImage";
import FeaturedContent from "./FeaturedContent";

const FeaturedService = () => {
  return (
    <section
      className="
        mt-24
        overflow-hidden
        rounded-[42px]
        border
        border-white/60
        bg-white/80
        shadow-[0_50px_120px_rgba(15,23,42,.10)]
        backdrop-blur-xl
      "
    >
      <div className="grid lg:grid-cols-2">
        <FeaturedImage />

        <FeaturedContent />
      </div>
    </section>
  );
};

export default FeaturedService;