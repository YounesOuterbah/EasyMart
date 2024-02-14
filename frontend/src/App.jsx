import Banner from "./components/banner/Banner";
import CarouselContainer from "./components/carousel/CarouselContainer";
import Explore from "./components/explore/Explore";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TopBar from "./components/header/TopBar";
import Hero from "./components/hero/Hero";
import { FaLongArrowAltRight } from "react-icons/fa";

function App() {
  return (
    <>
      <Header />
      <TopBar />
      <Hero />
      <Explore />
      <CarouselContainer />
      <div className="py-6">
        <div className="container flex gap-6 flex-col lg:flex-row">
          <Banner
            bgImage="/heroBg.png"
            overlayColor="#fff5e1be"
            title="Free delivery over $50"
            subtitle="Free delivery"
            buttonText="Shop Now"
            buttonIcon={<FaLongArrowAltRight />}
            offerImage="/Offer1-img.png"
          />
          <Banner
            bgImage="/heroBg.png"
            overlayColor="#D2EFE1be"
            title="Organic Food"
            subtitle="60% off"
            buttonText="Order Now"
            buttonIcon={<FaLongArrowAltRight />}
            offerImage="/heroFront.png"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
