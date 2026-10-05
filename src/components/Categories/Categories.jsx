import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import wedding from "../../assets/images/categories/wedding.webp";
import preWedding from "../../assets/images/categories/pre-wedding.webp";
import bridal from "../../assets/images/categories/bridal.webp";
import reception from "../../assets/images/categories/reception.webp";
import riceCeremony from "../../assets/images/categories/rice-ceremony.webp";
import couple from "../../assets/images/categories/couple.webp";

const categories = [
  {
    title: "Wedding",
    image: wedding,
  },
  {
    title: "Pre Wedding",
    image: preWedding,
  },
  {
    title: "Bridal",
    image: bridal,
  },
  {
    title: "Reception",
    image: reception,
  },
  {
    title: "Rice Ceremony",
    image: riceCeremony,
  },
  {
    title: "Couple",
    image: couple,
  },
];

function Categories() {
  return (
    <section className="relative bg-white py-24 md:py-28 overflow-hidden">

      {/* Faint dot texture */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(#D4AF37 0.6px, transparent 0.6px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(circle at 50% 20%, black, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 20%, black, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
            Our Photography
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold mt-5 text-[#111111]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Photography Categories
          </h2>

          <div className="w-16 h-[3px] bg-[#D4AF37] mx-auto mt-6" />

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
            We capture every celebration with creativity, elegance and timeless
            storytelling.
          </p>
        </motion.div>

        {/* Categories Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
            >

              {/* Index stamp */}

              <span className="absolute top-5 left-5 z-20 text-[11px] font-bold uppercase tracking-[3px] text-[#D4AF37] bg-black/50 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-3 py-1.5">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Corner brackets, revealed on hover */}

              {[
                "top-5 right-5 border-t-2 border-r-2",
                "bottom-24 right-5 border-b-2 border-r-2",
              ].map((pos, i) => (
                <span
                  key={i}
                  className={`pointer-events-none absolute z-20 w-6 h-6 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${pos}`}
                />
              ))}

              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[420px] md:h-[450px] object-cover grayscale-[25%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent group-hover:from-black/90 transition-all duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-8">

                <h3
                  className="text-2xl md:text-3xl text-white font-bold"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {category.title}
                </h3>

                <div className="w-8 h-px bg-[#D4AF37] mt-3 group-hover:w-14 transition-all duration-300" />

                {/* Explore → Gallery */}

                <Link
                  to="/gallery"
                  className="mt-4 flex items-center gap-2 text-[#D4AF37] font-medium transition-all group-hover:gap-4"
                >
                  Explore
                  <ArrowRight size={18} />
                </Link>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Categories;