import { forwardRef } from "react";

const SunGlow = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="
      absolute
      right-[8%]
      top-[5%]
      h-[380px]
      w-[380px]
      rounded-full
      bg-[#FFD86B]/18
      blur-[200px]
      will-change-transform
      "
    />
  );
});

SunGlow.displayName = "SunGlow";

export default SunGlow;