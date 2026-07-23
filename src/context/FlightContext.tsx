import {
  createContext,
  useContext,
  useState,
} from "react";

interface FlightContextType {
  landingTarget: DOMRect | null;

  setLandingTarget: (
    rect: DOMRect | null
  ) => void;
}

const FlightContext =
  createContext<FlightContextType | null>(null);

export const FlightProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [landingTarget, setLandingTarget] =
    useState<DOMRect | null>(null);

  return (
    <FlightContext.Provider
      value={{
        landingTarget,
        setLandingTarget,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export const useFlight = () => {
  const ctx = useContext(FlightContext);

  if (!ctx)
    throw new Error(
      "FlightProvider missing"
    );

  return ctx;
};