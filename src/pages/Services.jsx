import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BookingBanner from "../components/BookingBanner/BookingBanner";

import ServiceHero from "../components/Services/ServiceHero/ServiceHero";
import ServiceSection from "../components/Services/ServiceSection/ServiceSection";

// Images
import wedding from "../assets/images/services/wedding.webp";
import preWedding from "../assets/images/services/pre-wedding.webp";
import bridal from "../assets/images/services/bridal.webp";
import reception from "../assets/images/services/reception.webp";
import riceCeremony from "../assets/images/services/rice-ceremony.webp";
import couple from "../assets/images/services/couple.webp";

const services = [
  {
    title: "Wedding Photography",
    image: wedding,
    category: "wedding",
    reverse: false,
    description:
      "Your wedding day is one of the most important moments of your life. We capture every smile, emotion, tradition, and celebration with a storytelling approach that creates timeless memories you'll treasure forever.",
    features: [
      "Full Day Coverage",
      "Bride & Groom Portraits",
      "Candid Photography",
      "Traditional Photography",
      "Family Group Photos",
      "Premium Editing",
      "High Resolution Images",
      "Online Gallery",
    ],
  },

  {
    title: "Pre Wedding Photography",
    image: preWedding,
    category: "pre-wedding",
    reverse: true,
    description:
      "Celebrate your journey before the wedding with a creative photoshoot at beautiful outdoor or indoor locations. Every frame reflects your love story naturally.",
    features: [
      "Outdoor Locations",
      "Indoor Studio Shoot",
      "Multiple Outfit Changes",
      "Creative Concepts",
      "Professional Editing",
      "High Resolution Images",
      "Social Media Ready Photos",
      "Location Guidance",
    ],
  },

  {
    title: "Bridal Photography",
    image: bridal,
    category: "bridal",
    reverse: false,
    description:
      "Every bride deserves stunning portraits that highlight elegance, beauty, and emotion. We focus on every little detail to create magazine-quality bridal photographs.",
    features: [
      "Bridal Portraits",
      "Jewellery Highlights",
      "Makeup Details",
      "Traditional Poses",
      "Luxury Retouching",
      "Premium Editing",
      "Creative Lighting",
      "High Resolution Images",
    ],
  },

  {
    title: "Reception Photography",
    image: reception,
    category: "reception",
    reverse: true,
    description:
      "From stage moments to candid celebrations, we capture every unforgettable memory from your reception with creativity and professionalism.",
    features: [
      "Stage Photography",
      "Guest Coverage",
      "Couple Portraits",
      "Cake Ceremony",
      "Family Photos",
      "Premium Editing",
      "High Resolution Images",
      "Online Gallery",
    ],
  },

  {
    title: "Rice Ceremony",
    image: riceCeremony,
    category: "rice-ceremony",
    reverse: false,
    description:
      "Your baby's first rice ceremony is a once-in-a-lifetime celebration. We preserve every tradition and every smile through beautiful storytelling photography.",
    features: [
      "Traditional Rituals",
      "Baby Portraits",
      "Family Portraits",
      "Decoration Coverage",
      "Candid Moments",
      "Premium Editing",
      "Digital Gallery",
      "High Resolution Images",
    ],
  },

  {
    title: "Couple Photography",
    image: couple,
    category: "couple",
    reverse: true,
    description:
      "Whether it's an anniversary, engagement or simply celebrating your relationship, our couple sessions capture genuine emotions and timeless memories.",
    features: [
      "Outdoor Shoot",
      "Indoor Shoot",
      "Creative Poses",
      "Professional Editing",
      "High Resolution Photos",
      "Online Gallery",
      "Location Suggestions",
      "Multiple Outfit Changes",
    ],
  },
];

function Services() {
  return (
    <>
      <Navbar />

      <ServiceHero />

      {services.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          features={service.features}
          reverse={service.reverse}
          category={service.category}
        />
      ))}

      <BookingBanner />

      <Footer />
    </>
  );
}

export default Services;