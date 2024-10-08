import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
        <div className="">
           <div className="flex opacity-80 relative">
            <img className="h-[36rem] md:h-[48rem] md:w-1/3" src="./images/banner-1.jpg" alt="" />
            <div  className=" hidden md:flex md:flex-col md:w-1/3">
            <img className="h-96" src="./images/banner-3.jpg" alt="" />
            <img className="h-96" src="./images/banner-4.jpg" alt="" />
            </div>
            <img className="hidden md:flex md:w-1/3 md:h-[48rem]" src="./images/banner-2.jpg" alt="" />
           </div>
           
            <div className="absolute top-1/2 md:top-2/3 left-1/2 -translate-x-1/2  transform  font-extrabold text-sky-800 bg-white rounded p-4 md:p-6 font-serif  text-3xl md:text-5xl">
                <Typewriter
                    options={{
                        strings: [
                            
                            "We Gather..",
                            "We Analyze..",
                            "We Provide..",
                            "We Publish..",
                            "Best News All Around The World...",
                            "We Are The News Hunter!",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>

        </div>
    );
};

export default Banner;