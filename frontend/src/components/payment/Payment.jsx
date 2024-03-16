import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

export default function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  async function paymentMethod() {
    const res = await fetch("https://grocerystoreintern.onrender.com/config");
    const { publishableKey } = await res.json();
    setStripePromise(loadStripe(publishableKey));
  }
  async function createPaymentMethod() {
    const res = await fetch("https://grocerystoreintern.onrender.com/create-payment-intent", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({}),
    });
    const { clientSecret } = await res.json();
    setClientSecret(clientSecret);
  }

  useEffect(() => {
    paymentMethod();
    createPaymentMethod();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-center text-2xl font-bold">Groceyish Payment Methods</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
