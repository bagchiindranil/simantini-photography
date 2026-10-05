import { motion } from "framer-motion";
import {
  Camera,
  Sparkles,
  Award,
  Clock3,
  HeartHandshake,
  Gem,
} from "lucide-react";

import photographer from "../../assets/images/whychooseus/photographer.webp";

const features = [
  {
    icon: Camera,
    title: "Creative Photography",
    description:
      "Every moment is captured with creativity, emotion, and attention to detail.",
  },
  {
    icon: Sparkles,
    title: "Premium Editing",
    description:
      "Professionally edited photographs with natural colors and cinematic finishing.",
  },
  {
    icon: Award,
    title: "Trusted Quality",
    description:
      "Committed to delivering exceptional photography and unforgettable memories.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Receive your beautifully edited photographs and albums on schedule.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Experience",
    description:
      "Every session is customized to match your style and vision perfectly.",
  },
  {
    icon: Gem,
    title: "Luxury Service",
    description:
      "A premium photography experience from consultation to final delivery.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative bg-[#111111] py-24 md:py-28 overflow-hidden">

      {/* Dot texture */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(#D4AF37 0.6px, transparent 0.6px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(circle at 30% 30%, black, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(circle at 30% 30%, black, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group max-w-md mx-auto lg:max-w-none"
          >

            <div className="absolute -inset-3 border border-[#D4AF37]/25 rounded-3xl -z-10 hidden lg:block" />

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

              <img
                src={photographer}
                alt="Photographer"
                className="w-full h-[420px] md:h-[700px] object-cover grayscale-[30%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-[900ms] ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {[
                "top-4 left-4 border-t-2 border-l-2",
                "top-4 right-4 border-t-2 border-r-2",
                "bottom-4 left-4 border-b-2 border-l-2",
                "bottom-4 right-4 border-b-2 border-r-2",
              ].map((pos, i) => (
                <span
                  key={i}
                  className={`absolute w-8 h-8 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 ${pos}`}
                />
              ))}

            </div>

          </motion.div>

          {/* Right Content */}

          <div className="relative">

            <span
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-10 md:-top-16 -left-1 text-[64px] md:text-[100px] font-black text-white/[0.04] leading-none tracking-tight whitespace-nowrap"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              WHY US
            </span>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
              Why Choose Us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative text-4xl md:text-5xl text-white font-bold mt-4 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Capturing Memories That Last Forever
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative text-gray-400 leading-8 mt-6 mb-10 max-w-lg"
            >
              We believe every photograph should tell a story. From planning
              your special day to delivering beautifully edited images, we
              ensure every detail is handled with creativity, passion, and
              professionalism.
            </motion.p>

            {/* Feature Cards */}

            <div className="relative grid sm:grid-cols-2 gap-6">

              {features.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6 hover:border-[#D4AF37] hover:shadow-[0_20px_40px_-18px_rgba(212,175,55,0.3)] transition-all duration-300 overflow-hidden"
                  >

                    <span className="absolute top-4 right-5 text-[10px] font-bold text-[#D4AF37]/50 tracking-wider tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:scale-105">

                      <Icon
                        className="text-[#D4AF37] transition-colors duration-300 group-hover:text-black"
                        size={26}
                      />

                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-7 text-sm">
                      {item.description}
                    </p>

                  </motion.div>

                );

              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;