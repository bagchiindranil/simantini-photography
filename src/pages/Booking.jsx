import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  XCircle,
  X,
} from "lucide-react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    days: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // =====================================================
  // POPUP STATE
  // =====================================================

  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const closePopup = () => {
    setPopup((prev) => ({
      ...prev,
      open: false,
    }));
  };

  // =====================================================
  // HANDLE INPUT CHANGES
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (date) => {
    if (!date) return "Not provided";

    const dateObject = new Date(`${date}T00:00:00`);

    return dateObject.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // =====================================================
  // SUBMIT BOOKING TO WHATSAPP
  // =====================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    // =====================================================
    // BASIC VALIDATION
    // =====================================================

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.service
    ) {
      setPopup({
        open: true,
        type: "error",
        message:
          "Please fill in your name, phone number and photography service.",
      });

      return;
    }

    try {
      setLoading(true);

      // =====================================================
      // OWNER WHATSAPP NUMBER
      // =====================================================

      const ownerWhatsAppNumber = "918972567764";

      // =====================================================
      // CREATE WHATSAPP MESSAGE
      // =====================================================

      const whatsappMessage = `
*NEW PHOTOGRAPHY BOOKING REQUEST*

==============================

*CUSTOMER DETAILS*

Name: ${formData.name.trim()}

Phone: ${formData.phone.trim()}

Email: ${formData.email.trim() || "Not provided"}

==============================

*BOOKING DETAILS*

Service: ${formData.service}

Event Date: ${formatDate(formData.date)}

Duration: ${
        formData.days
          ? formData.days === "1"
            ? "1 Day"
            : formData.days === "2"
            ? "2 Days"
            : formData.days === "3"
            ? "3 Days"
            : "4+ Days"
          : "Not provided"
      }

Location: ${formData.location.trim() || "Not provided"}

==============================

*ADDITIONAL DETAILS*

${formData.message.trim() || "No additional details provided."}

==============================

Please contact the customer regarding this booking request.
      `.trim();

      // =====================================================
      // CREATE WHATSAPP URL
      // =====================================================

      const whatsappURL = `https://wa.me/${ownerWhatsAppNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // =====================================================
      // OPEN WHATSAPP
      // =====================================================

      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

      // =====================================================
      // CLEAR FORM
      // =====================================================

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        days: "",
        location: "",
        message: "",
      });

      // =====================================================
      // SUCCESS POPUP
      // =====================================================

      setPopup({
        open: true,
        type: "success",
        message:
          "Your booking details are ready in WhatsApp. Please press Send in WhatsApp to submit your request.",
      });
    } catch (error) {
      console.error("WhatsApp booking error:", error);

      setPopup({
        open: true,
        type: "error",
        message:
          "Unable to open WhatsApp. Please try again or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* =====================================================
          SUBMISSION POPUP
      ===================================================== */}

      <AnimatePresence>
        {popup.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          >
            {/* Backdrop */}

            <div
              onClick={closePopup}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: 20,
              }}
              transition={{
                type: "spring",
                damping: 22,
                stiffness: 300,
              }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10 text-center overflow-hidden"
            >
              {/* Gold Accent Glow */}

              <div
                className={`pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-[80px] ${
                  popup.type === "success"
                    ? "bg-[#D4AF37]/25"
                    : "bg-red-500/20"
                }`}
              />

              {/* Close Button */}

              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#111111] transition-colors duration-200"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              {/* Icon */}

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className={`relative mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center ${
                  popup.type === "success"
                    ? "bg-[#D4AF37]/10 border border-[#D4AF37]/40"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                {popup.type === "success" ? (
                  <CheckCircle2
                    className="text-[#D4AF37]"
                    size={40}
                  />
                ) : (
                  <XCircle
                    className="text-red-500"
                    size={40}
                  />
                )}
              </motion.div>

              {/* Title */}

              <h3
                className="relative text-2xl md:text-3xl font-bold text-[#111111] mb-3"
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                {popup.type === "success"
                  ? "Request Ready!"
                  : "Oops!"}
              </h3>

              {/* Message */}

              <p className="relative text-gray-500 leading-7 mb-8">
                {popup.message}
              </p>

              {/* Button */}

              <button
                onClick={closePopup}
                className={`relative w-full py-3.5 rounded-xl font-semibold transition-colors duration-300 ${
                  popup.type === "success"
                    ? "bg-[#111111] text-white hover:bg-[#D4AF37] hover:text-black"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
              >
                {popup.type === "success"
                  ? "Great, Thanks!"
                  : "Got It"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative bg-[#111111] py-16 md:py-20 overflow-hidden">

        {/* Dot Texture */}

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

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[130px]" />

        {/* Ghost Watermark */}

        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-4 left-1/2 -translate-x-1/2 text-[90px] md:text-[160px] font-black text-white/[0.03] leading-none tracking-tight whitespace-nowrap hidden sm:block"
          style={{
            fontFamily: "Playfair Display, serif",
          }}
        >
          BOOKING
        </span>

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="uppercase tracking-[5px] text-[#D4AF37] font-semibold flex items-center justify-center gap-3 text-sm"
          >
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />

            Book Your Session

            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight"
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            Let's Capture Your Story
          </motion.h1>

          <div className="w-16 h-[3px] bg-[#D4AF37] mx-auto mt-6" />

        </div>
      </section>

      {/* =====================================================
          BOOKING FORM
      ===================================================== */}

      <section className="relative bg-white py-24 md:py-32 overflow-hidden">

        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[#F5F5F5]"
          style={{
            clipPath:
              "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="relative bg-[#F8F8F8] rounded-3xl p-8 md:p-12 shadow-xl border border-transparent hover:border-[#D4AF37]/20 transition-colors duration-300"
          >

            <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

            <div className="text-center mb-10">

              <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold flex items-center justify-center gap-3 text-sm">

                <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />

                Booking Details

                <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />

              </p>

              <h2
                className="text-3xl md:text-4xl font-bold text-[#111111] mt-4"
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Tell Us About Your Event
              </h2>

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name + Phone */}

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 placeholder:text-gray-400"
                  />

                </div>

                <div>

                  <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 placeholder:text-gray-400"
                  />

                </div>

              </div>

              {/* Email + Service */}

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 placeholder:text-gray-400"
                  />

                </div>

                <div>

                  <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">
                    Photography Service
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-gray-600 outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300"
                  >

                    <option value="">
                      Select Service
                    </option>

                    <option value="Wedding Photography">
                      Wedding Photography
                    </option>

                    <option value="Pre Wedding Photography">
                      Pre Wedding Photography
                    </option>

                    <option value="Bridal Photography">
                      Bridal Photography
                    </option>

                    <option value="Reception Photography">
                      Reception Photography
                    </option>

                    <option value="Rice Ceremony">
                      Rice Ceremony
                    </option>

                    <option value="Couple Photography">
                      Couple Photography
                    </option>

                  </select>

                </div>

              </div>

              {/* Date + Days */}

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">
                    Event Date
                  </label>

                  <div className="relative">

                    <CalendarDays
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                    />

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 bg-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300"
                    />

                  </div>

                </div>

                <div>

                  <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">
                    Number of Days
                  </label>

                  <select
                    name="days"
                    value={formData.days}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-gray-600 outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300"
                  >

                    <option value="">
                      Select Duration
                    </option>

                    <option value="1">
                      1 Day
                    </option>

                    <option value="2">
                      2 Days
                    </option>

                    <option value="3">
                      3 Days
                    </option>

                    <option value="4+">
                      4+ Days
                    </option>

                  </select>

                </div>

              </div>

              {/* Location */}

              <div>

                <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">
                  Event Location
                </label>

                <div className="relative">

                  <MapPin
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                  />

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter event location"
                    className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 bg-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 placeholder:text-gray-400"
                  />

                </div>

              </div>

              {/* Message */}

              <div>

                <label className="block text-sm font-semibold text-[#111111] mb-2 tracking-wide">
                  Additional Details
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us anything else about your event..."
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white outline-none resize-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 placeholder:text-gray-400"
                ></textarea>

              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="group/submit relative w-full overflow-hidden bg-[#111111] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-sm hover:shadow-[0_15px_35px_-12px_rgba(212,175,55,0.5)] transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >

                <span className="absolute inset-0 bg-[#D4AF37] scale-x-0 group-hover/submit:scale-x-100 origin-left transition-transform duration-500 ease-out" />

                <span className="relative z-10 group-hover/submit:text-black transition-colors duration-300">
                  {loading
                    ? "Opening WhatsApp..."
                    : "Submit Booking Request"}
                </span>

                <Send
                  size={18}
                  className="relative z-10 group-hover/submit:text-black group-hover/submit:translate-x-1 transition-all duration-300"
                />

              </button>

            </form>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          CONTACT NOTE
      ===================================================== */}

      <section className="relative bg-[#111111] py-20 overflow-hidden">

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(#D4AF37 0.6px, transparent 0.6px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(circle at 50% 50%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 50%, black, transparent 75%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            {/* Phone */}

            <div className="group p-6 rounded-2xl hover:bg-white/[0.03] transition-colors duration-300">

              <div className="w-14 h-14 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10">

                <Phone
                  className="text-[#D4AF37]"
                  size={22}
                />

              </div>

              <h3 className="text-white font-semibold tracking-wide">
                Call Us
              </h3>

              <p className="text-gray-400 mt-2">
                +91 89725 67764
              </p>

            </div>

            {/* Email */}

            <div className="group p-6 rounded-2xl hover:bg-white/[0.03] transition-colors duration-300">

              <div className="w-14 h-14 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10">

                <Mail
                  className="text-[#D4AF37]"
                  size={22}
                />

              </div>

              <h3 className="text-white font-semibold tracking-wide">
                Email Us
              </h3>

              <p className="text-gray-400 mt-2">
                simantiniphotography@gmail.com
              </p>

            </div>

            {/* Studio */}

            <div className="group p-6 rounded-2xl hover:bg-white/[0.03] transition-colors duration-300">

              <div className="w-14 h-14 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10">

                <MapPin
                  className="text-[#D4AF37]"
                  size={22}
                />

              </div>

              <h3 className="text-white font-semibold tracking-wide">
                Studio
              </h3>

              <p className="text-gray-400 mt-2">
                Matgoda, Bankura, West Bengal
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Booking;