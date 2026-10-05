import { Link, NavLink } from "react-router-dom";
import { Menu, X, Camera } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Solid state (scrolled, or mobile menu open) vs. transparent-over-hero state
  const solid = scrolled || isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        solid
          ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_-15px_rgba(0,0,0,0.25)] border-b border-black/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >

      {/* Readability gradient — only visible when the bar is transparent over a hero image */}

      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-black/50 via-black/10 to-transparent transition-opacity duration-500 ${
          solid ? "opacity-0" : "opacity-100"
        }`}
      />

      <div
        className={`relative max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between transition-all duration-500 ${
          solid ? "h-[68px]" : "h-20 md:h-24"
        }`}
      >

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3 shrink-0">

          <span
            className={`relative flex items-center justify-center w-10 h-10 rounded-full border transition-colors duration-300 ${
              solid
                ? "border-[#D4AF37]/40 group-hover:border-[#D4AF37]"
                : "border-white/40 group-hover:border-[#D4AF37]"
            }`}
          >
            <Camera
              size={18}
              className="text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[-10deg]"
              strokeWidth={2}
            />
          </span>

          <h1
            className={`text-xl md:text-[26px] font-bold tracking-[1px] leading-none transition-colors duration-500 ${
              solid ? "text-[#111111]" : "text-white"
            }`}
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            SIMANTINI
            <span
              className={`block text-[10px] md:text-[11px] font-medium tracking-[4px] mt-1 transition-colors duration-500 ${
                solid ? "text-gray-500" : "text-white/70"
              }`}
            >
              PHOTOGRAPHY
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-[13px] font-semibold uppercase tracking-[1.5px]">
          {navLinks.map((item) => (
            <li key={item.name} className="group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 transition-colors duration-300 ${
                    isActive
                      ? solid
                        ? "text-[#111111]"
                        : "text-white"
                      : solid
                      ? "text-[#666666] hover:text-[#111111]"
                      : "text-white/75 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute left-1/2 -bottom-0.5 h-[2px] bg-[#D4AF37] -translate-x-1/2 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <Link
          to="/booking"
          className={`group/cta hidden md:inline-flex relative overflow-hidden items-center justify-center px-7 py-3 rounded-full text-[13px] font-semibold uppercase tracking-[1.5px] transition-all duration-500 ${
            solid
              ? "bg-[#111111] text-white shadow-md hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)]"
              : "bg-white/10 text-white border border-white/50 backdrop-blur-sm hover:border-[#D4AF37] hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.5)]"
          }`}
        >
          <span className="absolute inset-0 bg-[#D4AF37] scale-x-0 group-hover/cta:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          <span className="relative z-10 group-hover/cta:text-[#111111] transition-colors duration-300">
            Book Now
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className={`md:hidden relative w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
            solid ? "text-[#111111]" : "text-white"
          }`}
        >
          <Menu
            size={26}
            className={`absolute transition-all duration-300 ${
              isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            size={26}
            className={`absolute transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="relative bg-white/95 backdrop-blur-xl border-t border-black/5 shadow-xl">

          <div className="flex flex-col px-2 py-2">

            {navLinks.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{
                  transitionDelay: isOpen ? `${index * 60}ms` : "0ms",
                }}
                className={({ isActive }) =>
                  `px-4 py-4 mx-2 my-0.5 rounded-xl text-[15px] font-medium tracking-wide border-b border-gray-100 last:border-b-0 transition-all duration-300 ${
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  } ${
                    isActive
                      ? "text-[#D4AF37] font-semibold bg-[#F5F5F5]"
                      : "text-[#333333] hover:bg-[#F5F5F5] hover:text-[#D4AF37]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="relative overflow-hidden m-4 mt-5 bg-[#111111] text-white text-center py-4 rounded-xl font-semibold uppercase tracking-[1.5px] text-[13px] shadow-lg active:scale-95 transition-transform duration-200"
            >
              Book Now
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;