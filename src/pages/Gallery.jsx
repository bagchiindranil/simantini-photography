import Navbar from "../components/Navbar/Navbar";
import GalleryContent from "../components/Gallery/GalleryContent";
import BookingBanner from "../components/BookingBanner/BookingBanner";
import Footer from "../components/Footer/Footer";

function Gallery() {
  return (
    <>
      <Navbar />

      <GalleryContent />

      <BookingBanner />

      <Footer />
    </>
  );
}

export default Gallery;