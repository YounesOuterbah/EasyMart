import { useEffect, useState } from "react";

export default function Location() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((postion) => {
      setLatitude(postion.coords.latitude);
      setLongitude(postion.coords.longitude);
    });
  }, []);
  return (
    <div>
      <iframe
        title="Google Map"
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=9&amp;&output=embed`}
      ></iframe>
    </div>
  );
}
