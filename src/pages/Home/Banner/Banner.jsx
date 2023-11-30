import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
        <div className="">
           <div className="flex opacity-80 relative">
            <img className="h-[36rem] md:h-[48rem] md:w-1/3" src={"https://i.ibb.co/S30HgMX/banner1.jpg"} alt="" />
            <div  className=" hidden md:flex md:flex-col md:w-1/3">
            <img className="h-96" src={"https://i.ibb.co/WFHv2mt/banner2.jpg"} alt="" />
            <img className="h-96" src={"https://i.ibb.co/y6Th4Kp/banner4.jpg"} alt="" />
            </div>
            <img className="hidden md:flex md:w-1/3 md:h-[48rem]" src={"https://i.ibb.co/tXGVWTj/banner3.webp"} alt="" />
           </div>
           
            <div className="absolute top-2/3 left-1/2 -translate-x-1/2  transform  font-extrabold text-cyan-950 bg-white rounded p-6 font-serif  text-3xl md:text-6xl">
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