import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import portfolio1 from "../../assets/images/portfolio/portfolio1.webp";
import portfolio2 from "../../assets/images/portfolio/portfolio2.webp";
import portfolio3 from "../../assets/images/portfolio/portfolio3.webp";
import portfolio4 from "../../assets/images/portfolio/portfolio4.webp";
import portfolio5 from "../../assets/images/portfolio/portfolio5.webp";
import portfolio6 from "../../assets/images/portfolio/portfolio6.webp";

const portfolioImages = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
];

function Portfolio() {
  return (
    <section className="relative bg-[#F8F8F8] py-24 md:py-28 overflow-hidden">

      {/* Faint dot texture */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
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

      {/* Ghost watermark */}

      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-4 left-1/2 -translate-x-1/2 text-[90px] md:text-[150px] font-black text-black/[0.03] leading-none tracking-tight whitespace-nowrap hidden sm:block"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        PORTFOLIO
      </span>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
            Featured Portfolio
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold text-[#111111] mt-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Moments We Captured
          </h2>

          <div className="w-16 h-[3px] bg-[#D4AF37] mx-auto mt-6" />

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
            Every photograph tells a story. Explore some of our favorite
            moments captured with creativity and passion.
          </p>

        </div>

        {/* Slider */}

        <div className="premium-swiper relative">

          <style>{`
            .premium-swiper .swiper-button-next,
            .premium-swiper .swiper-button-prev {
              width: 52px;
              height: 52px;
              background: rgba(15, 15, 15, 0.55);
              backdrop-filter: blur(6px);
              border: 1px solid rgba(212, 175, 55, 0.4);
              border-radius: 9999px;
              color: #D4AF37;
              transition: all 0.3s ease;
            }
            .premium-swiper .swiper-button-next:hover,
            .premium-swiper .swiper-button-prev:hover {
              background: #D4AF37;
              color: #111111;
              border-color: #D4AF37;
              transform: scale(1.06);
            }
            .premium-swiper .swiper-button-next::after,
            .premium-swiper .swiper-button-prev::after {
              font-size: 18px;
              font-weight: 700;
            }
            .premium-swiper .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background: #ffffff;
              opacity: 0.6;
              transition: all 0.3s ease;
            }
            .premium-swiper .swiper-pagination-bullet-active {
              background: #D4AF37;
              opacity: 1;
              width: 26px;
              border-radius: 9999px;
            }
          `}</style>

          <div className="absolute -inset-3 border border-[#D4AF37]/20 rounded-[2rem] -z-10 hidden lg:block" />

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >

            {portfolioImages.map((image, index) => (

              <SwiperSlide key={index}>

                <div className="group relative overflow-hidden rounded-3xl shadow-2xl">

                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-[480px] md:h-[650px] object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Corner brackets */}

                  {[
                    "top-6 left-6 border-t-2 border-l-2",
                    "top-6 right-6 border-t-2 border-r-2",
                  ].map((pos, i) => (
                    <span
                      key={i}
                      className={`pointer-events-none absolute w-8 h-8 border-[#D4AF37]/70 ${pos}`}
                    />
                  ))}

                  {/* Slide index */}

                  <div className="absolute bottom-6 left-6 text-white">
                    <span
                      className="text-2xl font-bold text-[#D4AF37]"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/60">
                      {" "}/ {String(portfolioImages.length).padStart(2, "0")}
                    </span>
                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

        {/* Button */}

        <div className="flex justify-center mt-14">

          <Link
            to="/gallery"
            className="group/btn relative overflow-hidden inline-flex items-center gap-2 bg-[#111111] text-white px-8 py-4 rounded-xl shadow-sm hover:shadow-[0_15px_35px_-12px_rgba(212,175,55,0.5)] transition-shadow duration-300"
          >
            <span className="absolute inset-0 bg-[#D4AF37] scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">
              View Full Gallery
            </span>
            <ArrowRight
              size={20}
              className="relative z-10 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Portfolio;