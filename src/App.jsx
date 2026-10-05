import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

/* =========================================================
   GLOBAL SCROLL TO TOP

   Whenever the URL/path changes, the page automatically
   scrolls back to the top.
========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <>
      {/* Global scroll-to-top handler */}
      <ScrollToTop />

      <Routes>
        {/* Main Website */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </>
  );
}

export default App;