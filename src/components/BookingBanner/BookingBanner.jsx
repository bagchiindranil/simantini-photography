import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, Phone } from "lucide-react";

import banner from "../../assets/images/booking/booking-banner.webp";

function BookingBanner() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background Image */}

      <img
  src={banner}
  alt="Book Photography Session"
  loading="lazy"
  decoding="async"
  className="absolute inset-0 w-full h-full object-cover"
/>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gold Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-[#D4AF37]/20"></div>

      {/* Content */}

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="uppercase tracking-[5px] text-[#D4AF37] font-semibold"
        >
          Book Your Session
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mt-5 leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Let's Capture Your
          <br />
          Beautiful Story Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-8 text-gray-200 text-lg leading-8"
        >
          Whether it's your wedding, pre-wedding, reception, couple shoot or
          any special celebration, we're here to preserve every emotion with
          timeless photography.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-5 mt-12"
        >

          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-semibold hover:bg-white transition"
          >
            <CalendarDays size={20} />
            Book Now
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            <Phone size={20} />
            Contact Us
          </Link>

        </motion.div>

      </div>

    </section>
  );
}

export default BookingBanner;