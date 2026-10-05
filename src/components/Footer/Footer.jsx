import { Link } from "react-router-dom";
import {
  Camera,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#0F0F0F] text-gray-300 overflow-hidden">

      {/* Ambient gold glow */}

      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      {/* Hairline top divider with gold center */}

      <div className="relative h-px w-full bg-gray-800">
        <div className="absolute left-1/2 -translate-x-1/2 -top-px h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>

      {/* Main Footer */}

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Brand */}

          <div className="lg:pr-8">

            <div className="flex items-center gap-3 mb-6 group w-fit">

              <Camera
                className="text-[#D4AF37] transition-transform duration-500 group-hover:rotate-[-8deg]"
                size={36}
              />

              <h2
                className="text-2xl md:text-3xl font-bold text-white tracking-wide"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                SIMANTINI PHOTOGRAPHY
              </h2>

            </div>

            <p className="leading-8 text-gray-400 text-[15px]">
              We capture emotions, celebrations and unforgettable moments with
              timeless photography. Every photograph tells a story that lasts
              forever.
            </p>

            <div className="mt-8 h-px w-16 bg-[#D4AF37]/40" />

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-sm font-semibold mb-7 tracking-[0.2em] uppercase relative w-fit">
              Quick Links
              <span className="absolute -bottom-2 left-0 h-px w-8 bg-[#D4AF37]" />
            </h3>

            <ul className="space-y-4">

              {[
                { to: "/", label: "Home" },
                { to: "/gallery", label: "Gallery" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/booking", label: "Book Now" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-0 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    <span className="h-px w-0 bg-[#D4AF37] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-sm font-semibold mb-7 tracking-[0.2em] uppercase relative w-fit">
              Contact Info
              <span className="absolute -bottom-2 left-0 h-px w-8 bg-[#D4AF37]" />
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3 items-start group">
                <MapPin className="text-[#D4AF37] mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110" size={18} />
                <span className="text-[15px] text-gray-400">Matgoda, Bankura , West Bengal, India</span>
              </div>

              <div className="flex gap-3 items-start group">
                <Phone className="text-[#D4AF37] mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110" size={18} />
                <span className="text-[15px] text-gray-400">+91 89725 67764</span>
              </div>

              <div className="flex gap-3 items-start group">
                <Mail className="text-[#D4AF37] mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110" size={18} />
                <span className="text-[15px] text-gray-400">simantiniphotography@gmail.com</span>
              </div>

              <div className="flex gap-3 items-start group">
                <Clock className="text-[#D4AF37] mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110" size={18} />
                <span className="text-[15px] text-gray-400">Mon - Sun : 8 AM - 10 PM</span>
              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-white text-sm font-semibold mb-7 tracking-[0.2em] uppercase relative w-fit">
              Follow Us
              <span className="absolute -bottom-2 left-0 h-px w-8 bg-[#D4AF37]" />
            </h3>

            <p className="text-gray-400 leading-8 mb-7 text-[15px]">
              Follow our latest weddings, pre-wedding shoots and photography
              stories on social media.
            </p>

            <div className="flex gap-4">

              <a
                href="https://www.facebook.com/share/1EfRzDAK5z/"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(212,175,55,0.5)] transition-all duration-300"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="https://www.instagram.com/simantini_photography?igsi=M3hjcjZ4Zm9sc3l5"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(212,175,55,0.5)] transition-all duration-300"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="https://youtube.com/@simantiniphotography00?si=oSTKyFZF36yJRxdv"
                aria-label="YouTube"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(212,175,55,0.5)] transition-all duration-300"
              >
                <FaYoutube size={15} />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="relative border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-center md:text-left text-sm tracking-wide">
            © {new Date().getFullYear()} <span className="text-gray-400">SIMANTINI PHOTOGRAPHY</span>. All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            aria-label="Scroll to top"
            className="bg-[#D4AF37] text-black p-3 rounded-full hover:scale-110 hover:shadow-[0_0_24px_rgba(212,175,55,0.6)] active:scale-95 transition-all duration-300"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;