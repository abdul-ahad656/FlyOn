import { forwardRef } from "react";

const SunGlow = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="
      absolute
      right-[10%]
      top-[8%]
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#FFD86B]/30
      blur-[150px]
      will-change-transform
      "
    />
  );
});

SunGlow.displayName = "SunGlow";

export default SunGlow;