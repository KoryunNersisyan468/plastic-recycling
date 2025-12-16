import React, { Suspense } from "react";
import { useRef } from "react";
import Problem from "./Problem";
import HomeSection from "./HomeSection";

const Contact = React.lazy(() => import("./Contact"));
const Advantages = React.lazy(() => import("./Advantages"));
const Process = React.lazy(() => import("./Process"));
const Statistics = React.lazy(() => import("./Statistics"));
const Gallery = React.lazy(() => import("./Gallery"));


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
      <Suspense fallback={<div>Loading...</div>}>
        <Process onNext={() => scrollTo("advantages")} />
        <Advantages onNext={() => scrollTo("gallery")} />
        <Gallery onNext={() => scrollTo("statistics")} />
        <Statistics onNext={() => scrollTo("contact")} />
        <Contact />
      </Suspense>
    </main>
  );
}
