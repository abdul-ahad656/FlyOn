import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

const Badge = ({
    children,
    className,
}: BadgeProps) => {
    return (
        <span
            className={cn(
                "inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-primary",
                className
            )}
        >
            {children}
        </span>
    );
};

export default Badge;