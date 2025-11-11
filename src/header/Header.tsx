import { useEffect, useState } from "react";
import { m } from "framer-motion";
import icon from "/icon.svg";
import { messages } from "../data/message";
import Clock from "./Clock";
import { Message } from "./Message";

export default function Header() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const msgTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 10000);
    return () => clearInterval(msgTimer);
  }, []);

  return (
    <header className="w-full h-16 py-3 px-3 sm:px-5 md:px-6 bg-[#2E7D32] text-white flex justify-between items-center shadow-lg sticky top-0 z-50">
      <m.div className="flex items-center gap-2">
        <span className="text-2xl">
          <img className="w-10 sm:w-16 md:w-20 h-10" src={icon} alt="icon" />
        </span>
      </m.div>
      <Message text={messages[index]} index={index} />
      <Clock />
    </header>
  );
}
