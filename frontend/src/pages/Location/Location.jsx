import { useEffect, useState } from "react";

export default function Location({ toggle, setToggle }) {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((postion) => {
      setLatitude(postion.coords.latitude);
      setLongitude(postion.coords.longitude);
    });
  }, []);
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 z-50 bg-[#00000080] size-full"></div>
      <div className="fixed z-[90] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="text-6xl w-fit ml-auto cursor-pointer duration-300 hover:text-red-400"
          onClick={() => setToggle(true)}
        >
          x
        </div>
        <iframe
          title="Google Map"
          height="500"
          className="sm:w-[500px] md:w-[800px] xl:w-[1000px]"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=9&amp;&output=embed`}
        ></iframe>
      </div>
    </div>
  );
}
