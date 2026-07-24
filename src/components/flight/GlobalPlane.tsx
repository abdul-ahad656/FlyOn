import { forwardRef } from "react";

import planeUrl from "../../assets/illustrations/plane.svg?url";
import PlaneShadow from "./PlaneShadow";

interface GlobalPlaneProps {
  shadowRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Single fixed aircraft for the whole page.
 * Ownership lives in FlightDirector — never mount more than once.
 */
const GlobalPlane = forwardRef<HTMLDivElement, GlobalPlaneProps>(
  ({ shadowRef }, ref) => {
    return (
      <div className="pointer-events-none fixed inset-0 z-[90] overflow-visible">
        <PlaneShadow ref={shadowRef} />

        <div
          ref={ref}
          className="
            global-plane
            absolute
            left-0
            top-0
            origin-center
            select-none
            will-change-transform
            [backface-visibility:hidden]
            [transform-style:preserve-3d]
          "
          style={{ opacity: 0 }}
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10
              scale-110
              rounded-full
              bg-sky-200/10
              blur-[56px]
            "
            aria-hidden
          />

          <img
            src={planeUrl}
            alt=""
            draggable={false}
            className="
              global-plane-img
              block
              w-[min(260px,70vw)]
              max-w-none
              select-none
              drop-shadow-[0_22px_40px_rgba(15,23,42,0.22)]
              sm:w-[340px]
              lg:w-[420px]
            "
          />

          <div
            className="
              global-plane-engine
              absolute
              right-[5%]
              top-1/2
              h-2
              w-2
              -translate-y-1/2
              rounded-full
              bg-cyan-300/55
              blur-md
            "
            aria-hidden
          />
        </div>
      </div>
    );
  }
);

GlobalPlane.displayName = "GlobalPlane";

export default GlobalPlane;
