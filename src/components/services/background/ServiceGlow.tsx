const ServiceGlow = () => {
  return (
    <div
      className="
        absolute
        -right-20
        -top-20
        h-44
        w-44
        rounded-full
        bg-primary/10
        opacity-0
        blur-[80px]
        transition-all
        duration-700
        group-hover:opacity-100
        group-hover:scale-125
      "
    />
  );
};

export default ServiceGlow;