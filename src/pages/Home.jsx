import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Statistics from "../components/Statistics/Statistics";
import AboutSection from "../components/AboutSection/AboutSection";
import Categories from "../components/Categories/Categories";
import Portfolio from "../components/Portfolio/Portfolio";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import BookingBanner from "../components/BookingBanner/BookingBanner";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <AboutSection />
      <Categories />
      <Portfolio />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <BookingBanner />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;