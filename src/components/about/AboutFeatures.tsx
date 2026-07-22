import {
  Plane,
  Hotel,
  MapPinned,
  Headphones,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <Plane size={28} />,
    title: "Private Aviation",
    description:
      "Fly comfortably with premium private jet experiences tailored for every journey.",
  },
  {
    icon: <Hotel size={28} />,
    title: "Luxury Resorts",
    description:
      "Stay at carefully selected five-star resorts and boutique hotels around the world.",
  },
  {
    icon: <MapPinned size={28} />,
    title: "Personalized Tours",
    description:
      "Every itinerary is customized around your interests, pace, and travel style.",
  },
  {
    icon: <Headphones size={28} />,
    title: "24/7 Concierge",
    description:
      "Dedicated travel experts available anytime before, during, and after your trip.",
  },
];

const AboutFeatures = () => {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          {...feature}
        />
      ))}
    </div>
  );
};

export default AboutFeatures;