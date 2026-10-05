import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import newLogo from "../../assets/images/newlogo.webp";

function AboutSection() {
  return (
    <section className="bg-[#F8F8F8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-[#D4AF37] uppercase tracking-[4px] font-semibold">
              ABOUT SIMANTINI PHOTOGRAPHY
            </p>

            <h2
              className="text-5xl font-bold text-[#111111] mt-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Capturing Your Beautiful Story
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              Every smile, every emotion, and every celebration deserves to be
              remembered forever.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              SIMANTINI PHOTOGRAPHY specializes in luxury wedding photography,
              pre-wedding shoots, portraits, events, baby photography and
              commercial photography with a creative and cinematic approach.
            </p>

            <Link
              to="/about"
              className="inline-block mt-10 bg-[#111111] text-white px-8 py-4 rounded-xl hover:bg-[#D4AF37] hover:text-black transition duration-300"
            >
              Learn More
            </Link>

          </motion.div>


          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="w-full max-w-[500px]">

              <img
                src={newLogo}
                alt="SIMANTINI PHOTOGRAPHY"
                className="
                  w-full
                  h-auto
                  max-h-[600px]
                  object-contain
                  rounded-3xl
                  shadow-xl
                "
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;