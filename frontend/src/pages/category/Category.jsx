import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import CategorySide from "./CategorySide";
import CategoryContent from "./CategoryContent";
import { myProducts } from "../../products";
import { useState } from "react";

export default function Category() {
  const categoryItems = ["dairy", "fruit", "vegetable", "bakery", "vegan", "meat"];
  const starRatings = [
    [AiOutlineStar, AiOutlineStar, AiOutlineStar, AiOutlineStar, AiOutlineStar],
    [AiFillStar, AiOutlineStar, AiOutlineStar, AiOutlineStar, AiOutlineStar],
    [AiFillStar, AiFillStar, AiOutlineStar, AiOutlineStar, AiOutlineStar],
    [AiFillStar, AiFillStar, AiFillStar, AiOutlineStar, AiOutlineStar],
    [AiFillStar, AiFillStar, AiFillStar, AiFillStar, AiOutlineStar],
    [AiFillStar, AiFillStar, AiFillStar, AiFillStar, AiFillStar],
  ];

  const [filterItem, setFilterItem] = useState("all");

  const filterdProducts = myProducts.filter((product) =>
    filterItem === "dairy"
      ? product.type === "dairy"
      : filterItem === "fruit"
      ? product.type === "fruit"
      : filterItem === "vegetable"
      ? product.type === "vegetable"
      : filterItem === "bakery"
      ? product.type === "bakery"
      : filterItem === "vegan"
      ? product.type === "vegan"
      : filterItem === "meat"
      ? product.type === "meat"
      : product
  );

  const [filterStar, setfilterStar] = useState("all");

  const filterdStarts = filterdProducts.filter((productStar) =>
    filterStar == 0
      ? productStar.rating == 0
      : filterStar == 1
      ? productStar.rating == 1
      : filterStar == 2
      ? productStar.rating == 2
      : filterStar == 3
      ? productStar.rating == 3
      : filterStar == 4
      ? productStar.rating == 4
      : filterStar == 5
      ? productStar.rating == 5
      : filterStar
  );

  const [sortItems, setSortItems] = useState("random");

  const sortedItems =
    sortItems === "lth"
      ? filterdStarts.sort((a, b) => a.price - b.price)
      : sortItems === "htl"
      ? filterdStarts.sort((a, b) => b.price - a.price)
      : filterdStarts;

  const [toggle, setToggle] = useState(false);

  return (
    <div className="py-6">
      <div className="container flex relative">
        <div className={`${toggle && "bg-[#00000091] top-0 h-full w-full fixed"}`}></div>
        <CategorySide
          setFilterItem={setFilterItem}
          setfilterStar={setfilterStar}
          categoryItems={categoryItems}
          starRatings={starRatings}
          toggle={toggle}
          setToggle={setToggle}
        />
        <CategoryContent
          filterdAllItems={sortedItems}
          setSortItems={setSortItems}
          sortItems={sortItems}
          setToggle={setToggle}
          toggle={toggle}
        />
      </div>
    </div>
  );
}
