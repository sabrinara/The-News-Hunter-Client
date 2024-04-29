
import Con from "../../../public/about.json";
import Lottie from "lottie-react";

const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between mt-0">
            <div className="">
                <h1 className="text-3xl md:text-5xl font-bold text-cyan-600 mt-10 ">About Us</h1>
                <p className="text-sm  my-2 text-cyan-600">Get in touch with us. We will respond as soon as possible.</p>
                <p className="text-sm  my-2 text-cyan-600">Reach Out for any type of Inquiries, or Just to Say Hi!</p>
                <p className="text-sm  my-2 text-cyan-600">Send us a message!</p>
            </div>
             <div className="w-full md:w-2/3 ">
                    <Lottie animationData={Con} loop={true} />
                </div>

        </div>
    );
};

export default About;