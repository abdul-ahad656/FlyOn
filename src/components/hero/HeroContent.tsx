import HeroBadge from "./content/HeroBadge";
import HeroHeading from "./content/HeroHeading";
import HeroDescription from "./content/HeroDescription";
import HeroButtons from "./content/HeroButtons";
import HeroStats from "./content/HeroStats";

interface Props {
  badgeRef: React.RefObject<HTMLDivElement | null>;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  descriptionRef: React.RefObject<HTMLParagraphElement | null>;
  buttonsRef: React.RefObject<HTMLDivElement | null>;
  statsRef: React.RefObject<HTMLDivElement | null>;
}

const HeroContent = ({
  badgeRef,
  headingRef,
  descriptionRef,
  buttonsRef,
  statsRef,
}: Props) => {
  return (
    <div className="relative z-30 max-w-2xl">
      <HeroBadge ref={badgeRef} />

      <HeroHeading ref={headingRef} />

      <HeroDescription ref={descriptionRef} />

      <HeroButtons ref={buttonsRef} />

      <HeroStats ref={statsRef} />
    </div>
  );
};

export default HeroContent;