import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
}

const ServiceIcon = ({ icon: Icon }: Props) => {
  return (
    <div
      className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-primary/10
        bg-primary/5
        text-primary
        transition-all
        duration-500
        group-hover:rotate-6
        group-hover:scale-110
        group-hover:bg-primary
        group-hover:text-white
      "
    >
      <Icon size={28} />
    </div>
  );
};

export default ServiceIcon;