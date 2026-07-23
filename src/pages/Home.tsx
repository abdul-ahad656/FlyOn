import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import FlightDirector from "../components/flight/FlightDirector";
import { FlightProvider } from "../context/FlightContext";
const Home = () => {
  return (
    <>
      <FlightProvider>
        <Hero />
        <About />
        <FlightDirector />
      </FlightProvider>
    </>
  );
};

export default Home;