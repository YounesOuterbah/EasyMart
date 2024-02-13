import Carousel from "./components/carousel/Carousel";
import Explore from "./components/explore/Explore";
import Header from "./components/header/Header";
import TopBar from "./components/header/TopBar";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <Header />
      <TopBar />
      <Hero />
      <Explore />
      <Carousel />
    </>
  );
}

export default App;
