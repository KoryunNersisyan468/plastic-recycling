import { useEffect, useState } from "react";
import { m } from "framer-motion";
import logo from "/logo.svg"
interface HeaderProps {
  siteName?: string;
}

export default function Header({ siteName = "EcoCycle" }: HeaderProps) {
  const [time, setTime] = useState<Date>(new Date());
  const [index, setIndex] = useState<number>(0);

  const messages: string[] = [
    "Մաքուր մոլորակ՝ մաքուր ապագա 🌍",
    "Վերամշակիր, մի՛ նետիր ♻️",
    "Պահպանիր բնությունը՝ այսօր և միշտ 🌿",
  ];

  // Обновляем время каждую секунду
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Меняем сообщение каждые 5 секунд
  useEffect(() => {
    const msgTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(msgTimer);
  }, [messages.length]);

  return (
    <header className="w-full bg-[#2E7D32] text-white py-3 px-6 flex justify-between items-center shadow-lg sticky top-0 z-50">
      {/* Логотип */}
      <m.div
        className="flex items-center gap-2"
      >
        <span className="text-2xl"><img className="w-7 h-7" src={logo} alt="logo" /></span>
        <h1 className="font-bold text-xl">{siteName}</h1>
      </m.div>

      {/* Сообщение */}
      <m.p
        key={index}
        className="italic text-sm sm:text-base text-center max-w-xs"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6 }}
      >
        {messages[index]}
      </m.p>

      {/* Часы */}
      <m.div
        className="font-mono text-sm sm:text-lg"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        {time.toLocaleTimeString("hy-AM")}
      </m.div>
    </header>
  );
}
