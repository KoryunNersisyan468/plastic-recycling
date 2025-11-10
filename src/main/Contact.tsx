import { m } from "framer-motion";
import { useState } from "react";
import contact from "/contact.jpg";


export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ecocycle@info.am";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Չստացվեց պատճենել էլ. հասցեն");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#E8F5E9] flex flex-col justify-center items-center text-center px-6 py-20"
    >
      <m.h2
        className="text-3xl sm:text-5xl font-bold text-[#2E7D32] mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Կապ մեզ հետ 📬
      </m.h2>

      <m.p
        className="text-gray-700 max-w-2xl mb-10 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Եթե ցանկանում եք միանալ մեր նախաձեռնությանը կամ հարց ունեք՝ գրել մեզ․
      </m.p>

      {/* Кнопки действий */}
      <div className="flex flex-col sm:flex-row gap-4">
     
       

        {/* Copy email */}
        <m.button
          onClick={copyEmail}
          className="bg-white text-[#2E7D32] border border-[#2E7D32] px-6 py-3 rounded-lg hover:bg-[#C8E6C9] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? "✅ Պատճենված է" : "📋 Պատճենել հասցեն"}
        </m.button>
      </div>

      {/* Изображение */}
      <m.img
        src={contact}
        alt="Contact"
        className="mt-10 rounded-2xl shadow-lg w-full max-w-md object-cover"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Нижняя стрелка — назад к началу */}
      <m.div
        className="absolute bottom-8 text-[#2E7D32] text-3xl cursor-pointer select-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      >
        ↑
      </m.div>
    </section>
  );
}
