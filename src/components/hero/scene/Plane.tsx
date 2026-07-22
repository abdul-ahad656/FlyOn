import { forwardRef } from "react";

interface Props {
  shadowRef: React.RefObject<HTMLDivElement | null>;
}

const Plane = forwardRef<HTMLDivElement, Props>(
  ({ shadowRef }, ref) => {
    return (
      <>
        {/* Plane Shadow */}
        <div
          ref={shadowRef}
          className="
            plane-shadow
            absolute
            left-0
            top-0
            h-14
            w-14
            rounded-full
            bg-slate-900/8
            blur-2xl
            pointer-events-none
            will-change-transform
            -z-10
          "
        />

        {/* Plane */}
        <div
          ref={ref}
          className="
            plane
            absolute
            left-0
            top-0
            origin-center
            pointer-events-none
            select-none
            will-change-transform
            [transform-style:preserve-3d]
            [backface-visibility:hidden]
          "
        >
          {/* Soft Atmospheric Glow — reduced, feels like scattered light */}
          <div
            className="
              absolute
              inset-0
              scale-110
              rounded-full
              bg-sky-200/6
              blur-[60px]
              -z-10
            "
          />

          {/* Plane SVG — width matches PLANE_WIDTH in physics.ts */}
          <img
            src="/src/assets/illustrations/plane.svg"
            alt="Flyon Plane"
            draggable={false}
            className="
              block
              w-[410px]
              select-none
              will-change-transform
              drop-shadow-[0_20px_40px_rgba(15,23,42,0.18)]
            "
          />

          {/* Engine Light — positioned at rear (right side for right-facing plane) */}
          <div
            className="
              absolute
              right-6
              top-1/2
              h-2
              w-2
              -translate-y-1/2
              rounded-full
              bg-cyan-300/50
              blur-md
            "
          />
        </div>
      </>
    );
  }
);

Plane.displayName = "Plane";

export default Plane;