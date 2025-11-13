import { m } from "framer-motion";
import { useState } from "react";
import contact from "/contact.jpg";
import { Mail, Copy } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "hovsepyan-93@mail.ru";

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
        className="text-3xl sm:text-5xl font-bold text-[#2E7D32] mb-6 flex items-center gap-2 justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Mail size={32} /> Կապ մեզ հետ
      </m.h2>

      <m.p
        className="text-gray-700 max-w-3xl mb-8 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Եթե ցանկանում եք միանալ մեր նախաձեռնությանը կամ հարց ունեք՝ գրել մեզ․
      </m.p>

      <div className="flex flex-col sm:flex-row gap-3">
        <m.button
          onClick={copyEmail}
          className="bg-white text-[#2E7D32] border border-[#2E7D32] px-5 py-2 rounded-lg hover:bg-[#C8E6C9] flex items-center gap-2 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? (
            <>
              ✅ Պատճենված է
            </>
          ) : (
            <>
              <Copy size={20} /> Պատճենել հասցեն
            </>
          )}
        </m.button>
      </div>

      <m.img
        src={contact}
        alt="Contact"
        className="mt-9 rounded-2xl shadow-lg h-80 max-w-md object-cover"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <m.div
        className="absolute bottom-8 text-[#2E7D32] text-3xl cursor-pointer select-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </m.div>
    </section>
  );
}
