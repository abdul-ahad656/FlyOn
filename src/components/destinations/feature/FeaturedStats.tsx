import { Star, Clock3, Wallet } from "lucide-react";

const items = [
  {
    icon: Star,
    label: "4.9 Rating",
  },
  {
    icon: Clock3,
    label: "7 Days",
  },
  {
    icon: Wallet,
    label: "From $4,900",
  },
];

const FeaturedStats = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              flex
              items-center
              gap-3
              rounded-full
              bg-white/10
              px-5
              py-3
            "
          >
            <Icon size={18} />

            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedStats;