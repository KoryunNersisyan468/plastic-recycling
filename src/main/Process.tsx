import { m } from "framer-motion";
import type { ISectionProps } from "../types/type";
import { processItems } from "../data/processItems";

export default function Process({ onNext }: ISectionProps) {
  return (
    <section
      id="process"
      className="relative min-h-screen bg-[#E8F5E9] flex flex-col justify-center items-center text-center px-6 py-20"
    >
      <m.h2
        className="text-3xl sm:text-5xl font-bold text-[#2E7D32] mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Վերամշակման գործընթացը
      </m.h2>

      <m.div
        className="grid sm:grid-cols-3 gap-8 max-w-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {processItems.map((step, i) => (
          <m.div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#2E7D32]">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.text}</p>
            </div>
          </m.div>
        ))}
      </m.div>

      <m.button
        onClick={onNext}
        className="mt-10 bg-[#388E3C] text-white px-6 py-3 rounded-lg hover:bg-[#2E7D32]"
      >
        Դիտել առավելությունները
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
