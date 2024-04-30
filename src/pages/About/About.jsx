
import { Link } from "react-router-dom";
import Con from "../../../public/about.json";
import Lottie from "lottie-react";
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const About = () => {
    const [statistics, setStatistics] = useState([])
    useEffect(() => {
        fetch('aboutstatistics.json')
            .then(res => res.json())
            .then((data) => setStatistics(data))
    }, [])
    return (
        <div className="flex flex-col  items-center justify-between mt-0">
            <div className="flex flex-col md:flex-row items-center justify-between mt-0">
                <div className="w-full md:w-1/3 mx-10 md:ml-20 mt-16 md:mt-0 ">
                    <h1 className="text-3xl md:text-xl font-semibold text-cyan-600 mb-6 text-center md:text-left md:mx-5">About Us</h1>
                    <h1 className="text-lg md:text-4xl font-bold text-cyan-600 mb-6 text-center md:text-left mx-10 md:mx-5">OUR DREAM IS TO PROVIDE YOU AUTHENTICATE NEWS ALL OVER THE WORLD.</h1>
                    {/* <h1 className="text-3xl md:text-5xl font-bold text-cyan-600 mb-6 text-center md:text-left">About Us</h1>
                <p className="text-sm  my-2 text-cyan-600">NewsQuest provide you authentic news and breaking news with high quality.</p>
                <p className="text-sm  my-2 text-cyan-600">Our Publishers are experts in their field.</p>
                <p className="text-sm  my-2 text-cyan-600">For more details please contact with us!</p> */}
                    <div className="text-center md:text-left">
                        <button className="text-sm  my-2 text-white bg-sky-500 px-4 py-2 rounded-full hover:bg-sky-700 md:mx-5"><Link to="/contact">Contact us</Link></button>
                    </div>
                </div>
                <div className="w-full md:w-2/3 ">
                    <Lottie animationData={Con} loop={true} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between mt-0 mx-10">
                <div className="w-full md:w-1/3 mx-10 md:ml-20">
                    <p className="text-xl  my-2 text-cyan-600">NewsQuest provide you authentic news and breaking news with high quality.</p>
                    <p className="text-xl  my-2 text-cyan-600">Our Publishers are experts in their field.</p>
                    <p className="text-xl  my-2 text-cyan-600">For more details please contact with us!</p>
                    <p className="text-xl  my-2 text-cyan-600"> We are here to help you.  </p>
                </div>
                <div className="w-full md:w-2/3">

                    <section className="">
                        {/* <h1 className="text-5xl font-extrabold text-center text-sky-600 mb-10"> Users Statistics</h1> */}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4" data-aos="fade-up" data-aos-duration="1000">
                            {
                                statistics.map(({ id, name, number, image }) => (
                                    <div className="flex justify-center flex-col items-center gap-3 sm:p-8 border-2 border-sky-600 rounded-2xl" key={id}>
                                        <div className="flex items-center ">
                                            {/* <img src={image} alt={name} className="h-44  w-44"></img> */}
                                            <CountUp end={number} duration={5} enableScrollSpy className="text-2xl font-bold text-sky-600 " />
                                            <span className="text-2xl font-bold text-sky-600">+</span>
                                        </div>
                                        <p className="text-xl font-extrabold text-sky-600">{name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default About;