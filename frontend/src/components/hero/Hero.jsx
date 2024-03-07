import { useState } from "react";
import heroBg from "/heroBg.png";
import heroFront from "/heroFront.png";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const subscribe = async () => {
    try {
      const res = await fetch("https://grocerystoreintern.onrender.com/api/email/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: email,
          subject: "Subscription Confirmation",
          htmlTemplate: "<p>Thank you for subscribing to Groceyish!</p>",
        }),
      });
      if (response.ok) {
        alert("Subscription successful!");
      } else {
        throw new Error("Error subscribing");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Error subscribing. Please try again later.");
    }
  };

  return (
    <div className="hero relative bg-[#c5ead9ab]">
      <img src={heroBg} className="h-full absolute top-0 left-0 object-cover opacity-90 -z-[2]" />
      <div className="container flex items-center justify-between h-full">
        <div className="flex flex-col justify-center z-10 text-center md:text-left">
          <h1 className="text-6xl w-full md:w-[80%] font-bold text-[--color-text] tracking-tight">
            Don’t miss our daily amazing deals.
          </h1>
          <p className="text-[--color-text-second] my-2">Save up to 60% off on your first order</p>
          <div className="flex m-auto md:m-0">
            <input
              type="email"
              className="border p-2 w-full md:w-[40%] outline-none bg-white"
              onChange={handleInputChange}
              value={email}
              placeholder="Enter your email address"
            />
            <button onClick={subscribe} className="bg-[--color-primary] text-white py-2 px-4">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroFront}
            alt="background fruits"
            className="absolute top-0 right-0 z-[1] hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
