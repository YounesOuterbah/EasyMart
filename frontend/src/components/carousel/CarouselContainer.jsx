import Carousel from "./Carousel";

export default function CarouselContainer() {
  return (
    <div className="py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">Products for you</h1>
        </div>
        <Carousel />
      </div>
    </div>
  );
}
