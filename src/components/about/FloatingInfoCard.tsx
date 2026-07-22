interface Props {
  value: string;
  label: string;
}

const FloatingInfoCard = ({
  value,
  label,
}: Props) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/60
        bg-white/80
        px-6
        py-5
        shadow-xl
        backdrop-blur-xl
        will-change-transform
      "
    >
      <h3 className="text-3xl font-bold text-primary">
        {value}
      </h3>

      <p className="mt-1 text-sm text-text-light">
        {label}
      </p>
    </div>
  );
};

export default FloatingInfoCard;