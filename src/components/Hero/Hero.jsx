import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import heroImage from "../../assets/images/hero.webp";
import heroImage2 from "../../assets/images/hero2.webp";
import heroImage3 from "../../assets/images/hero3.webp";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Hero() {
  const heroImages = [heroImage, heroImage2, heroImage3];

  const [currentImage, setCurrentImage] = useState(0);

  /* =========================================================
     PRELOAD HERO IMAGES
     Helps prevent delay when switching images
  ========================================================= */

  useEffect(() => {
    heroImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  /* =========================================================
     AUTOMATIC SLIDER
     Changes image every 5 seconds
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        w-full
        min-h-[600px]
        h-[100svh]
        overflow-hidden
        bg-black
      "
    >

      {/* =====================================================
          HERO IMAGE SLIDER
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            initial={false}
            animate={{
              opacity: currentImage === index ? 1 : 0,
              scale: currentImage === index ? 1.06 : 1,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                ease: "easeInOut",
              },
              scale: {
                duration: 5,
                ease: "linear",
              },
            }}
            className="
              absolute
              inset-0
              w-full
              h-full
              bg-no-repeat
              bg-cover

              bg-[center_50%]

              sm:bg-[center_50%]

              md:bg-[center_45%]

              lg:bg-[center_42%]

              xl:bg-[center_38%]
            "
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}

      </div>

      {/* =====================================================
          CINEMATIC OVERLAY
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/75
          via-black/40
          to-black/80
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/10
          pointer-events-none
        "
      />

      {/* =====================================================
          GOLD AMBIENT GLOW

          Smaller on mobile to reduce GPU workload
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 2 }}
        className="
          pointer-events-none
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          w-[300px]
          h-[300px]

          sm:w-[450px]
          sm:h-[450px]

          lg:w-[650px]
          lg:h-[650px]

          rounded-full
          bg-[#D4AF37]/10

          blur-[90px]
          sm:blur-[110px]
          lg:blur-[140px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-full
          h-full
          items-center
          justify-center

          px-5
          sm:px-6
          md:px-8

          py-20
          sm:py-16
        "
      >

        <div
          className="
            w-full
            max-w-4xl
            text-center
            text-white

            flex
            flex-col
            items-center
            justify-center
          "
        >

          {/* =================================================
              SMALL TOP TEXT
          ================================================= */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              uppercase
              tracking-[3px]
              sm:tracking-[5px]

              text-[#D4AF37]
              font-semibold

              text-xs
              sm:text-sm

              mb-4
              sm:mb-6
            "
          >
          </motion.p>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              font-serif
              font-bold
              leading-[1.05]

              text-[2.6rem]

              xs:text-5xl

              sm:text-6xl

              md:text-7xl

              lg:text-7xl

              max-w-[900px]
            "
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            Capture Timeless

            <span className="block text-[#D4AF37]">
              Moments
            </span>
          </motion.h1>

          {/* =================================================
              GOLD DIVIDER
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="
              w-14
              sm:w-20

              h-[2px]
              sm:h-[3px]

              bg-[#D4AF37]

              mx-auto

              mt-6
              sm:mt-8
            "
          />

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
              mt-5
              sm:mt-7
              md:mt-8

              text-sm
              sm:text-base
              md:text-xl

              leading-relaxed

              text-gray-200

              tracking-wide

              max-w-[650px]
            "
          >
            Luxury Wedding • Portrait • Fashion • Event Photography
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="
              mt-7
              sm:mt-9
              md:mt-10

              flex
              flex-col
              sm:flex-row

              items-center
              justify-center

              gap-3
              sm:gap-4
              md:gap-5

              w-full
            "
          >

            {/* BOOK BUTTON */}

            <Link
              to="/booking"
              className="
                group/hero
                relative
                overflow-hidden

                rounded-xl

                bg-[#D4AF37]

                w-full
                sm:w-auto

                min-w-[190px]

                px-7
                sm:px-8

                py-3.5
                sm:py-4

                text-center

                font-semibold
                text-black

                shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)]

                transition-all
                duration-300

                hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.8)]

                hover:-translate-y-0.5
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-black

                  scale-x-0
                  group-hover/hero:scale-x-100

                  origin-left

                  transition-transform
                  duration-500

                  ease-out

                  opacity-[0.08]
                "
              />

              <span className="relative z-10">
                Book a Session
              </span>
            </Link>

            {/* PORTFOLIO BUTTON */}

            <Link
              to="/gallery"
              className="
                relative
                overflow-hidden

                rounded-xl

                border
                border-white/60

                bg-white/5

                backdrop-blur-sm

                w-full
                sm:w-auto

                min-w-[190px]

                px-7
                sm:px-8

                py-3.5
                sm:py-4

                text-center

                font-semibold
                text-white

                transition-all
                duration-300

                hover:border-[#D4AF37]
                hover:bg-white
                hover:text-black

                hover:-translate-y-0.5
              "
            >
              Explore Portfolio
            </Link>

          </motion.div>

          {/* =================================================
              SOCIAL ICONS
          ================================================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="
              mt-6
              sm:mt-8
              md:mt-10

              flex
              items-center
              justify-center

              gap-3
              sm:gap-4
            "
          >

            {/* FACEBOOK */}

            <a
              href="https://www.facebook.com/share/1EfRzDAK5z/"
              aria-label="Facebook"
              className="
                w-10
                h-10

                sm:w-11
                sm:h-11

                rounded-full

                border
                border-white/30

                bg-white/5

                backdrop-blur-sm

                flex
                items-center
                justify-center

                text-white

                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]
                hover:text-black

                hover:-translate-y-1

                transition-all
                duration-300
              "
            >
              <FaFacebookF size={14} />
            </a>

            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/simantini_photography?igsi=M3hjcjZ4Zm9sc3l5"
              aria-label="Instagram"
              className="
                w-10
                h-10

                sm:w-11
                sm:h-11

                rounded-full

                border
                border-white/30

                bg-white/5

                backdrop-blur-sm

                flex
                items-center
                justify-center

                text-white

                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]
                hover:text-black

                hover:-translate-y-1

                transition-all
                duration-300
              "
            >
              <FaInstagram size={15} />
            </a>

            {/* YOUTUBE */}

            <a
              href="https://youtube.com/@simantiniphotography00?si=oSTKyFZF36yJRxdv"
              aria-label="YouTube"
              className="
                w-10
                h-10

                sm:w-11
                sm:h-11

                rounded-full

                border
                border-white/30

                bg-white/5

                backdrop-blur-sm

                flex
                items-center
                justify-center

                text-white

                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]
                hover:text-black

                hover:-translate-y-1

                transition-all
                duration-300
              "
            >
              <FaYoutube size={15} />
            </a>

          </motion.div>

        </div>
      </div>

      {/* =====================================================
          SLIDER INDICATORS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-5
          sm:bottom-7

          left-1/2
          -translate-x-1/2

          z-20

          flex
          items-center
          gap-2
        "
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Show hero image ${index + 1}`}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-500

              ${
                currentImage === index
                  ? "w-7 sm:w-8 bg-[#D4AF37]"
                  : "w-1.5 sm:w-2 bg-white/50"
              }
            `}
          />
        ))}
      </div>

      {/* =====================================================
          SCROLL INDICATOR

          Hidden on mobile to prevent crowding
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
        }}
        className="
          pointer-events-none

          absolute

          bottom-7
          right-7

          z-10

          hidden
          lg:flex

          flex-col
          items-center

          gap-2
        "
      >

        <span
          className="
            text-white/60
            text-[10px]
            uppercase
            tracking-[3px]
          "
        >
          Scroll
        </span>

        <motion.span
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            w-5
            h-8

            rounded-full

            border
            border-white/40

            flex
            justify-center

            pt-1.5
          "
        >
          <span
            className="
              w-1
              h-1.5

              rounded-full

              bg-[#D4AF37]
            "
          />
        </motion.span>

      </motion.div>

    </section>
  );
}

export default Hero;