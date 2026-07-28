import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import { FlightDirector } from "../components/flight";
import { FlightProvider } from "../context/FlightContext";
import Services from "../components/services";

const Home = () => {
  return (
    <FlightProvider>
      <Hero />
      <About />
      <FlightDirector />
      <Services />
    </FlightProvider>
  );
};

export default Home;
