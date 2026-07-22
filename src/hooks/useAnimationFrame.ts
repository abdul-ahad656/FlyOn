import { useEffect, useRef } from "react";

const useAnimationFrame = (
  callback: (delta: number, elapsed: number) => void
) => {
  const frame = useRef<number>(undefined);

  const previous = useRef(performance.now());

  const elapsed = useRef(0);

  useEffect(() => {
    const animate = (time: number) => {
      const delta = (time - previous.current) / 1000;

      previous.current = time;

      elapsed.current += delta;

      callback(delta, elapsed.current);

      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [callback]);
};

export default useAnimationFrame;