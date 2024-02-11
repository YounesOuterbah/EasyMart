import heroBg from "/heroBg.png";
import heroFront from "/heroFront.png";

export default function Hero() {
  return (
    <div className="hero relative bg-[#c5ead9ab]">
      <img src={heroBg} className="h-full absolute top-0 left-0 opacity-90 -z-[1]" />
      <div className="container flex items-center justify-between h-full">
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl w-[80%] font-bold text-[--color-text] tracking-tight">
            Don’t miss our daily amazing deals.
          </h1>
          <p className="text-[--color-text-second] my-2">Save up to 60% off on your first order</p>
          <div className="flex">
            <input
              type="search"
              className="border p-2 w-[40%] outline-none bg-white"
              placeholder="Enter your email address"
            />
            <button className="bg-[--color-primary] text-white py-2 px-4">Search</button>
          </div>
        </div>
        <div>
          <img src={heroFront} alt="background fruits" className="absolute top-0 right-0" />
        </div>
      </div>
    </div>
  );
}
