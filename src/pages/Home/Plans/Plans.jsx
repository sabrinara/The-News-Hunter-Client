

const Plans = () => {
    return (
       <div className="my-20">
        <h1 className="text-7xl mb-20 font-bold text-center">Our Plans</h1>
         <div className="grid grid-cols-1  lg:grid-cols-3 gap-10 mx-28 md:mx-44">
            <div className="card shadow-2xl shadow-black w-96 bg-gray-800 text-white">
                <div className="card-body border-2 rounded-xl  border-white">
                    <div className="mt-4">
                        <p className="bg-white text-cyan-900 font-bold mr-44 px-1 py-1">Free For 1 Month</p>
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
                        <button className="btn rounded-full bg-white text-cyan-700 px-28">Try for free 1 month </button>
                    </div>
                    <div className="text-center text-sm">
                        <p>Free for 1 month, then $10.99/month after. Offer only available if you haven't tried Premium before. <u>Terms apply.</u></p>
                    </div>
                </div>
            </div>
            <div className="card shadow-2xl shadow-black w-96 bg-gray-800 text-white">
                <div className="card-body border-2 rounded-xl  border-white">
                
                    <div className="flex mt-4 mb-20">
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
                        <button className="btn rounded-full bg-white text-cyan-700 px-28">Get Premium Duo </button>
                    </div>
                    <div className="text-center text-sm">
                        <p>For couples who reside at the same address. <u>Terms apply.</u></p>
                    </div>
                </div>
            </div>
            <div className="card shadow-2xl shadow-black w-96 bg-gray-800 text-white">
                <div className="card-body border-2 rounded-xl  border-white">
                
                    <div className="flex mt-4 mb-4">
                        <h2 className="card-title font-bold">Premium Family</h2>
                        <p className="text-lg font-bold text-right">$16.99 <br /><small className="text-sm">PER MONTH</small></p>
                    </div>
                    <div className="my-2">
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
                        <button className="btn rounded-full bg-white text-cyan-700 px-28">Get Premium Duo </button>
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