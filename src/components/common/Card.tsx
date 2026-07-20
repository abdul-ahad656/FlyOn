import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card = ({
    children,
    className,
}: CardProps) => {
    return (
        <div
            className={cn(
                "rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-luxury",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;