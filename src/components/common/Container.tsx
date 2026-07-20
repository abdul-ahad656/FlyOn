import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container = ({
    children,
    className,
}: ContainerProps) => {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-container px-6 lg:px-10",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;