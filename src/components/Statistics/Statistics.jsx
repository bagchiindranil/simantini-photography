import { Camera, Users, Award, Image } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: <Users size={32} />,
    value: 500,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    icon: <Camera size={32} />,
    value: 1500,
    suffix: "+",
    title: "Photoshoots",
  },
  {
    icon: <Award size={32} />,
    value: 6,
    suffix: "+",
    title: "Years Experience",
  },
  {
    icon: <Image size={32} />,
    value: 10,
    suffix: "k+",
    title: "Photos Delivered",
  },
];

/* Animated count-up number, starts once it scrolls into view */

function CountUp({ value, suffix, duration = 1.8 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = null;
    let frame;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

function Statistics() {
  return (
    <section className="relative bg-white py-24 md:py-28 overflow-hidden">

      {/* Faint dot texture */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
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

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
            By The Numbers
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_45px_-18px_rgba(212,175,55,0.35)] transition-all duration-300 overflow-hidden"
            >

              {/* Ghost number watermark */}

              <span
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-3 right-1 text-6xl font-black text-[#D4AF37]/[0.06]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {item.value}
              </span>

              <div className="relative flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#D4AF37] transition-all duration-300 group-hover:bg-[#111111] group-hover:scale-105">
                  {item.icon}
                </div>
              </div>

              <h2
                className="relative text-4xl font-bold text-[#111111]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                <CountUp value={item.value} suffix={item.suffix} />
              </h2>

              <div className="w-8 h-px bg-[#D4AF37]/40 mx-auto mt-4" />

              <p className="mt-4 text-gray-600 tracking-wide">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;