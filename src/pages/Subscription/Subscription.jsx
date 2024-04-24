
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Subscription = () => {
  const [subscriptionPeriod, setSubscriptionPeriod] = useState(1);
  const [amount, setAmount] = useState(10);
  const [subscribed, setSubscribed] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer;
    if (subscribed && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [subscribed, countdown]);

  const handleSubscription = () => {
    setSubscribed(true);
    Swal.fire({
      icon: 'success',
      title: 'Subscribed',
      text: 'Thank you for subscribing!',
      confirmButtonText: 'OK',
    })

 
if(subscriptionPeriod === 1){
    setCountdown(subscriptionPeriod * 60); 
  
}else {
    setCountdown(subscriptionPeriod * 60 * 60);
}
   

   
    switch (subscriptionPeriod) {
      case 1:
        setAmount(0);
        break;
      case 5:
        setAmount(14.99);
        break;
      case 10:
        setAmount(16.99);
        break;
      default:
        setAmount(0);
    }
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-center items-center my-20 md:mx-20 bg-white gap-10">
               <div className="md:mx-20">
                   <h1 className="text-4xl md:text-7xl my-6 font-bold text-red-700">Subscribe!</h1>
                   <p className="text-lg md:text-3xl text-emerald-900">Subscribe to explore more exclusive news.</p>
               </div>
               <div>
                   <img src={"https://i.ibb.co/C5Sg3cW/subscribe.png"} alt="" />
               </div>
           </div>

      <div className="flex justify-center items-center">
        <div className="w-full md:w-1/2 max-w-md mx-auto">
          <label className="block text-sky-800  text-2xl font-bold mb-8">Select Subscription Time</label>
          <select
            value={subscriptionPeriod}
            onChange={(e) => setSubscriptionPeriod(Number(e.target.value))}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value={1}>1 Minute</option>
            <option value={5}>5 Days</option>
            <option value={10}>10 Days</option>
          </select>

          <button
            onClick={handleSubscription}
            className="mt-4 mx-40 bg-blue-500 text-white px-4 py-3 text-center rounded-md hover:bg-blue-600 focus:outline-none"
            disabled={subscribed}
          >
            {subscribed ? 'Subscribed' : 'Subscribe Now'}
          </button>

          {subscribed && (
            <div className="mt-4 text-center">
              <p className="text-xl font-semibold">Subscription Amount: ${amount}</p>
              <p className="text-xl font-semibold">Time Remaining: {Math.floor(countdown / 60)}:{countdown % 60}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
