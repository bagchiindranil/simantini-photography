import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* =========================================================
   WEDDING
========================================================= */

import wedding1 from "../../assets/images/gallery-webp/wedding/wedding1.webp";
import wedding2 from "../../assets/images/gallery-webp/wedding/wedding2.webp";
import wedding3 from "../../assets/images/gallery-webp/wedding/wedding3.webp";
import wedding4 from "../../assets/images/gallery-webp/wedding/wedding4.webp";
import wedding5 from "../../assets/images/gallery-webp/wedding/wedding5.webp";

/* =========================================================
   PRE WEDDING
========================================================= */

import preWedding1 from "../../assets/images/gallery-webp/pre-wedding/prewedding1.webp";
import preWedding2 from "../../assets/images/gallery-webp/pre-wedding/prewedding2.webp";
import preWedding3 from "../../assets/images/gallery-webp/pre-wedding/prewedding3.webp";
import preWedding4 from "../../assets/images/gallery-webp/pre-wedding/prewedding4.webp";
import preWedding5 from "../../assets/images/gallery-webp/pre-wedding/prewedding5.webp";

/* =========================================================
   BRIDAL
========================================================= */

import bridal1 from "../../assets/images/gallery-webp/bridal/bridal1.webp";
import bridal2 from "../../assets/images/gallery-webp/bridal/bridal2.webp";
import bridal3 from "../../assets/images/gallery-webp/bridal/bridal3.webp";
import bridal4 from "../../assets/images/gallery-webp/bridal/bridal4.webp";
import bridal5 from "../../assets/images/gallery-webp/bridal/bridal5.webp";

/* =========================================================
   RECEPTION
========================================================= */

import reception1 from "../../assets/images/gallery-webp/reception/reception1.webp";
import reception2 from "../../assets/images/gallery-webp/reception/reception2.webp";
import reception3 from "../../assets/images/gallery-webp/reception/reception3.webp";
import reception4 from "../../assets/images/gallery-webp/reception/reception4.webp";
import reception5 from "../../assets/images/gallery-webp/reception/reception5.webp";

/* =========================================================
   RICE CEREMONY
========================================================= */

import rice1 from "../../assets/images/gallery-webp/rice-ceremony/rice1.webp";
import rice2 from "../../assets/images/gallery-webp/rice-ceremony/rice2.webp";
import rice3 from "../../assets/images/gallery-webp/rice-ceremony/rice3.webp";
import rice4 from "../../assets/images/gallery-webp/rice-ceremony/rice4.webp";
import rice5 from "../../assets/images/gallery-webp/rice-ceremony/rice5.webp";

/* =========================================================
   COUPLE
========================================================= */

import couple1 from "../../assets/images/gallery-webp/couple/couple1.webp";
import couple2 from "../../assets/images/gallery-webp/couple/couple2.webp";
import couple3 from "../../assets/images/gallery-webp/couple/couple3.webp";
import couple4 from "../../assets/images/gallery-webp/couple/couple4.webp";
import couple5 from "../../assets/images/gallery-webp/couple/couple5.webp";


/* =========================================================
   GALLERY DATA
========================================================= */

