import type {
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

import { cn } from "../../utils/cn";

type Variant =
    | "primary"
    | "secondary"
    | "ghost";

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;

    variant?: Variant;
}

const Button = ({
    children,

    variant = "primary",

    className,

    ...props
}: ButtonProps) => {
    return (
        <button
            {...props}
            className={cn(
                "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium transition-all duration-300",

                variant === "primary" &&
                    "bg-primary text-white hover:bg-primary-dark hover:scale-[1.03]",

                variant === "secondary" &&
                    "border border-primary text-primary hover:bg-primary hover:text-white",

                variant === "ghost" &&
                    "text-primary hover:underline",

                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;