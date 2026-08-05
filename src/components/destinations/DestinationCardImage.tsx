// import type { DestinationCardData } from "./types";

// interface Props {
//   destination: DestinationCardData;

//   imageRef: React.RefObject<HTMLDivElement | null>;

//   glowRef: React.RefObject<HTMLDivElement | null>;

//   spotlightRef: React.RefObject<HTMLDivElement | null>;

//   badgeRef: React.RefObject<HTMLDivElement | null>;

//   overlayRef: React.RefObject<HTMLDivElement | null>;

//   sweepRef: React.RefObject<HTMLDivElement | null>;
// }

// const DestinationCardImage = ({
//   destination,
//   imageRef,
//   glowRef,
//   spotlightRef,
//   badgeRef,
//   overlayRef,
//   sweepRef,
// }: Props) => {
//   return (
//     <div
//       className="
//         relative
//         h-72
//         overflow-hidden
//       "
//     >
//       {/* Ambient Glow */}

//       <div
//         ref={glowRef}
//         className="
//           absolute
//           left-1/2
//           top-1/2
//           z-10
//           h-60
//           w-60
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-primary/20
//           blur-[110px]
//           pointer-events-none
//           will-change-transform
//         "
//       />

//       {/* Cursor Spotlight */}

//       <div
//         ref={spotlightRef}
//         className="
//           absolute
//           left-0
//           top-0
//           z-20
//           h-64
//           w-64
//           rounded-full
//           bg-white/20
//           opacity-0
//           blur-3xl
//           pointer-events-none
//           will-change-transform
//         "
//       />

//       {/* Image */}

//       <div
//         ref={imageRef}
//         className="
//           relative
//           h-full
//           overflow-hidden
//           will-change-transform
//         "
//       >
//         <img
//           src={destination.image}
//           alt={destination.title}
//           draggable={false}
//           className="
//             h-full
//             w-full
//             object-cover
//             select-none
//             pointer-events-none
//             will-change-transform
//           "
//         />

//         {/* Animated Cinematic Gradient */}

//         <div
//           ref={overlayRef}
//           className="
//             absolute
//             inset-0
//             bg-gradient-to-t
//             from-slate-950/80
//             via-slate-900/20
//             to-transparent
//             will-change-transform
//           "
//         />

//         {/* Soft Vignette */}

//         <div
//           className="
//             absolute
//             inset-0
//             bg-black/10
//           "
//         />

//         {/* Noise */}

//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.03]
//             mix-blend-overlay
//             bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
//             [background-size:22px_22px]
//           "
//         />

//         {/* GSAP Sweep */}

//         <div
//           ref={sweepRef}
//           className="
//             absolute
//             inset-y-0
//             -left-1/2
//             w-40
//             rotate-12
//             bg-gradient-to-r
//             from-transparent
//             via-white/35
//             to-transparent
//             blur-xl
//             pointer-events-none
//             will-change-transform
//           "
//         />

//         {/* Floating Badge */}

//         <div
//           ref={badgeRef}
//           className="
//             absolute
//             left-5
//             top-5
//             rounded-full
//             border
//             border-white/20
//             bg-white/10
//             px-4
//             py-2
//             backdrop-blur-xl
//             will-change-transform
//           "
//         >
//           <span
//             className="
//               text-xs
//               uppercase
//               tracking-[2px]
//               text-white
//               "
//             >
//             Luxury Escape
//           </span>
//         </div>

//         {/* Destination */}

//         <div
//           className="
//             absolute
//             bottom-5
//             left-5
//             right-5
//             flex
//             items-end
//             justify-between
//           "
//         >
//           <div>
//             <h3
//               className="
//                 text-2xl
//                 font-bold
//                 text-white
//               "
//             >
//               {destination.title}
//             </h3>

//             <p className="text-white/75">
//               {destination.country}
//             </p>
//           </div>

//           <div
//             className="
//               rounded-full
//               bg-white/15
//               px-4
//               py-2
//               backdrop-blur-xl
//             "
//           >
//             <span
//               className="
//                 text-sm
//                 font-medium
//                 text-white
//               "
//             >
//               {destination.duration}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DestinationCardImage;

import type { DestinationCardData } from "./types";

interface Props {
  destination: DestinationCardData;

  variant: "featured" | "side" | "bottom";

  imageRef: React.RefObject<HTMLDivElement | null>;

  glowRef: React.RefObject<HTMLDivElement | null>;

  spotlightRef: React.RefObject<HTMLDivElement | null>;

  badgeRef: React.RefObject<HTMLDivElement | null>;

  overlayRef: React.RefObject<HTMLDivElement | null>;

  sweepRef: React.RefObject<HTMLDivElement | null>;
}

const DestinationCardImage = ({
  destination,
  variant,
  imageRef,
  glowRef,
  spotlightRef,
  badgeRef,
  overlayRef,
  sweepRef,
}: Props) => {
  const imageHeight =
    variant === "featured"
      ? "h-[420px]"
      : variant === "side"
      ? "h-full min-h-[308px]"
      : "h-[250px]";

  return (
    <div
      className={`
        relative
        overflow-hidden
        ${imageHeight}
      `}
    >
      {/* Ambient Glow */}

      <div
        ref={glowRef}
        className="
          absolute
          left-1/2
          top-1/2
          z-10
          h-60
          w-60
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/20
          blur-[110px]
          pointer-events-none
          will-change-transform
        "
      />

      {/* Cursor Spotlight */}

      <div
        ref={spotlightRef}
        className="
          absolute
          left-0
          top-0
          z-20
          h-64
          w-64
          rounded-full
          bg-white/20
          opacity-0
          blur-3xl
          pointer-events-none
          will-change-transform
        "
      />

      {/* Image */}

      <div
        ref={imageRef}
        className="
          relative
          h-full
          overflow-hidden
          will-change-transform
        "
      >
        <img
          src={destination.image}
          alt={destination.title}
          draggable={false}
          className="
            h-full
            w-full
            object-cover
            select-none
            pointer-events-none
            will-change-transform
          "
        />

        {/* Gradient */}

        <div
          ref={overlayRef}
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/80
            via-slate-900/20
            to-transparent
          "
        />

        {/* Vignette */}

        <div className="absolute inset-0 bg-black/10" />

        {/* Noise */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-overlay
            bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
            [background-size:22px_22px]
          "
        />

        {/* Luxury Sweep */}

        <div
          ref={sweepRef}
          className="
            absolute
            inset-y-0
            -left-1/2
            w-40
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/35
            to-transparent
            blur-xl
            pointer-events-none
            will-change-transform
          "
        />

        {/* Badge */}

        <div
          ref={badgeRef}
          className="
            absolute
            left-5
            top-5
            rounded-full
            border
            border-white/20
            bg-white/10
            px-4
            py-2
            backdrop-blur-xl
          "
        >
          <span
            className="
              text-xs
              uppercase
              tracking-[2px]
              text-white
            "
          >
            Luxury Escape
          </span>
        </div>

        {/* Bottom Info */}

        <div
          className="
            absolute
            bottom-5
            left-5
            right-5
            flex
            items-end
            justify-between
          "
        >
          <div>
            <h3 className="text-2xl font-bold text-white">
              {destination.title}
            </h3>

            <p className="text-white/75">
              {destination.country}
            </p>
          </div>

          <div
            className="
              rounded-full
              bg-white/15
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span className="text-sm font-medium text-white">
              {destination.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCardImage;