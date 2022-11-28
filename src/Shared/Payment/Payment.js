import React, { useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import { POST, PUT } from "../../Utilities/RequestObjects";
import toast, { Toaster } from 'react-hot-toast';

const stripePromise = loadStripe(
  "pk_test_51M6vzDFctdEKfoSzIxc2TwjwZdKP5fzcUWdbOcSNUFsN3unu9UlBALx2A6ReLFc6rkBmjiJs2xO0Wj6Gvv5ISWJo00nmRz2EZy"
);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const location = useLocation();
  const {price,productID} = location?.state;
  const {user} = useContext(AuthContext);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://re-sale.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  return (
    <Elements stripe={stripePromise}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Pay now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control my-5">
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered my-5"
                  defaultValue={user?.displayName}
                  disabled
                />
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  defaultValue={user?.email}
                  disabled
                />
              </div>
              <CheckoutForm clientSecret={clientSecret} productID={productID}/>
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
};

const CheckoutForm = ({ clientSecret, productID }) => {
  const [error, setError] = useState("");
  const [method, setMethod] = useState("");
  const [processing, setProcessing] = useState(false);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setMethod("");
    } else {
      setMethod("success!! transitionID: " + paymentMethod.id);
      setError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.dispalyName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const paymentData = {
        paymentId: paymentIntent.id,
        currency: paymentIntent.currency,
        amount: paymentIntent.amount,
        paymentBy: paymentIntent.payment_method_types[0],
        paymentStatus: paymentIntent.status,
        transitionID:  paymentMethod.id,
        productID:productID,
        userUID:user?.uid,
        userEmail:user?.email,
        userName:user?.displayName
      };
      POST('/payment',paymentData)
      .then(res=>{
        if(res.data.acknowledged){
            toast.success('payment success');
            navigate('/');
        }
      })
      .catch(err=>{
        alert('something went wrong');
      })
    }
    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="border p-2 rounded"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "white",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="form-control mt-6">
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="btn btn-primary"
        >
          Pay
        </button>
      </div>
      {
        <p>
          {(error && <span className="text-error">{error}</span>) ||
            (method && <span className="text-success">{method}</span>)}
        </p>
      }
            <Toaster />
    </form>
  );
};

export default Payment;
