import { forwardRef } from "react";

const HeroHeading = forwardRef<HTMLHeadingElement>((_, ref) => {
  return (
    <h1
      ref={ref}
      className="mt-8 max-w-3xl font-heading text-6xl font-bold leading-[1.05] text-slate-900 lg:text-8xl"
    >
      Fly Beyond
      <br />

      <span className="text-primary">
        Ordinary.
      </span>
    </h1>
  );
});

HeroHeading.displayName = "HeroHeading";

export default HeroHeading;