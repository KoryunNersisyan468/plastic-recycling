import { m } from "framer-motion";

interface Props {
  onNext: () => void;
}

export default function Advantages({ onNext }: Props) {
  const items = [
    "Պակաս աղբ բնության մեջ 🌱",
    "Նոր օգտակար արտադրանքներ ♻️",
    "Էներգիայի խնայողություն ⚡",
    "Մաքուր միջավայր և առողջություն 🌍",
  ];

  return (
    <section
      id="advantages"
      className="min-h-screen flex flex-col justify-center items-center bg-[#E8F5E9] text-center px-4 py-20 relative"
    >
      <m.h2
        className="text-4xl font-bold text-[#2E7D32] mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Վերամշակման առավելությունները 🌿
      </m.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {items.map((item, i) => (
          <m.div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <p className="text-lg text-gray-800">{item}</p>
          </m.div>
        ))}
      </div>

      {/* Стрелка вниз */}
      <m.div
        className="absolute bottom-6 text-3xl text-[#2E7D32] cursor-pointer select-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        onClick={onNext}
      >
        ↓
      </m.div>
    </section>
  );
}
