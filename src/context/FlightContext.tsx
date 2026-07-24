import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface FlightContextType {
  /** Measured landing marker element — read via getBoundingClientRect each frame. */
  landingEl: HTMLElement | null;
  setLandingEl: (el: HTMLElement | null) => void;

  /** Flyon wordmark that fades in as the plane settles. */
  logoEl: HTMLElement | null;
  setLogoEl: (el: HTMLElement | null) => void;
}

const FlightContext = createContext<FlightContextType | null>(null);

export const FlightProvider = ({ children }: { children: ReactNode }) => {
  const [landingEl, setLandingElState] = useState<HTMLElement | null>(null);
  const [logoEl, setLogoElState] = useState<HTMLElement | null>(null);

  const setLandingEl = useCallback((el: HTMLElement | null) => {
    setLandingElState(el);
  }, []);

  const setLogoEl = useCallback((el: HTMLElement | null) => {
    setLogoElState(el);
  }, []);

  const value = useMemo(
    () => ({
      landingEl,
      setLandingEl,
      logoEl,
      setLogoEl,
    }),
    [landingEl, setLandingEl, logoEl, setLogoEl]
  );

  return (
    <FlightContext.Provider value={value}>{children}</FlightContext.Provider>
  );
};

export const useFlight = () => {
  const ctx = useContext(FlightContext);

  if (!ctx) {
    throw new Error("useFlight must be used within FlightProvider");
  }

  return ctx;
};
