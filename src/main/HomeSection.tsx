import type { ISectionProps } from "../types/type";
import bgImg from "/bg.jpg";
import { m, useScroll, useTransform } from "framer-motion";
import recycle from "/recycle.png";
import leaf from "/leaf.png";
import drop from "/drop.png";

export default function HomeSelection({ onNext }: ISectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-64px)] sm:h-[calc(100vh-52px)] flex flex-col justify-center items-center bg-cover bg-center"
    >
      <m.div
        style={{
          backgroundImage: `url(${bgImg})`,
          y,
        }}
        className="absolute inset-0 bg-cover bg-center"
      ></m.div>

      <div className="absolute inset-0 bg-black/40"></div>

      <m.img
        className="absolute top-10 left-10 w-12"
        animate={{ y: [0, -10, 0] }}
        src={drop}
        alt="drop"
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <m.img
        className="absolute top-20 right-12 w-8"
        animate={{ y: [0, 15, 0] }}
        src={leaf}
        alt="leaf"
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <m.img
        className="absolute bottom-16 left-1/4 w-12"
        animate={{ y: [0, -12, 0] }}
        src={recycle}
        alt="recycle"
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
        

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
          Պահպանիր մոլորակը՝ վերամշակի՛ր պլաստիկը
        </m.h1>

        <m.p
          className="text-lg sm:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Ամեն քայլն օգնում է մեզ ապրել մաքուր ու կայուն աշխարհում
        </m.p>

        <m.button
          className="bg-[#66BB6A] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#5DAE5F] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
        >
          Իմանալ ավելին ↓
        </m.button>
      </m.div>

      <m.div
        className="absolute bottom-6 text-white text-3xl cursor-pointer select-none"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        onClick={onNext}
      >
        ↓
      </m.div>
    </section>
  );
}
