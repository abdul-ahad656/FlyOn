import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface Props {
    children: ReactNode;

    className?: string;
}

const GlassCard = ({
    children,
    className,
}: Props) => {
    return (
        <div
            className={cn(
                "rounded-[32px] border border-white/40 bg-white/60 backdrop-blur-xl shadow-glass",
                className
            )}
        >
            {children}
        </div>
    );
};

export default GlassCard;