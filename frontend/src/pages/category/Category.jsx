import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import CategorySide from "./CategorySide";
import CategoryContent from "./CategoryContent";

export default function Category() {
  const categoryItems = ["dairy", "fruit", "vegetable", "bakery", "vegan", "meat"];
  const starRatings = [
    [AiFillStar, AiFillStar, AiFillStar, AiFillStar, AiFillStar],
    [AiFillStar, AiFillStar, AiFillStar, AiFillStar, AiOutlineStar],
    [AiFillStar, AiFillStar, AiFillStar, AiOutlineStar, AiOutlineStar],
    [AiFillStar, AiFillStar, AiOutlineStar, AiOutlineStar, AiOutlineStar],
    [AiFillStar, AiOutlineStar, AiOutlineStar, AiOutlineStar, AiOutlineStar],
  ];

  return (
    <div className="py-6">
      <div className="container flex">
        <CategorySide categoryItems={categoryItems} starRatings={starRatings} />
        <CategoryContent />
      </div>
    </div>
  );
}
