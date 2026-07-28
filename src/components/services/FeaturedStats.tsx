const stats = [
  {
    value: "250+",
    label: "Private Flights",
  },
  {
    value: "60+",
    label: "Countries",
  },
  {
    value: "24/7",
    label: "Concierge",
  },
];

const FeaturedStats = () => {
  return (
    <div className="mt-12 grid grid-cols-3 gap-6">

      {stats.map((stat) => (

        <div key={stat.label}>

          <h3 className="text-3xl font-bold text-primary">
            {stat.value}
          </h3>

          <p className="mt-2 text-text-light">
            {stat.label}
          </p>

        </div>

      ))}

    </div>
  );
};

export default FeaturedStats;