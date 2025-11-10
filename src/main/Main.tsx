import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Problem from "./Problem";
import Process from "./Process";
import Advantages from "./Advantages";
import Contact from "./Contact";
import bgImg from "/bg.jpg";

export default function Main() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Эффект параллакса для фона
  const y = useTransform(scrollY, [0, 600], [0, 150]);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main ref={containerRef} className="w-full overflow-x-hidden">
      {/* 🌍 Главный экран */}
      <section
        id="home"
        className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center"
      >
        {/* Parallax background */}
        <m.div
          style={{
            backgroundImage: `url(${bgImg})`,
            y,
          }}
          className="absolute inset-0 bg-cover bg-center"
        ></m.div>

        {/* Тёмный оверлей */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Декоративные элементы */}
        <m.div
          className="absolute top-10 left-10 text-4xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          🧴
        </m.div>

        <m.div
          className="absolute top-20 right-12 text-4xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          🍃
        </m.div>

        <m.div
          className="absolute bottom-16 left-1/4 text-4xl"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        >
          ♻️
        </m.div>

        {/* Основное содержимое */}
        <m.div
          className="z-10 text-white text-center max-w-3xl px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <m.h1
            className="text-4xl sm:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Պահպանիր մոլորակը՝ վերամշակի՛ր պլաստիկը ♻️
          </m.h1>

          <m.p
            className="text-lg sm:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Ամեն քայլն օգնում է մեզ ապրել մաքուր ու կայուն աշխարհում 🌿
          </m.p>

          <m.button
            className="bg-[#66BB6A] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#5DAE5F] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("problem")}
          >
            Իմանալ ավելին ↓
          </m.button>
        </m.div>

        {/* Scroll icon */}
        <m.div
          className="absolute bottom-6 text-white text-3xl cursor-pointer select-none"
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          onClick={() => scrollTo("problem")}
        >
          ↓
        </m.div>
      </section>

      {/* Остальные секции */}
      <Problem onNext={() => scrollTo("process")} />
      <Process onNext={() => scrollTo("advantages")} />
      <Advantages onNext={() => scrollTo("contact")} />
      <Contact />
    </main>
  );
}
