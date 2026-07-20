import { Star } from "lucide-react";

const TrustBadge = () => {
  return (
    <div
      className="
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-primary/15
      bg-white/70
      px-5
      py-3
      backdrop-blur-xl
    "
    >
      <div className="flex text-[#D9B56B]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="currentColor"
          />
        ))}
      </div>

      <span className="text-sm font-medium">
        Rated 4.9 by 18,000+ Travelers
      </span>
    </div>
  );
};

export default TrustBadge;