const galleryImages = [

  // Wedding
  {
    image: wedding1,
    category: "Wedding",
  },
  {
    image: wedding2,
    category: "Wedding",
  },
  {
    image: wedding3,
    category: "Wedding",
  },
  {
    image: wedding4,
    category: "Wedding",
  },
  {
    image: wedding5,
    category: "Wedding",
  },

  // Pre Wedding
  {
    image: preWedding1,
    category: "Pre-Wedding",
  },
  {
    image: preWedding2,
    category: "Pre-Wedding",
  },
  {
    image: preWedding3,
    category: "Pre-Wedding",
  },
  {
    image: preWedding4,
    category: "Pre-Wedding",
  },
  {
    image: preWedding5,
    category: "Pre-Wedding",
  },

  // Bridal
  {
    image: bridal1,
    category: "Bridal",
  },
  {
    image: bridal2,
    category: "Bridal",
  },
  {
    image: bridal3,
    category: "Bridal",
  },
  {
    image: bridal4,
    category: "Bridal",
  },
  {
    image: bridal5,
    category: "Bridal",
  },

  // Reception
  {
    image: reception1,
    category: "Reception",
  },
  {
    image: reception2,
    category: "Reception",
  },
  {
    image: reception3,
    category: "Reception",
  },
  {
    image: reception4,
    category: "Reception",
  },
  {
    image: reception5,
    category: "Reception",
  },

  // Rice Ceremony
  {
    image: rice1,
    category: "Rice Ceremony",
  },
  {
    image: rice2,
    category: "Rice Ceremony",
  },
  {
    image: rice3,
    category: "Rice Ceremony",
  },
  {
    image: rice4,
    category: "Rice Ceremony",
  },
  {
    image: rice5,
    category: "Rice Ceremony",
  },

  // Couple
  {
    image: couple1,
    category: "Couple",
  },
  {
    image: couple2,
    category: "Couple",
  },
  {
    image: couple3,
    category: "Couple",
  },
  {
    image: couple4,
    category: "Couple",
  },
  {
    image: couple5,
    category: "Couple",
  },
];


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Bridal",
  "Reception",
  "Rice Ceremony",
  "Couple",
];


