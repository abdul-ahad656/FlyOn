const stats = [
  {
    value: "60+",
    label: "Destinations",
  },
  {
    value: "18K+",
    label: "Travelers",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

const CTAStats = () => {
  return (
    <div
      className="
        mt-14
        grid
        gap-8
        md:grid-cols-3
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center"
        >
          <h3
            className="
              font-heading
              text-4xl
              font-bold
              text-primary
            "
          >
            {stat.value}
          </h3>

          <p
            className="
              mt-2
              text-text-light
            "
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CTAStats;