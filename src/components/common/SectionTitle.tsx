import Badge from "./Badge";

interface SectionTitleProps {
    badge: string;

    title: string;

    description?: string;

    center?: boolean;
}

const SectionTitle = ({
    badge,
    title,
    description,
    center = true,
}: SectionTitleProps) => {
    return (
        <div
            className={`${
                center
                    ? "mx-auto text-center"
                    : ""
            } max-w-3xl`}
        >
            <Badge>{badge}</Badge>

            <h2 className="mt-6 font-heading text-5xl font-bold leading-tight lg:text-6xl">
                {title}
            </h2>

            {description && (
                <p className="mt-6 text-lg leading-8 text-text-light">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;