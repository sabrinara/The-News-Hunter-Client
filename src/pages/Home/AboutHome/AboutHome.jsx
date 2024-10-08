import { Link } from "react-router-dom";
import Con from "../../../../public/news.json";
import Lottie from "lottie-react";

const AboutHome = () => {
    return (
        <div>
           <div className="flex flex-col md:flex-row items-center justify-between mt-0">
                <div className="w-full md:w-1/3 mx-10 md:ml-20 mt-16 md:mt-0 ">
                    {/* <h1 className="text-3xl md:text-xl font-semibold text-cyan-600 mb-6 text-center md:text-left md:mx-5">About Us</h1> */}
                    <h1 className="text-lg md:text-3xl font-bold text-cyan-600 mb-6 text-center md:text-left mx-10 md:mx-5">The News Hunter provide you authentic news and breaking news from all over the world...</h1>
                   
                    <div className="text-center md:text-left">
                        <button className="text-sm md:text-lg font-bold my-2 text-white bg-sky-500 px-4 py-2 rounded-full hover:bg-sky-700 md:mx-5"><Link to="/about">About us</Link></button>
                    </div>
                </div>
                <div className="w-full md:w-2/3 ">
                    <Lottie animationData={Con} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default AboutHome;