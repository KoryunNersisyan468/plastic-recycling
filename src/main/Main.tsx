import { useRef } from "react";
import Problem from "./Problem";
import Process from "./Process";
import Advantages from "./Advantages";
import Contact from "./Contact";
import Statistics from "./Statistics";
import HomeSection from "./HomeSection";

export default function Main() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main ref={containerRef} className="w-full overflow-x-hidden">
      <HomeSection onNext={() => scrollTo("problem")} />
      <Problem onNext={() => scrollTo("process")} />
      <Process onNext={() => scrollTo("advantages")} />
      <Advantages onNext={() => scrollTo("statistics")} />
      <Statistics onNext={() => scrollTo("contact")} />
      <Contact />
    </main>
  );
}
