import { forwardRef } from "react";

const stats = [
  {
    value: "18K+",
    label: "Happy Travelers",
  },
  {
    value: "60+",
    label: "Destinations",
  },
  {
    value: "15",
    label: "Years Experience",
  },
];

const HeroStats = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="mt-16 grid grid-cols-3 gap-10"
    >
      {stats.map((item) => (
        <div key={item.label}>
          <h2 className="font-heading text-4xl font-bold text-primary">
            {item.value}
          </h2>

          <p className="mt-2 text-sm text-text-light">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
});

HeroStats.displayName = "HeroStats";

export default HeroStats;