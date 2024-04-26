import { Link } from "react-router-dom";


const Plans = () => {
    return (
       <div className="my-20">
        <h1 className="text-5xl mb-16 font-extrabold text-center text-sky-600 px-6">Subscription Plans</h1>
         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mx-10 md:mx-20">
            <div className="card shadow-2xl shadow-black  bg-gray-800 hover:bg-sky-100 text-white hover:text-sky-800">
                <div className="card-body border-2 rounded-xl  border-white">
                    <div className="mt-4">
                        <p className=" font-bold  px-1 py-1">Free For 1 Month</p>
                    </div>
                    <div className="flex my-3">
                        <h2 className="card-title font-bold">Premium <br />Indivitual</h2>
                        <p className="text-lg font-bold text-right">Free <br /><small className="text-sm">FOR 1 MONTH</small></p>
                    </div>
                    <div className="my-2">
                        <li>
                            <a>1 Premium account</a>
                        </li>
                        <li>
                            <a>Cancel anytime</a>
                        </li>
                        <li>
                            <a>15 hours/month of listening time from our audiobooks subscriber catalog</a>
                        </li>
                       
                    </div>

                    <div className="card-actions justify-center my-3">
                      <Link to="/subscriptions"  className="px-16 md:px-4 py-2 rounded-md bg-sky-200 border-2 border-sky-800 text-sky-800 font-bold">Get Try for free 1 month</Link> 
                    </div>
                    <div className="text-center text-sm">
                        <p>Free for 1 month, then $10.99/month after. Offer only available if you haven&#39;t tried Premium before. <u>Terms apply.</u></p>
                    </div>
                </div>
            </div>
            <div className="card shadow-2xl shadow-black  bg-gray-800 hover:bg-sky-100 text-white hover:text-sky-800">
                <div className="card-body border-2 rounded-xl  border-white">
                
                    <div className="flex mt-4 mb-10">
                        <h2 className="card-title font-bold">Premium Duo</h2>
                        <p className="text-lg font-bold text-right">$14.99 <br /><small className="text-sm">PER MONTH</small></p>
                    </div>
                    <div className="my-2">
                        <li>
                            <a>2 Premium accounts</a>
                        </li>
                        <li>
                            <a>Cancel anytime</a>
                        </li>
                        <li>
                            <a>15 hours/month of listening time from our audiobooks subscriber catalog(plan manager only)</a>
                        </li>
                       
                    </div>

                    <div className="card-actions justify-center my-3">
                    <Link to="/subscriptions"  className="px-16 md:px-8 py-2 rounded-md bg-sky-200 border-2 border-sky-800 text-sky-800 font-bold">Get Premium Duo</Link> 
                    
                    </div>
                    <div className="text-center text-sm">
                        <p>For couples who reside at the same address. <u>Terms apply.</u></p>
                    </div>
                </div>
            </div>
            <div className="card shadow-2xl shadow-black  bg-gray-800 hover:bg-sky-100 text-white hover:text-sky-800">
                <div className="card-body border-2 rounded-xl  border-white">
                
                    <div className="flex my--2">
                        <h2 className="card-title font-bold">Premium Family</h2>
                        <p className="text-lg font-bold text-right">$16.99 <br /><small className="text-sm">PER MONTH</small></p>
                    </div>
                    <div className="my-1">
                        <li>
                            <a>Up to 6 Premium or Kids accounts</a>
                        </li>
                        <li>
                            <a>Block explicit music</a>
                        </li>
                        <li>
                            <a>Access to spotify kids</a>
                        </li>
                        <li>
                            <a>Cancel anytime</a>
                        </li>
                        <li>
                            <a>15 hours/month of listening time from our audiobooks subscriber catalog(plan manager only)</a>
                        </li>
                       
                    </div>

                    <div className="card-actions justify-center my-3">
                    <Link to="/subscriptions"  className="px-20 md:px-6 py-2 rounded-md bg-sky-200 border-2 border-sky-800 text-sky-800 font-bold">Get Premium Family</Link> 
                    </div>
                    <div className="text-center text-sm">
                        <p>For up to 6 family members residing at the same address. <u>Terms apply.</u></p>
                    </div>
                </div>
            </div>
         
        </div>
       </div>
    );
};

export default Plans;