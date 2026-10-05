import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

import client1 from "../../assets/images/testimonials/client1.webp";
import client2 from "../../assets/images/testimonials/client2.webp";
import client3 from "../../assets/images/testimonials/client3.webp";
import client4 from "../../assets/images/testimonials/client4.webp";

const testimonials = [
  {
    image: client1,
    name: "Priya",
    event: "Bridal",
    review:
      "এর চেয়ে ভালো কোনো ফটোগ্রাফার আমরা পেতাম না। প্রতিটি মুহূর্ত চমৎকার ও স্বাভাবিকভাবে ক্যামেরাবন্দী করা হয়েছে। ছবিগুলোর দিকে তাকালেই আমাদের বিয়ের দিনের সেই সব অনুভূতি আবার ফিরে আসে।",
  },
  {
    image: client2,
    name: "Ankit & Sneha",
    event: "Reception",
    review:
      "তাদের সৃজনশীলতা, ধৈর্য এবং পেশাদারিত্ব ছিল অসাধারণ। পুরো অভিজ্ঞতাটি ছিল আনন্দদায়ক এবং ছবিগুলো আমাদের সব প্রত্যাশাকেও ছাড়িয়ে গেছে।",
  },
  {
    image: client3,
    name: "Sourav Family",
    event: "Wedding",
    review:
      "চমৎকার ফটোগ্রাফি এবং অসাধারণ এডিটিং। পরিবারের সবারই ছবিগুলো খুব ভালো লেগেছে। আমাদের জন্য এমন সুন্দর স্মৃতি ধরে রাখার জন্য আপনাকে ধন্যবাদ।",
  },
  {
    image: client4,
    name: "Riya & Arjun",
    event: "Reception",
    review:
      "পেশাদার, সময়ানুবর্তী এবং অত্যন্ত প্রতিভাবান। অকপট মুহূর্তের ছবিগুলো আমাদের সবচেয়ে বেশি ভালো লেগেছে। যেকোনো বিশেষ অনুষ্ঠানের জন্য এদের কথা জোরালোভাবে সুপারিশ করছি।",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

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
            "radial-gradient(circle at 50% 25%, black, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 25%, black, transparent 65%)",
        }}
      />

      {/* Ghost watermark */}

      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-2 left-1/2 -translate-x-1/2 text-[80px] md:text-[140px] font-black text-white/[0.03] leading-none tracking-tight whitespace-nowrap hidden sm:block"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        REVIEWS
      </span>

      <div className="relative max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
            Testimonials
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            What Our Clients Say
          </h2>

          <div className="w-16 h-[3px] bg-[#D4AF37] mx-auto mt-6" />

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Every smile, every emotion and every review motivates us to
            continue creating unforgettable memories.
          </p>

        </motion.div>

        <div className="relative">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="relative bg-[#1A1A1A] border border-gray-800 rounded-3xl p-10 md:p-14 text-center overflow-hidden"
            >

              <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

              <FaQuoteLeft
                className="mx-auto text-[#D4AF37]/70 text-4xl md:text-5xl mb-8"
              />

              <div className="relative w-28 h-28 mx-auto">
                <div className="absolute -inset-1.5 rounded-full border border-[#D4AF37]/30" />
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#D4AF37] shadow-[0_10px_30px_-10px_rgba(212,175,55,0.5)]"
                />
              </div>

              <div className="flex justify-center gap-1 mt-6">

                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-[#D4AF37]"
                  />
                ))}

              </div>

              <p className="text-gray-300 text-base md:text-lg leading-9 mt-8 italic max-w-2xl mx-auto">
                "{testimonials[current].review}"
              </p>

              <h3 className="text-white text-xl md:text-2xl font-semibold mt-10">
                {testimonials[current].name}
              </h3>

              <p className="text-[#D4AF37] mt-2 uppercase tracking-[2px] text-sm">
                {testimonials[current].event}
              </p>

            </motion.div>

          </AnimatePresence>

          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#111111] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:scale-110 hover:border-[#D4AF37] transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#111111] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:scale-110 hover:border-[#D4AF37] transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        <div className="flex justify-center gap-3 mt-10">

          {testimonials.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-[#D4AF37] w-8"
                  : "bg-gray-600 w-2 hover:bg-gray-500"
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;