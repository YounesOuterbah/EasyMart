export default function CategorySide({ categoryItems, starRatings }) {
  return (
    <div className="w-[20%] hidden xl:block">
      <div>
        <h2 className="font-bold text-2xl">Category</h2>
        <form className="flex flex-col gap-2 mt-6">
          <div>
            <input type="radio" name="category_select" id="all" value="all" defaultChecked />
            <label htmlFor="all" className="ml-2">
              All
            </label>
          </div>
          {categoryItems.map((x, id) => (
            <div key={id}>
              <input type="radio" name="category_select" id={x} value={x} />
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
          {starRatings.map((rating, index) => (
            <div key={index} className="flex">
              <input type="radio" name="rating_select" id={`rating_${index}`} value={index} />
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
