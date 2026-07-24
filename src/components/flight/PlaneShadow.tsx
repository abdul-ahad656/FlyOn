import { forwardRef } from "react";

/**
 * Soft ground shadow that follows the global plane with a slight lag offset.
 */
const PlaneShadow = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="
        plane-shadow
        absolute
        left-0
        top-0
        -z-10
        h-12
        w-28
        rounded-full
        bg-slate-900/10
        blur-2xl
        will-change-transform
      "
      style={{ opacity: 0 }}
      aria-hidden
    />
  );
});

PlaneShadow.displayName = "PlaneShadow";

export default PlaneShadow;
