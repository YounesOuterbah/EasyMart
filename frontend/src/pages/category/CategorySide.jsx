export default function CategorySide({
  categoryItems,
  starRatings,
  setFilterItem,
  setfilterStar,
  toggle,
  setToggle,
}) {
  return (
    <div
      className={`hidden xl:block xl:w-[20%] ${
        toggle && "fixed !block top-0 z-50 pl-4 pt-10 left-0 w-[60%] h-full bg-white"
      }`}
    >
      <div>
        <div className="font-bold text-2xl flex items-center justify-between">
          <h1>Category</h1>
          <h1
            onClick={() => setToggle((prev) => !prev)}
            className={`hidden cursor-pointer mr-4 font-normal ${toggle && "!block"}`}
          >
            X
          </h1>
        </div>
        <form className="flex flex-col gap-2 mt-6">
          <div>
            <input
              type="radio"
              name="category_select"
              id="allItem"
              value="allItem"
              defaultChecked
              onChange={() => setFilterItem("all")}
              onClick={() => setToggle(false)}
            />
            <label htmlFor="allItem" className="ml-2">
              All
            </label>
          </div>
          {categoryItems.map((x, id) => (
            <div key={id}>
              <input
                type="radio"
                name="category_select"
                id={x}
                value={x}
                onChange={() => setFilterItem(x)}
                onClick={() => setToggle(false)}
              />
              <label htmlFor={x} className="capitalize ml-2">
                {x}
              </label>
            </div>
          ))}
        </form>
      </div>
      <div>
        <h2 className="font-bold text-2xl mt-6">Rating</h2>
        <form className="flex flex-col gap-2 mt-6">
          <div>
            <input
              type="radio"
              name="rating_select"
              id="allstar"
              value="allstar"
              defaultChecked
              onChange={() => setfilterStar("all")}
              onClick={() => setToggle(false)}
            />
            <label htmlFor="allstar" className="ml-2">
              All
            </label>
          </div>
          {starRatings.map((rating, index) => (
            <div key={index} className="flex">
              <input
                type="radio"
                name="rating_select"
                id={`rating_${index}`}
                value={index}
                onChange={() => setfilterStar(index)}
                onClick={() => setToggle(false)}
              />
              <label htmlFor={`rating_${index}`} className="capitalize ml-2 flex text-yellow-400">
                {rating.map((Icon, i) => (
                  <Icon key={i} />
                ))}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
