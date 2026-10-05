import { motion } from "framer-motion";
import photographer from "../../assets/images/about/photographer.webp";

/* ------------------------------------------------------------------ */
/* Shared decorative primitives (visual only — no logic, no new deps) */
/* ------------------------------------------------------------------ */

function Eyebrow({ label, dark = false, align = "left" }) {
  return (
    <p
      className={`uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm flex items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] shrink-0" />
      {label}
      {align === "center" && (
        <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] shrink-0" />
      )}
    </p>
  );
}

function DotTexture({ tone = "gold" }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage: `radial-gradient(${
          tone === "gold" ? "#D4AF37" : "#000000"
        } 0.6px, transparent 0.6px)`,
        backgroundSize: "26px 26px",
        maskImage:
          "radial-gradient(circle at 50% 30%, black, transparent 70%)",
        WebkitMaskImage:
          "radial-gradient(circle at 50% 30%, black, transparent 70%)",
      }}
    />
  );
}

function GhostWord({ text, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none absolute font-black leading-none tracking-tight whitespace-nowrap ${className}`}
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      {text}
    </span>
  );
}

function ViewfinderImage({ src, alt, heightClass }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-3 border border-[#D4AF37]/25 rounded-3xl -z-10 hidden lg:block" />
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={src}
          alt={alt}
          className={`w-full ${heightClass} object-cover grayscale-[30%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-[900ms] ease-out`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
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
    </div>
  );
}

/* ------------------------------------------------------------------ */

function AboutContent() {
  return (
    <>

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative bg-[#111111] py-24 md:py-32 overflow-hidden">

        <DotTexture tone="gold" />

        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >

              <GhostWord
                text="ABOUT"
                className="-top-10 md:-top-16 -left-1 text-[64px] md:text-[110px] text-white/[0.04]"
              />

              <Eyebrow label="About Bagchi Studio" />

              <h1
                className="relative text-4xl md:text-6xl font-bold text-white mt-6 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Capturing Moments,
                <br />
                Creating Memories
              </h1>

              <div className="w-16 h-[3px] bg-[#D4AF37] mt-8" />

              <p className="text-gray-300 mt-8 leading-8 text-lg max-w-xl">
                At Bagchi Studio, photography is more than just taking pictures.
                It is about preserving emotions, relationships, traditions,
                and stories that last for generations.
              </p>

            </motion.div>

            {/* Right Image */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <ViewfinderImage
                src={photographer}
                alt="Photographer"
                heightClass="h-[420px] md:h-[650px]"
              />

            </motion.div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* OUR STORY */}
      {/* ========================================================= */}

      <section className="relative bg-white py-24 md:py-32 overflow-hidden">

        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[#F5F5F5]"
          style={{ clipPath: "polygon(0 0, 100% 0, 78% 100%, 0 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Image */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <ViewfinderImage
                src={photographer}
                alt="Our Story"
                heightClass="h-[380px] md:h-[600px]"
              />

            </motion.div>

            {/* Text */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >

              <GhostWord
                text="STORY"
                className="-top-8 md:-top-14 -left-1 text-[56px] md:text-[100px] text-black/[0.04]"
              />

              <Eyebrow label="Our Story" />

              <h2
                className="relative text-4xl md:text-5xl font-bold text-[#111111] mt-5 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Every Picture Has A Story
              </h2>

              <p className="relative mt-8 text-gray-600 leading-8">

                What started as a passion for capturing beautiful moments
                gradually became a journey of preserving life's most precious
                memories. Every wedding, every celebration, and every family
                event is unique, and our mission is to tell those stories
                through timeless photography.

              </p>

              <p className="relative mt-6 text-gray-600 leading-8">

                We believe that the best photographs are not posed—they are
                genuine moments filled with emotion, laughter, and love.
                Our approach combines creativity, professionalism, and
                attention to detail to deliver photographs that you'll cherish
                forever.

              </p>

              {/* Mission & Vision */}

              <div className="relative grid md:grid-cols-2 gap-6 mt-10">

                <div className="group bg-[#F8F8F8] p-6 rounded-2xl border border-transparent hover:border-[#D4AF37]/40 hover:bg-white hover:shadow-xl transition-all duration-300">

                  <div className="w-8 h-[3px] bg-[#D4AF37] mb-4 group-hover:w-14 transition-all duration-300" />

                  <h3 className="text-xl font-semibold text-[#111111] mb-3">
                    Our Mission
                  </h3>

                  <p className="text-gray-600 leading-7">
                    To preserve every emotion and celebration through creative,
                    timeless, and meaningful photography.
                  </p>

                </div>

                <div className="group bg-[#F8F8F8] p-6 rounded-2xl border border-transparent hover:border-[#D4AF37]/40 hover:bg-white hover:shadow-xl transition-all duration-300">

                  <div className="w-8 h-[3px] bg-[#D4AF37] mb-4 group-hover:w-14 transition-all duration-300" />

                  <h3 className="text-xl font-semibold text-[#111111] mb-3">
                    Our Vision
                  </h3>

                  <p className="text-gray-600 leading-7">
                    To become one of the most trusted photography studios,
                    creating memories that families treasure forever.
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* JOURNEY TIMELINE */}
      {/* ========================================================= */}

      <section className="relative bg-[#111111] py-24 md:py-32 overflow-hidden">

        <DotTexture tone="gold" />

        <div className="relative max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >

            <Eyebrow label="Our Journey" align="center" />

            <h2
              className="text-4xl md:text-5xl font-bold text-white mt-5"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Milestones Along The Way
            </h2>

          </motion.div>

          <div className="relative">

            {/* Center Line */}

            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent transform -translate-x-1/2" />

            {[
              {
                year: "2015",
                title: "Started Photography",
                desc: "Turned a passion into a profession by beginning our photography journey.",
              },
              {
                year: "2018",
                title: "First Wedding Project",
                desc: "Successfully captured our first complete wedding with storytelling photography.",
              },
              {
                year: "2018",
                title: "Established Bagchi Studio",
                desc: "Created a dedicated photography brand focused on premium experiences.",
              },
              {
                year: "Today",
                title: "Growing Every Day",
                desc: "Continuing to create beautiful memories for families and couples.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                } mb-14`}
              >

                {/* Node */}

                <span className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_0_5px_rgba(212,175,55,0.15)] z-10" />

                <div className="group bg-[#1A1A1A] border border-gray-800 hover:border-[#D4AF37] rounded-2xl p-6 w-full md:w-[45%] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.25)]">

                  <span className="inline-block text-[#D4AF37] text-xs font-bold uppercase tracking-[3px] border border-[#D4AF37]/40 rounded-full px-3 py-1">
                    {item.year}
                  </span>

                  <h4 className="text-white text-xl md:text-2xl mt-4 font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 mt-4 leading-7">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* PHILOSOPHY */}
      {/* ========================================================= */}

      <section className="relative bg-white py-24 md:py-32 overflow-hidden">

        <GhostWord
          text="“ ”"
          className="top-0 left-1/2 -translate-x-1/2 text-[220px] text-black/[0.03] hidden md:block"
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <Eyebrow label="Our Philosophy" align="center" />

            <h2
              className="text-4xl md:text-5xl font-bold text-[#111111] mt-5"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              We Don't Just Capture Photos
            </h2>

            <div className="w-16 h-[3px] bg-[#D4AF37] mx-auto mt-8" />

            <blockquote className="relative mt-12 text-2xl md:text-3xl leading-relaxed italic text-gray-700">

              “Every smile,
              every tear,
              every celebration deserves
              to be remembered forever.”

            </blockquote>

          </motion.div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* ACHIEVEMENTS */}
      {/* ========================================================= */}

      <section className="relative bg-[#F8F8F8] py-24 md:py-32 overflow-hidden">

        <DotTexture tone="black" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <Eyebrow label="Achievements" align="center" />

            <h2
              className="text-4xl md:text-5xl font-bold text-[#111111] mt-5"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Numbers That Inspire Confidence
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                number: "500+",
                title: "Happy Clients",
              },
              {
                number: "200+",
                title: "Events Covered",
              },
              {
                number: "6+",
                title: "Years Experience",
              },
              {
                number: "4.9★",
                title: "Average Rating",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="relative bg-white rounded-3xl shadow-lg p-10 text-center border border-transparent hover:border-[#D4AF37] hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] transition-all overflow-hidden"
              >

                <span
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -top-4 right-2 text-7xl font-black text-[#D4AF37]/5"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {item.number}
                </span>

                <h3 className="relative text-4xl md:text-5xl font-bold text-[#D4AF37]">
                  {item.number}
                </h3>

                <div className="w-8 h-px bg-[#D4AF37]/40 mx-auto mt-4" />

                <p className="relative text-[#111111] mt-4 text-lg md:text-xl font-semibold">
                  {item.title}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* BEHIND THE SCENES */}
      {/* ========================================================= */}

      <section className="relative bg-white py-24 md:py-32 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <Eyebrow label="Behind The Scenes" align="center" />

            <h2
              className="text-4xl md:text-5xl font-bold text-[#111111] mt-5"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              How We Work
            </h2>

          </motion.div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Connecting line (desktop) */}

            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-[#D4AF37]/30" />

            {[
              {
                title: "Planning",
                desc: "Understanding your vision and planning every important moment.",
              },
              {
                title: "Photography",
                desc: "Capturing genuine emotions with creativity and attention to detail.",
              },
              {
                title: "Editing",
                desc: "Professionally enhancing every image while preserving natural beauty.",
              },
              {
                title: "Delivery",
                desc: "Providing beautifully edited photographs and premium albums.",
              },
            ].map((item, index) => (

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
                className="relative bg-[#F8F8F8] rounded-3xl p-8 shadow-lg text-center hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.25)] transition-shadow duration-300"
              >

                <div className="relative w-16 h-16 rounded-full bg-[#D4AF37] text-black flex items-center justify-center mx-auto text-2xl font-bold mb-6 ring-4 ring-white shadow-[0_0_0_1px_rgba(212,175,55,0.3)]">
                  {index + 1}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-[#111111] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* WHY CLIENTS LOVE US */}
      {/* ========================================================= */}

      <section className="relative bg-[#111111] py-24 md:py-32 overflow-hidden">

        <DotTexture tone="gold" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <Eyebrow label="Why Choose Us" align="center" />

            <h2
              className="text-4xl md:text-5xl font-bold text-white mt-5"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Why Clients Love Bagchi Studio
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Professional Photography",
              "Creative Storytelling",
              "Premium Editing",
              "Fast Delivery",
              "Affordable Packages",
              "Friendly Experience",
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative bg-[#1A1A1A] border border-gray-700 hover:border-[#D4AF37] rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] overflow-hidden"
              >

                <span className="absolute top-3 left-3 text-[10px] font-bold text-[#D4AF37]/60 tracking-wider tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-white text-lg md:text-xl font-semibold mt-2">
                  {item}
                </h3>

                <div className="w-8 h-px bg-[#D4AF37]/40 mx-auto mt-4" />

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}

export default AboutContent;