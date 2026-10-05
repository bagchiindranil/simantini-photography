import { motion } from "framer-motion";
import banner from "../../../assets/images/services/services-banner.webp";


function ServiceHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}

      <img
        src={banner}
        alt="Photography Services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[6px] text-[#D4AF37] font-semibold"
        >
          Our Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold text-white mt-5 leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Photography That
          <br />
          Tells Your Story
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-200 mt-8 leading-8 max-w-2xl mx-auto text-lg"
        >
          From weddings and pre-wedding shoots to bridal portraits,
          receptions, rice ceremonies and couple photography,
          we create timeless memories you'll cherish forever.
        </motion.p>

      </div>

    </section>
  );
}

export default ServiceHero;