function GalleryContent() {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedIndex, setSelectedIndex] =
    useState(null);


  /* =======================================================
     FILTER IMAGES
  ======================================================= */

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) =>
            item.category === activeCategory
        );


  /* =======================================================
     OPEN IMAGE
  ======================================================= */

  const openImage = (index) => {
    setSelectedIndex(index);
  };


  /* =======================================================
     CLOSE IMAGE
  ======================================================= */

  const closeImage = () => {
    setSelectedIndex(null);
  };


  /* =======================================================
     PREVIOUS IMAGE
  ======================================================= */

  const previousImage = () => {

    setSelectedIndex((current) => {

      if (current === 0) {
        return filteredImages.length - 1;
      }

      return current - 1;

    });

  };


  /* =======================================================
     NEXT IMAGE
  ======================================================= */

  const nextImage = () => {

    setSelectedIndex((current) => {

      if (
        current ===
        filteredImages.length - 1
      ) {
        return 0;
      }

      return current + 1;

    });

  };


  return (
    <>

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative bg-[#111111] py-24 md:py-28 overflow-hidden">

        {/* Dot texture */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(#D4AF37 0.6px, transparent 0.6px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(circle at 50% 35%, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 35%, black, transparent 70%)",
          }}
        />

        {/* Ghost watermark */}

        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-4 left-1/2 -translate-x-1/2 text-[80px] md:text-[150px] font-black text-white/[0.03] leading-none tracking-tight whitespace-nowrap hidden sm:block"
          style={{
            fontFamily: "Playfair Display, serif",
          }}
        >
          GALLERY
        </span>

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm flex items-center justify-center gap-3"
          >
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />

            Our Gallery

            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          </motion.p>


          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight"
            style={{
              fontFamily:
                "Playfair Display, serif",
            }}
          >
            Stories Captured,
            <br />
            Memories Preserved
          </motion.h1>


          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="w-16 h-[3px] bg-[#D4AF37] mx-auto mt-8"
          />


          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="max-w-2xl mx-auto mt-8 text-gray-400 leading-8"
          >
            Explore our collection of
            beautiful moments captured
            through our lens.
          </motion.p>

        </div>

      </section>


      {/* ===================================================
          CATEGORY FILTER
      =================================================== */}

      <section className="bg-white py-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-3">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`relative px-5 sm:px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#111111] text-[#D4AF37] shadow-[0_10px_25px_-10px_rgba(212,175,55,0.5)]"
                    : "bg-[#F5F5F5] text-[#333333] hover:bg-[#111111] hover:text-[#D4AF37]"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

      </section>


      {/* ===================================================
    GALLERY
=================================================== */}

<section className="relative bg-white pt-16 pb-24 overflow-hidden">

  {/* Faint dot texture */}

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.25]"
    style={{
      backgroundImage:
        "radial-gradient(#D4AF37 0.6px, transparent 0.6px)",
      backgroundSize: "26px 26px",
      maskImage:
        "radial-gradient(circle at 50% 10%, black, transparent 55%)",
      WebkitMaskImage:
        "radial-gradient(circle at 50% 10%, black, transparent 55%)",
    }}
  />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

    {/* =================================================
        SMOOTH FILTER TRANSITION
    ================================================= */}

    <AnimatePresence
      mode="wait"
      initial={false}
    >

      <motion.div
        key={activeCategory}

        initial={{
          opacity: 0,
          y: 8,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        exit={{
          opacity: 0,
          y: -6,
        }}

        transition={{
          duration: 0.38,
          ease: [0.22, 1, 0.36, 1],
        }}

        className="
          columns-1
          sm:columns-2
          lg:columns-3
          gap-4
          sm:gap-5
          lg:gap-6
          will-change-[opacity,transform]
        "
      >

        {filteredImages.map(
          (item, index) => (

            <div
              key={item.image}
              className="break-inside-avoid mb-4 sm:mb-5 lg:mb-6"
            >

              <button
                type="button"
                onClick={() =>
                  openImage(index)
                }
                className="
                  group
                  relative
                  block
                  w-full
                  overflow-hidden
                  rounded-2xl
                  bg-gray-100
                  shadow-md
                  hover:shadow-2xl
                  transition-shadow
                  duration-500
                "
              >

                {/* Category stamp */}

                <span
                  className="
                    absolute
                    top-4
                    left-4
                    z-20
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-[#D4AF37]
                    bg-black/50
                    backdrop-blur-sm
                    border
                    border-[#D4AF37]/30
                    rounded-full
                    px-3
                    py-1.5
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                >
                  {item.category}
                </span>


                {/* Corner brackets */}

                {[
                  "top-4 right-4 border-t-2 border-r-2",
                  "bottom-4 left-4 border-b-2 border-l-2",
                ].map((pos, i) => (

                  <span
                    key={i}
                    className={`pointer-events-none absolute z-20 w-6 h-6 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${pos}`}
                  />

                ))}


                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={`${item.category} photography`}
                  loading="lazy"
                  decoding="async"
                  className="
                    block
                    w-full
                    h-auto
                    object-contain
                    grayscale-[20%]
                    group-hover:grayscale-0
                    transition-all
                    duration-500
                    group-hover:scale-105
                  "
                />


                {/* HOVER OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/45
                    transition-all
                    duration-300
                    flex
                    items-end
                  "
                >

                  <div
                    className="
                      p-5
                      sm:p-6
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      translate-y-2
                      group-hover:translate-y-0
                    "
                  >

                    <p className="text-[#D4AF37] text-xs sm:text-sm uppercase tracking-widest font-semibold">
                      {item.category}
                    </p>

                    <p className="text-white mt-1 font-medium flex items-center gap-2">
                      View Photo
                      <span className="w-4 h-px bg-[#D4AF37]" />
                    </p>

                  </div>

                </div>

              </button>

            </div>

          )
        )}

      </motion.div>

    </AnimatePresence>

  </div>

</section>


      {/* ===================================================
          FULLSCREEN IMAGE VIEWER
      =================================================== */}

      <AnimatePresence>

        {selectedIndex !== null && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={closeImage}
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeImage}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:scale-110 transition-all duration-300"
            >
              <X size={22} />
            </button>


            {/* PREVIOUS */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 md:left-8 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>


            {/* IMAGE */}

            <div className="relative">

              <div className="absolute -inset-2 border border-[#D4AF37]/20 rounded-2xl hidden sm:block" />

              <motion.img
                key={
                  filteredImages[
                    selectedIndex
                  ].image
                }
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                src={
                  filteredImages[
                    selectedIndex
                  ].image
                }
                alt={
                  filteredImages[
                    selectedIndex
                  ].category
                }
                className="relative max-w-[90vw] max-h-[88vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                onClick={(e) =>
                  e.stopPropagation()
                }
              />

            </div>


            {/* NEXT */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 md:right-8 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:scale-110 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>


            {/* IMAGE COUNTER */}

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-sm bg-[#111111] border border-[#D4AF37]/30 px-5 py-2.5 rounded-full flex items-center gap-2">

              <span className="text-[#D4AF37] font-semibold">
                {selectedIndex + 1}
              </span>

              <span className="text-gray-500">
                /
              </span>

              <span>
                {filteredImages.length}
              </span>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}

export default GalleryContent;