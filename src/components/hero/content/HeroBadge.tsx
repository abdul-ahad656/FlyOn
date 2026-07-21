import { forwardRef } from "react";
import { Sparkles } from "lucide-react";

const HeroBadge = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-5 py-2 backdrop-blur-xl"
    >
      <Sparkles size={16} className="text-primary" />

      <span className="text-sm font-medium tracking-wide text-primary">
        Luxury Travel Experience
      </span>
    </div>
  );
});

HeroBadge.displayName = "HeroBadge";

export default HeroBadge;