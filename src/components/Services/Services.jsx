import { motion } from "framer-motion";
import {
  Camera,
  Heart,
  Crown,
  PartyPopper,
  Baby,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description:
      "Capture every unforgettable moment of your wedding with artistic storytelling and professional photography.",
    features: [
      "Full Day Coverage",
      "Bride & Groom Portraits",
      "Candid Photography",
      "Traditional Photography",
      "Premium Editing",
      "Online Gallery",
    ],
  },
  {
    icon: Heart,
    title: "Pre Wedding Shoot",
    description:
      "Creative outdoor and indoor pre-wedding sessions that beautifully tell your love story.",
    features: [
      "Outdoor Locations",
      "Indoor Studio Shoot",
      "Multiple Outfits",
      "Creative Concepts",
      "Professional Editing",
      "High Resolution Images",
    ],
  },
  {
    icon: Crown,
    title: "Bridal Photography",
    description:
      "Elegant bridal portraits highlighting every beautiful detail of your special day.",
    features: [
      "Bridal Portraits",
      "Makeup Highlights",
      "Jewellery Details",
      "Luxury Retouching",
      "Traditional Poses",
      "Premium Editing",
    ],
  },
  {
    icon: PartyPopper,
    title: "Reception Photography",
    description:
      "Capture every celebration, smile and memorable moment of your reception.",
    features: [
      "Stage Photography",
      "Guest Coverage",
      "Couple Portraits",
      "Cake Ceremony",
      "Event Highlights",
      "Professional Editing",
    ],
  },
  {
    icon: Baby,
    title: "Rice Ceremony",
    description:
      "Preserve your baby's precious milestone with emotional and timeless photography.",
    features: [
      "Traditional Rituals",
      "Family Portraits",
      "Baby Portraits",
      "Decoration Coverage",
      "Premium Editing",
      "Digital Delivery",
    ],
  },
  {
    icon: Users,
    title: "Couple Photography",
    description:
      "Romantic portraits captured in natural settings that reflect your unique bond.",
    features: [
      "Outdoor Sessions",
      "Indoor Sessions",
      "Creative Poses",
      "Professional Editing",
      "High Resolution Photos",
      "Online Gallery",
    ],
  },
];

function Services() {
  return (
    <section className="relative bg-white py-24 md:py-28 overflow-hidden">

      {/* Dot texture */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(#D4AF37 0.6px, transparent 0.6px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(circle at 50% 15%, black, transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 15%, black, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
            Our Services
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold text-[#111111] mt-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Photography Services We Offer
          </h2>

          <div className="w-16 h-[3px] bg-[#D4AF37] mx-auto mt-6" />

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8">
            From weddings to intimate couple sessions, we provide professional
            photography services designed to preserve your most precious
            memories with creativity, elegance, and attention to detail.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-[#111111] rounded-3xl p-8 border border-gray-800 hover:border-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-[0_25px_50px_-20px_rgba(212,175,55,0.35)] overflow-hidden"
              >

                <span className="absolute top-6 right-7 text-[11px] font-bold text-[#D4AF37]/40 tracking-[3px] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:scale-105">

                  <Icon
                    size={28}
                    className="text-[#D4AF37] transition-colors duration-300 group-hover:text-black"
                  />

                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">

                  {service.features.map((feature, i) => (

                    <li
                      key={i}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] mr-3 shrink-0"></span>

                      {feature}
                    </li>

                  ))}

                </ul>

                <Link
                  to="/booking"
                  className="group/link relative inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:gap-4 transition-all duration-300"
                >
                  Book This Service

                  <ArrowRight size={18} />

                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4AF37] group-hover/link:w-[calc(100%-1.7rem)] transition-all duration-300" />
                </Link>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Services;