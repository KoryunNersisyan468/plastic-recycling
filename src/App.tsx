import React from "react";
import { useEffect, useRef, Suspense } from "react";
import { useLocation } from "react-router";
import Header from "./header/Header";
import Main from "./main/Main";
const Footer = React.lazy(() => import("./footer/Footer"));

function App() {
  const { pathname } = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Header />
      <Main />
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
