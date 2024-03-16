import { useEffect, useState } from "react";

export default function Location({ open, setOpen }) {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <div className={`relative ${open && "hidden"}`}>
      <div className="fixed top-0 left-0 z-50 bg-[#00000080] size-full"></div>
      <div className="fixed z-[90] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          onClick={() => setOpen(true)}
          className="text-6xl w-fit ml-auto cursor-pointer duration-300 hover:text-red-400"
        >
          x
        </div>
        <input
          type="search"
          className="outline-none p-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value === "" ? (
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
        ) : (
          <iframe
            title="Google Map"
            height="500"
            className="sm:w-[500px] md:w-[800px] xl:w-[1000px]"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${value}&hl=en&z=9&amp;&output=embed`}
          ></iframe>
        )}
      </div>
    </div>
  );
}
