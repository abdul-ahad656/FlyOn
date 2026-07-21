import { forwardRef } from "react";

interface Props {
  shadowRef: React.RefObject<HTMLDivElement | null>;
}

const Plane = forwardRef<HTMLDivElement, Props>(
  ({ shadowRef }, ref) => {
    return (
      <>
        {/* Shadow */}
        <div
          ref={shadowRef}
          className="absolute right-[14%] top-[58%] h-24 w-24 rounded-full bg-slate-900/15 blur-3xl"
        />

        {/* Plane */}
        <div
          ref={ref}
          className="absolute right-[12%] top-[20%] will-change-transform"
        >
          <img
            src="/src/assets/illustrations/plane.svg"
            alt="Flyon Plane"
            className="w-[540px] drop-shadow-[0_45px_60px_rgba(0,0,0,.28)] select-none"
            draggable={false}
          />
        </div>
      </>
    );
  }
);

Plane.displayName = "Plane";

export default Plane;