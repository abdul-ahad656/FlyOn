import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import { FlightDirector } from "../components/flight";
import { FlightProvider } from "../context/FlightContext";
import Services from "../components/services";
import Destinations from "../components/destinations"

const Home = () => {
  return (
    <FlightProvider>
      <Hero />
      <About />
      <FlightDirector />
      <Services />
      <Destinations />
    </FlightProvider>
  );
};

export default Home;
