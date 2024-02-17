import Slider from "react-slick";
import { FiShoppingCart } from "react-icons/fi";
import { myProducts } from "../../products";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

export default function Carousel() {
  const dispatch = useDispatch();

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
        {myProducts.map((product) => (
          <div key={product.id} className=" h-[250px] px-2 rounded">
            <Link to={`/category/${product.id}`}>
              <img
                src={product.filename}
                className="w-full h-full object-cover rounded-t-lg"
                alt={product.description}
              />
            </Link>
            <div className="overflow-auto">
              <span className="text-[--color-text-second] capitalize">{product.type}</span>
              <h1 className="font-bold h-12">{product.title}</h1>
              <h1>{product.rating} ⭐</h1>
              <div className="flex items-center justify-between">
                <div className="text-[--color-primary] font-bold">${product.price}</div>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: product.id,
                        price: product.price,
                        title: product.title,
                        filename: product.filename,
                        qty: 1,
                      })
                    )
                  }
                  className="cursor-pointer flex mt-2 items-center gap-2 bg-[--color-primary] duration-300 hover:bg-green-800 text-white px-4 py-1 rounded"
                >
                  <FiShoppingCart />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
