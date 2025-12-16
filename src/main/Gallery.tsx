import { m } from "framer-motion";
import video from "/video1.mp4";
import type { ISectionProps } from "../types/type";

export default function Gallery({ onNext }: ISectionProps) {
  return (
    <section
      id="gallery"
      className="relative min-h-screen bg-[#E8F5E9] flex flex-col justify-center items-center text-center px-6 py-20"
    >
      <m.h2
        className="text-lg w-full sm:w-6/7 sm:text-xl md:w-4/5 md:text-2xl lg:w-3/4 lg:text-4xl text-wrap font-bold text-[#2E7D32] mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >Նախագծային աշխատանքի ընթացքում անցկացրել ենք հարցում պլաստիկ թափոնների վերամշակման և օգտագործման խնդիրների վերաբերյալ
      </m.h2>

      <m.div
          className="w-full h-[500px] md:h-[550px] xl:h-[600px] max-w-xl md:mt-8 sm:mt-2 mt-0 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <video
            controls
            src={video}
            className="w-full h-full object-contain"
          />
        </m.div>

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
