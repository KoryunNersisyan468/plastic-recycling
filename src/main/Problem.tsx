import { m } from "framer-motion";
import img from "/recycle1.png";
import type { ISectionProps } from "../types/type";

export default function Problem({ onNext }: ISectionProps) {
  return (
    <section
      id="problem"
      className="relative min-h-screen bg-[#E8F5E9] flex flex-col justify-center items-center text-center px-6 py-20"
    >
      <m.h2
        className="text-3xl sm:text-5xl font-bold text-[#2E7D32] mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Պլաստիկի խնդիրները 🌊
      </m.h2>

      <m.p
        className="text-gray-700 max-w-2xl text-lg mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Ամեն տարի միլիոնավոր տոննա պլաստիկ ընկնում է օվկիանոսներ և վնասում է կենդանիներին։
        Ժամանակն է փոխել իրավիճակը՝ սկսելով փոքր քայլերից։
      </m.p>

      <m.img
        src={img}
        alt="Plastic Pollution"
        className="rounded-2xl h-80 object-cover shadow-lg w-full max-w-xl mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <m.button
        onClick={onNext}
        className="bg-[#66BB6A] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#5DAE5F] transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ինչպես է աշխատում ♻️
      </m.button>

     <m.div
        className="absolute bottom-8 text-[#2E7D32] text-3xl cursor-pointer select-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        onClick={onNext}
      >
        ↓
      </m.div>
    </section>
  );
}
