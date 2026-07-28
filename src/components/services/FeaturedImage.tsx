import jetImage from "../../assets/services/private-jet.jpeg";

const FeaturedImage = () => {
  return (
    <div className="relative overflow-hidden">

      <img
        src={jetImage}
        alt="Private Jet"
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          hover:scale-105
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-transparent
          to-slate-900/30
        "
      />

      <div
        className="
          absolute
          bottom-8
          left-8
          rounded-full
          bg-white/15
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        <p className="text-sm tracking-[3px] text-white uppercase">
          Featured Service
        </p>
      </div>

    </div>
  );
};

export default FeaturedImage;