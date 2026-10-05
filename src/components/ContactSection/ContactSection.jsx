import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

function ContactSection() {
  return (
    <section className="relative bg-[#111111] py-24 overflow-hidden">

      {/* =====================================================
          AMBIENT GOLD GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />


      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===================================================
            HEADING
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-[#D4AF37]/50" />

            Contact Us

            <span className="h-px w-8 bg-[#D4AF37]/50" />

          </p>


          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-5"
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            Let's Create Beautiful Memories
          </h2>


          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Have a question or planning your next celebration?
            We'd love to hear from you.
          </p>

        </motion.div>


        {/* ===================================================
            CONTACT INFORMATION
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
          "
        >

          {/* =================================================
              STUDIO ADDRESS
          ================================================= */}

          <div
            className="
              group
              flex
              gap-4
              p-5
              rounded-2xl
              border
              border-transparent
              hover:border-gray-800
              hover:bg-[#161616]
              transition-all
              duration-300
            "
          >

            <div
              className="
                shrink-0
                w-12
                h-12
                rounded-full
                bg-[#1A1A1A]
                border
                border-gray-800
                flex
                items-center
                justify-center
                group-hover:border-[#D4AF37]/50
                group-hover:bg-[#D4AF37]/10
                transition-all
                duration-300
              "
            >
              <MapPin
                className="text-[#D4AF37]"
                size={21}
              />
            </div>


            <div className="min-w-0">

              <h3 className="text-white text-base font-semibold tracking-wide">
                Studio Address
              </h3>

              <p className="text-gray-400 mt-2 text-sm leading-6">
                Matgoda, Bankura, West Bengal, India
              </p>

            </div>

          </div>


          {/* =================================================
              PHONE
          ================================================= */}

          <div
            className="
              group
              flex
              gap-4
              p-5
              rounded-2xl
              border
              border-transparent
              hover:border-gray-800
              hover:bg-[#161616]
              transition-all
              duration-300
            "
          >

            <div
              className="
                shrink-0
                w-12
                h-12
                rounded-full
                bg-[#1A1A1A]
                border
                border-gray-800
                flex
                items-center
                justify-center
                group-hover:border-[#D4AF37]/50
                group-hover:bg-[#D4AF37]/10
                transition-all
                duration-300
              "
            >
              <Phone
                className="text-[#D4AF37]"
                size={21}
              />
            </div>


            <div className="min-w-0">

              <h3 className="text-white text-base font-semibold tracking-wide">
                Phone
              </h3>

              <p className="text-gray-400 mt-2 text-sm leading-6 whitespace-nowrap">
                +91 89725 67764
              </p>

            </div>

          </div>


          {/* =================================================
              EMAIL
          ================================================= */}

          <div
            className="
              group
              flex
              gap-4
              p-5
              rounded-2xl
              border
              border-transparent
              hover:border-gray-800
              hover:bg-[#161616]
              transition-all
              duration-300
            "
          >

            <div
              className="
                shrink-0
                w-12
                h-12
                rounded-full
                bg-[#1A1A1A]
                border
                border-gray-800
                flex
                items-center
                justify-center
                group-hover:border-[#D4AF37]/50
                group-hover:bg-[#D4AF37]/10
                transition-all
                duration-300
              "
            >
              <Mail
                className="text-[#D4AF37]"
                size={21}
              />
            </div>


            <div className="min-w-0">

              <h3 className="text-white text-base font-semibold tracking-wide">
                Email
              </h3>

              <p
                className="
                  text-gray-400
                  mt-2
                  text-sm
                  leading-6
                  break-all
                "
              >
                simantiniphotography@gmail.com
              </p>

            </div>

          </div>


          {/* =================================================
              WORKING HOURS
          ================================================= */}

          <div
            className="
              group
              flex
              gap-4
              p-5
              rounded-2xl
              border
              border-transparent
              hover:border-gray-800
              hover:bg-[#161616]
              transition-all
              duration-300
            "
          >

            <div
              className="
                shrink-0
                w-12
                h-12
                rounded-full
                bg-[#1A1A1A]
                border
                border-gray-800
                flex
                items-center
                justify-center
                group-hover:border-[#D4AF37]/50
                group-hover:bg-[#D4AF37]/10
                transition-all
                duration-300
              "
            >
              <Clock
                className="text-[#D4AF37]"
                size={21}
              />
            </div>


            <div className="min-w-0">

              <h3 className="text-white text-base font-semibold tracking-wide">
                Working Hours
              </h3>

              <p className="text-gray-400 mt-2 text-sm leading-6">
                Monday – Sunday
                <br />
                8:00 AM – 10:00 PM
              </p>

            </div>

          </div>

        </motion.div>


        {/* ===================================================
            ACTION BUTTONS
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-4
            max-w-xl
            mx-auto
          "
        >

          {/* =================================================
              BOOK NOW
          ================================================= */}

          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >

            <Link
              to="/booking"
              className="
                group
                relative
                overflow-hidden

                w-full
                sm:min-w-[190px]

                flex
                items-center
                justify-center

                bg-[#D4AF37]
                hover:bg-[#e5c158]

                text-black
                font-semibold

                py-4
                px-8

                rounded-xl

                shadow-[0_10px_30px_-10px_rgba(212,175,55,0.5)]

                transition-all
                duration-300
              "
            >

              <span
                className="
                  absolute
                  inset-0
                  bg-white/20
                  scale-x-0
                  group-hover:scale-x-100
                  origin-left
                  transition-transform
                  duration-500
                "
              />

              <span className="relative z-10">
                Book Now
              </span>

            </Link>

          </motion.div>


          {/* =================================================
              CONTACT NOW
          ================================================= */}

          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >

            <Link
              to="/contact"
              className="
                group
                relative
                overflow-hidden

                w-full
                sm:min-w-[190px]

                flex
                items-center
                justify-center

                bg-transparent

                border
                border-[#D4AF37]

                text-[#D4AF37]

                hover:bg-[#D4AF37]
                hover:text-black

                font-semibold

                py-4
                px-8

                rounded-xl

                transition-all
                duration-300
              "
            >

              <span className="relative z-10">
                Contact Now
              </span>

            </Link>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactSection;