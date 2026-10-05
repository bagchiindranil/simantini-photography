import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

import Navbar from "../components/Navbar/Navbar";
import BookingBanner from "../components/BookingBanner/BookingBanner";
import Footer from "../components/Footer/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
  // SUBMIT CONTACT MESSAGE TO WHATSAPP
  // =====================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in your name, phone number and message.");
      return;
    }

    try {
      setLoading(true);

      // =====================================================
      // OWNER WHATSAPP NUMBER
      // =====================================================

      const ownerWhatsAppNumber = "918972567764";

      // =====================================================
      // EVENT TYPE FORMAT
      // =====================================================

      const eventTypeMap = {
        wedding: "Wedding Photography",
        "pre-wedding": "Pre Wedding",
        bridal: "Bridal Photography",
        reception: "Reception",
        "rice-ceremony": "Rice Ceremony",
        couple: "Couple Photography",
      };

      const eventType =
        eventTypeMap[formData.eventType] ||
        formData.eventType ||
        "Not provided";

      // =====================================================
      // CREATE WHATSAPP MESSAGE
      // =====================================================

      const whatsappMessage = `
*NEW CONTACT MESSAGE*

==============================

*CUSTOMER DETAILS*

Name: ${formData.name.trim()}

Email: ${formData.email.trim() || "Not provided"}

Phone: ${formData.phone.trim()}

==============================

*EVENT TYPE*

${eventType}

==============================

*MESSAGE*

${formData.message.trim()}

==============================

Please contact the customer regarding this message.
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
        email: "",
        phone: "",
        eventType: "",
        message: "",
      });
    } catch (error) {
      console.error("WhatsApp contact error:", error);

      alert(
        "Unable to open WhatsApp. Please try again or contact us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative bg-[#111111] py-16 md:py-20 overflow-hidden">

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

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[130px]" />

        {/* Ghost watermark */}

        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-6 left-1/2 -translate-x-1/2 text-[90px] md:text-[160px] font-black text-white/[0.03] leading-none tracking-tight whitespace-nowrap hidden sm:block"
          style={{
            fontFamily: "Playfair Display, serif",
          }}
        >
          CONTACT
        </span>

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[5px] text-[#D4AF37] font-semibold flex items-center justify-center gap-3 text-sm"
          >
            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />

            Contact Us

            <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight"
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            Let's Create Something Beautiful
          </motion.h1>

          <div className="w-16 h-[3px] bg-[#D4AF37] mx-auto mt-6" />

        </div>
      </section>


      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="relative bg-white py-24 md:py-32 overflow-hidden">

        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[#F5F5F5]"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 78% 100%, 0 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">

            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >

              <span
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-8 md:-top-14 -left-1 text-[56px] md:text-[100px] font-black text-black/[0.04] leading-none tracking-tight whitespace-nowrap"
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                REACH
              </span>

              <p className="relative uppercase tracking-[5px] text-[#D4AF37] font-semibold flex items-center gap-3 text-sm">

                <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />

                Get In Touch

              </p>

              <h2
                className="relative text-3xl md:text-4xl font-bold text-[#111111] mt-4 leading-tight"
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                We'd Love To Hear From You
              </h2>

              <p className="relative text-gray-600 mt-6 leading-8 max-w-md">
                Whether you're planning a wedding, pre-wedding shoot,
                family celebration, or a couple session, feel free to
                reach out to us.
              </p>

              {/* Contact Details */}

              <div className="relative mt-10 space-y-3">

                {/* Studio */}

                <div className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-[#F8F8F8] transition-colors duration-300">

                  <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_25px_-8px_rgba(212,175,55,0.5)]">

                    <MapPin
                      size={22}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-[#111111]">
                      Studio
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Matgoda, Bankura, West Bengal, India
                    </p>

                  </div>

                </div>


                {/* Phone */}

                <div className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-[#F8F8F8] transition-colors duration-300">

                  <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_25px_-8px_rgba(212,175,55,0.5)]">

                    <Phone
                      size={22}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-[#111111]">
                      Phone
                    </h3>

                    <p className="text-gray-600 mt-1">
                      +91 89725 67764
                    </p>

                  </div>

                </div>


                {/* Email */}

                <div className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-[#F8F8F8] transition-colors duration-300">

                  <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_25px_-8px_rgba(212,175,55,0.5)]">

                    <Mail
                      size={22}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-[#111111]">
                      Email
                    </h3>

                    <p className="text-gray-600 mt-1">
                      simantiniphotography@gmail.com
                    </p>

                  </div>

                </div>


                {/* Working Hours */}

                <div className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-[#F8F8F8] transition-colors duration-300">

                  <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_25px_-8px_rgba(212,175,55,0.5)]">

                    <Clock
                      size={22}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-[#111111]">
                      Working Hours
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Monday – Sunday · 8:00 AM – 10:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>


            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-[#F8F8F8] rounded-3xl p-8 md:p-10 shadow-lg border border-transparent hover:border-[#D4AF37]/20 transition-colors duration-300"
            >

              <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

              <h3
                className="text-2xl md:text-3xl font-bold text-[#111111]"
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Send Us A Message
              </h3>

              <p className="text-gray-600 mt-3 mb-8">
                Fill out the form and we'll get back to you soon.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name */}

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 placeholder:text-gray-400"
                />


                {/* Email */}

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 placeholder:text-gray-400"
                />


                {/* Phone */}

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 placeholder:text-gray-400"
                />


                {/* Event */}

                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-gray-600 outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300"
                >

                  <option value="">
                    Select Event Type
                  </option>

                  <option value="wedding">
                    Wedding Photography
                  </option>

                  <option value="pre-wedding">
                    Pre Wedding
                  </option>

                  <option value="bridal">
                    Bridal Photography
                  </option>

                  <option value="reception">
                    Reception
                  </option>

                  <option value="rice-ceremony">
                    Rice Ceremony
                  </option>

                  <option value="couple">
                    Couple Photography
                  </option>

                </select>


                {/* Message */}

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event..."
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white outline-none resize-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300 placeholder:text-gray-400"
                ></textarea>


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
                      : "Send Message"}
                  </span>

                  <Send
                    size={18}
                    className="relative z-10 group-hover/submit:text-black group-hover/submit:translate-x-1 transition-all duration-300"
                  />

                </button>

              </form>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOOKING BANNER
      ===================================================== */}

      <BookingBanner />


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </>
  );
}

export default Contact;