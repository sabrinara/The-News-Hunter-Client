import HelmetKiller from "../Shared/HelmetKiller/HelmetKIller";


const Subscription = () => {
    return (
        <div >
            <HelmetKiller pagename="Subscription"></HelmetKiller>
            <div className="flex flex-col md:flex-row justify-center items-center my-20 md:mx-20 bg-white gap-10">
                <div className="md:mx-20 ">
                    <h1 className="text-4xl md:text-7xl my-6 font-bold text-red-700">Subscribe!</h1>
                    <p className="text-lg md:text-3xl text-emerald-900">Subscribe to explore more exclusive news.</p>
                </div>
                <div>
                    <img src={"https://i.ibb.co/C5Sg3cW/subscribe.png"} alt="" />

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-16">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={"https://i.ibb.co/hmdnWg8/family.png"} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Get Try For Free 1 Month !</h2>
                        <p>Subscribe now to explore all our features</p>
                        <div className="card-actions justify-start">
                            <button className="btn bg-red-700 text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="flex card card-side bg-base-100 shadow-xl">
                    <div>
                        <figure><img src={"https://i.ibb.co/n7zkXTJ/Duo.png"} alt="Movie" /></figure>
                    </div>

                    <div className="card-body">
                        <h2 className="card-title">Get Duo !</h2>
                        <p>Subscribe Our Premium Duo Package Now <br /> <span className="text-cyan-700">Pay: $14.99</span> </p>
                        <div className="card-actions justify-start">
                            <button className="btn bg-red-700 text-white">Pay</button>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={"https://i.ibb.co/cgK890w/month.png"} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Get Family !</h2>
                        <p>Subscribe Our Premium Family Package Now <br /> <span className="text-cyan-700">Pay: $16.99</span> </p>
                        <div className="card-actions justify-start">
                            <button className="btn bg-red-700 text-white">Pay</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subscription;