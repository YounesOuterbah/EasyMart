export default function CategorySide({ categoryItems, starRatings, setFilterItem, setfilterStar }) {
  return (
    <div className="w-[20%] hidden xl:block">
      <div>
        <h2 className="font-bold text-2xl">Category</h2>
        <form className="flex flex-col gap-2 mt-6">
          <div>
            <input
              type="radio"
              name="category_select"
              id="allItem"
              value="allItem"
              defaultChecked
              onChange={() => setFilterItem("all")}
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
