import { MapPin } from "lucide-react";

interface Props {
  city: string;
  country: string;
}

const DestinationTag = ({
  city,
  country,
}: Props) => {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-full
        border
        border-white/60
        bg-white/80
        px-5
        py-3
        shadow-xl
        backdrop-blur-xl
        will-change-transform
      "
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        <MapPin
          size={18}
          className="text-primary"
        />
      </div>

      <div>
        <p className="text-sm font-semibold">
          {city}
        </p>

        <p className="text-xs text-text-light">
          {country}
        </p>
      </div>
    </div>
  );
};

export default DestinationTag;