import { forwardRef } from "react";

import plane from "../../assets/illustrations/plane.png";

const GlobalPlane = forwardRef<
  HTMLDivElement,
  {}
>((_, ref) => {
  return (
    <div
      ref={ref}
      className="
      fixed
      left-0
      top-0
      z-[90]
      pointer-events-none
      will-change-transform
      "
    >
      <img
        src={plane}
        alt="Plane"
        draggable={false}
        className="
        w-[420px]
        select-none
        drop-shadow-[0_25px_40px_rgba(0,0,0,.25)]
        "
      />
    </div>
  );
});

GlobalPlane.displayName =
  "GlobalPlane";

export default GlobalPlane;