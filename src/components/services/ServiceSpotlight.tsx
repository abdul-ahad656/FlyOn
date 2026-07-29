import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const ServiceSpotlight = ({
  children,
}: Props) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      onMouseMove={(e) => {
        const rect =
          e.currentTarget.getBoundingClientRect();

        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="relative overflow-hidden rounded-[30px]"
    >
      <div
        className="
          pointer-events-none
          absolute
          h-56
          w-56
          rounded-full
          blur-3xl
          transition-opacity
          duration-300
        "
        style={{
          left: position.x - 110,
          top: position.y - 110,
          background:
            "radial-gradient(circle, rgba(14,165,233,.12), transparent 70%)",
        }}
      />

      {children}
    </div>
  );
};

export default ServiceSpotlight;