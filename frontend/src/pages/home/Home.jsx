import Banner from "../../components/banner/Banner";
import CarouselContainer from "../../components/carousel/CarouselContainer";
import Explore from "../../components/explore/Explore";
import Hero from "../../components/hero/Hero";
import { FaLongArrowAltRight } from "react-icons/fa";
import TopBar from "../../components/header/TopBar";
import Location from "../Location/Location";
import { useDispatch, useSelector } from "react-redux";
import { setLocationAllowed } from "../../redux/slices/locationSlice";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { isLocationAllowed } = useSelector((state) => state.location);

  useEffect(() => {
    if (isLocationAllowed === null) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(setLocationAllowed(true));
          setToggle(false);
        },
        () => {
          dispatch(setLocationAllowed(false));
        }
      );
    }
  }, [isLocationAllowed, dispatch]);

  return (
    <div>
      {!toggle && isLocationAllowed === null && <Location toggle={toggle} setToggle={setToggle} />}
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
    </div>
  );
}
