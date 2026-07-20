import Container from "../src/components/common/Container";
import Button from "../src/components/common/Button";
import Card from "../src/components/common/Card";
import SectionTitle from "../src/components/common/SectionTitle";

const Home = () => {
    return (
        <section className="h-screen py-32">
            <Container>
                <SectionTitle
                    badge="Luxury Travel"
                    title="Fly Beyond Ordinary."
                    description="Premium travel experiences crafted with elegance."
                />

                <div className="mt-16 flex justify-center gap-4">
                    <Button>Book Now</Button>

                    <Button variant="secondary">
                        Explore
                    </Button>
                </div>

                <Card className="mx-auto mt-20 max-w-xl">
                    <h3 className="text-2xl font-bold">
                        Welcome to Flyon
                    </h3>

                    <p className="mt-4 text-text-light">
                        Building premium travel experiences with modern UI.
                    </p>
                </Card>
            </Container>
        </section>
        
    );
};

export default Home;