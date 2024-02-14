import Slider from "react-slick";
import { FiShoppingCart } from "react-icons/fi";

import { myProducts } from "../../products";

export default function Carousel() {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container py-6">
      <Slider {...settings}>
        {myProducts.map((product, id) => (
          <div key={id} className="!w-max-[270px] !h-[280px] px-2 rounded">
            <img
              src={product.filename}
              className="w-full h-full object-cover rounded-t-lg"
              alt={product.description}
            />
            <span className="text-[--color-text-second]">{product.type}</span>
            <h1 className="font-bold">{product.title}</h1>
            <h1>{product.rating} ⭐</h1>
            <div className="flex items-center justify-between">
              <div className="text-[--color-primary] font-bold">${product.price}</div>
              <button className="cursor-pointer flex mt-2 items-center gap-2 bg-[--color-primary] text-white px-4 py-1 rounded">
                <FiShoppingCart />
                Add
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
