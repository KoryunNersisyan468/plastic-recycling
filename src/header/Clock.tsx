import { useEffect, useState } from "react";
import { m } from "framer-motion";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsSmallScreen(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const formattedTime = isSmallScreen
    ? time.toLocaleTimeString("hy-AM", { hour: "2-digit", minute: "2-digit" })
    : time.toLocaleTimeString("hy-AM");

  return (
    <m.div
      className="font-mono text-sm sm:text-lg"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      {formattedTime}
    </m.div>
  );
}
