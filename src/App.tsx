import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

function App() {
  const { pathname } = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return; // не скроллим при первой загрузке
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
