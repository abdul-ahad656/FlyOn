import {
  CheckCircle2,
  Plane,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Private Jet Fleet",
    description:
      "Modern aircraft with premium cabins and personalized routes.",
  },
  {
    icon: Clock3,
    title: "Flexible Scheduling",
    description:
      "Fly on your own schedule with rapid departure availability.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "International safety standards with experienced flight crews.",
  },
  {
    icon: CheckCircle2,
    title: "VIP Concierge",
    description:
      "Luxury ground transportation, hotels, and personalized assistance.",
  },
];

const FeaturedFeatures = () => {
  return (
    <div className="grid gap-5">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.title}
            className="
              feature-item
              flex
              items-start
              gap-4
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
                text-primary
                shrink-0
              "
            >
              <Icon size={22} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-1 text-sm leading-7 text-text-light">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedFeatures;