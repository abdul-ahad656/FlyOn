const Sky = () => {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
      "
    >
      {/* Main Sky */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#EAF7FF]
          via-[#F7FCFF]
          to-[#FFFFFF]
        "
      />

      {/* Top Light */}
      <div
        className="
          absolute
          left-1/2
          top-[-20%]
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#DDF5FF]
          opacity-70
          blur-[180px]
        "
      />
    </div>
  );
};

export default Sky;