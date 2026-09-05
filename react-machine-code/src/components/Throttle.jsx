import { useState, useEffect, useRef } from "react";

function useThrottle(value, interval = 500) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const elapsed = Date.now() - lastExecuted.current;

    if (elapsed >= interval) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      const timer = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, interval - elapsed);

      return () => clearTimeout(timer);
    }
  }, [value, interval]);

  return throttledValue;
}

export default function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 400);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "3000px", padding: "20px" }}>
      <div style={{ position: "fixed", top: 10, left: 10 }}>
        <p>Raw Scroll Y: {scrollY}px</p>
        <p>
          Throttled Scroll Y: {throttledScrollY}px (updates max once every
          400ms)
        </p>
      </div>
    </div>
  );
}
