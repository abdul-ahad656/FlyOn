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
            h-20
            w-20
            rounded-full
            bg-slate-900/10
            blur-3xl
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
          {/* Soft Atmospheric Glow */}
          <div
            className="
              absolute
              inset-0
              scale-125
              rounded-full
              bg-sky-300/10
              blur-[80px]
              -z-10
            "
          />

          {/* Plane SVG */}
          <img
            src="/src/assets/illustrations/plane.svg"
            alt="Flyon Plane"
            draggable={false}
            className="
              block
              w-[430px]
              xl:w-[470px]
              select-none
              will-change-transform
              drop-shadow-[0_35px_60px_rgba(15,23,42,0.25)]
            "
          />

          {/* Engine Light */}
          <div
            className="
              absolute
              right-8
              top-1/2
              h-3
              w-3
              -translate-y-1/2
              rounded-full
              bg-cyan-300/60
              blur-lg
            "
          />
        </div>
      </>
    );
  }
);

Plane.displayName = "Plane";

export default Plane;