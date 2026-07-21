import { forwardRef } from "react";

interface Props {
  refs: React.RefObject<HTMLImageElement[]>;
}

const clouds = [
  {
    src: "/src/assets/illustrations/cloud-1.svg",
    className:
      "absolute left-[8%] top-[12%] w-56 opacity-70",
  },
  {
    src: "/src/assets/illustrations/cloud-2.svg",
    className:
      "absolute right-[5%] top-[22%] w-44 opacity-80",
  },
  {
    src: "/src/assets/illustrations/cloud-3.svg",
    className:
      "absolute left-[28%] bottom-[15%] w-72 opacity-50",
  },
];

const Clouds = forwardRef<HTMLDivElement, Props>(
  ({ refs }, _) => {
    return (
      <>
        {clouds.map((cloud, index) => (
          <img
            key={index}
            ref={(el) => {
              if (el) refs.current[index] = el;
            }}
            src={cloud.src}
            className={`${cloud.className} pointer-events-none select-none will-change-transform`}
            draggable={false}
            alt=""
          />
        ))}
      </>
    );
  }
);

Clouds.displayName = "Clouds";

export default Clouds;