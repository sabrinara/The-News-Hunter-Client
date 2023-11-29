// import  { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";

// const PaymentPage = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     setLoading(true);

//     const cardElement = elements.getElement(CardElement);

//     const { token, error } = await stripe.createToken(cardElement);

//     if (error) {
//       console.error(error);
//       setLoading(false);
//     } else {
//       // Send the token to your server to charge the user
//       try {
//         const response = await axios.post("YOUR_BACKEND_PAYMENT_ENDPOINT", {
//           token: token.id,
//           amount: 1500, // Replace with the actual amount in cents
//           currency: "usd", // Replace with the actual currency
//         });

//         // Handle the response from your server (e.g., show a success message)
//         console.log(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Payment Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Card details
//           <CardElement />
//         </label>

//         <button type="submit" disabled={loading}>
//           {loading ? "Processing..." : "Pay"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PaymentPage;

import React from 'react';

const PaymentPage = () => {
    return (
        <div>
            <h1>Payment Page</h1>
        </div>
    );
};

export default PaymentPage;