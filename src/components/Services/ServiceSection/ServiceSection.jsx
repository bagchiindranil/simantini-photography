import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

function ServiceSection({
  title,
  description,
  image,
  features,
  reverse = false,
  category,
}) {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">

      {/* Diagonal panel wash */}

      <div
        className={`pointer-events-none absolute inset-y-0 ${
          reverse ? "left-0" : "right-0"
        } w-1/2 bg-[#F5F5F5]`}
        style={{
          clipPath: reverse
            ? "polygon(0 0, 100% 0, 78% 100%, 0 100%)"
            : "polygon(22% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Fine dot texture */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(#D4AF37 0.6px, transparent 0.6px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(circle at 50% 40%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 40%, black, transparent 70%)",
        }}
      />

      <div
        className={`relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: reverse ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`relative ${reverse ? "lg:order-2" : ""}`}
        >

          <div className="relative group max-w-md mx-auto lg:max-w-none">

            {/* Category stamp */}

            <div className="absolute -top-4 -left-4 z-20 -rotate-6">
              <span className="inline-block bg-[#0F0F0F] text-[#D4AF37] text-[11px] font-semibold uppercase tracking-[3px] px-4 py-2 rounded-sm border border-[#D4AF37]/40 shadow-lg">
                {category}
              </span>
            </div>

            {/* Viewfinder frame */}

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">

              <img
                src={image}
                alt={title}
                className="w-full h-[420px] md:h-[560px] object-cover grayscale-[35%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-[900ms] ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Corner brackets */}

              {[
                "top-4 left-4 border-t-2 border-l-2",
                "top-4 right-4 border-t-2 border-r-2",
                "bottom-4 left-4 border-b-2 border-l-2",
                "bottom-4 right-4 border-b-2 border-r-2",
              ].map((pos, i) => (
                <span
                  key={i}
                  className={`absolute w-8 h-8 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 ${pos} ${
                    i === 0
                      ? "group-hover:-translate-x-0 group-hover:-translate-y-0 -translate-x-2 -translate-y-2"
                      : i === 1
                      ? "group-hover:translate-x-0 group-hover:-translate-y-0 translate-x-2 -translate-y-2"
                      : i === 2
                      ? "group-hover:-translate-x-0 group-hover:translate-y-0 -translate-x-2 translate-y-2"
                      : "group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 translate-y-2"
                  }`}
                />
              ))}

            </div>

          </div>

        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: reverse ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`relative ${reverse ? "lg:order-1" : ""}`}
        >

          {/* Ghost watermark */}

          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-10 md:-top-16 -left-1 text-[64px] md:text-[110px] font-black text-black/[0.04] leading-none tracking-tight whitespace-nowrap"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {category}
          </span>

          <p className="relative uppercase tracking-[5px] text-[#D4AF37] font-semibold mb-4 flex items-center gap-3 text-sm">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
            Our Service
          </p>

          <h2
            className="relative text-4xl md:text-5xl font-bold text-[#111111] leading-[1.1]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {title}
          </h2>

          <p className="relative mt-6 text-gray-600 leading-8 max-w-xl">
            {description}
          </p>

          {/* What's Included */}

          <div className="relative mt-10">

            <h3 className="text-xl md:text-2xl font-semibold text-[#111111] mb-6 relative w-fit">
              What's Included
              <span className="absolute -bottom-2 left-0 h-[3px] w-10 bg-[#D4AF37]" />
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="group/item relative flex items-center gap-3 py-2.5 pl-1 border-b border-gray-100 last:border-b-0 sm:last:border-b-0 overflow-hidden"
                >
                  <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#D4AF37] scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-top" />

                  <span className="shrink-0 text-[10px] font-bold text-[#D4AF37]/70 tabular-nums tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <CheckCircle
                    size={16}
                    className="shrink-0 text-[#D4AF37] transition-transform duration-300 group-hover/item:scale-110"
                  />

                  <span className="text-gray-700 group-hover/item:text-[#111111] transition-colors duration-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Buttons */}

          <div className="relative mt-10 flex flex-wrap gap-4">

            <Link
              to={`/gallery?category=${category}`}
              className="group/btn relative overflow-hidden bg-[#111111] text-white px-7 py-4 rounded-xl inline-flex items-center gap-2 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <span className="absolute inset-0 bg-[#D4AF37] scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">
                View Work
              </span>
              <ArrowRight
                size={18}
                className="relative z-10 group-hover/btn:text-black transition-all duration-300 group-hover/btn:translate-x-1"
              />
            </Link>

            <Link
              to={`/booking?service=${category}`}
              className="group/outline relative overflow-hidden border-2 border-[#111111] px-7 py-4 rounded-xl inline-flex items-center"
            >
              <span className="absolute inset-0 bg-[#111111] scale-x-0 group-hover/outline:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover/outline:text-white transition-colors duration-300">
                Book Now
              </span>
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default ServiceSection;