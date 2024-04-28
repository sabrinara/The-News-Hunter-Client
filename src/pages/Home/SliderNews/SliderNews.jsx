// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";



const SliderNews = () => {


    return (
        <div>
            <h1 className="text-5xl font-extrabold text-center text-sky-600 my-12 md:my-16">Top News</h1>
            <div className="bg-my-card">
                <div className="mx-auto sm:max-w-xl md:max-w-screen-xl md:px-18">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}

                        className="mySwiper"
                    >
                        <SwiperSlide className="h-72 rounded-lg">
                            <div className="flex justify-center items-center py-10">
                                <div className="mx-auto flex flex-col md:flex-row justify-between px-10 items-center">
                                    <div className="p-4 mb-8 md:w-1/2  md:px-20">
                                        <h1 className="text-4xl font-bold  mb-4 text-sky-600">Surging Stocks Propel Investors to New Heights</h1>
                                        <p className=" text-lg mb-6">The stock market witnessed a remarkable surge today, with key indices hitting record highs. Investors are riding the wave of optimism fueled by positive economic indicators and robust corporate earnings. Analysts predict sustained growth, but caution prevails as uncertainties in global markets persist.</p>
                                        <Link to='/allarticles' className='bg-gradient-to-r from-sky-700 to-sky-400 hover:from-sky-400 hover:to-sky-700 text-white font-semibold px-6 py-3 rounded-md mb-4'>Explore More</Link>
                                    </div>
                                    <div className="md:w-1/2">
                                        <img src={"https://i.ibb.co/hR4Rtg9/news2.jpg"} alt="Bussiness" className="h-56 md:h-[400px] rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-lg h-96">
                            <div className="flex justify-center items-center py-10">
                                <div className="mx-auto flex flex-col md:flex-row justify-between items-center px-10">
                                    <div className="p-4 mb-8 md:w-1/2 md:px-20">
                                        <h1 className="text-4xl font-bold  mb-4 text-sky-600">Tragedy Strikes: Massive Explosion Rocks Industrial Zone</h1>
                                        <p className=" text-lg mb-6">A devastating explosion rocked an industrial zone today, causing widespread damage and casualties. Emergency services are on the scene, working tirelessly to rescue survivors and control the aftermath. Authorities are investigating the cause of the explosion, as the community grapples with the shock of this unforeseen tragedy.</p>
                                        <Link to='/allarticles' className='bg-gradient-to-r from-sky-700 to-sky-400 hover:from-sky-400 hover:to-sky-700 text-white font-semibold px-6 py-3 rounded-md mb-4'>Explore More</Link>
                                    </div>
                                    <div className="md:w-1/2">
                                        <img src={"https://i.ibb.co/RvgPysn/News3.jpg"} alt="Explotion" className="h-56 md:h-[400px] rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-lg h-96">
                            <div className="flex justify-center items-center py-10">
                                <div className="mx-auto flex flex-col md:flex-row justify-between items-center px-10">
                                    <div className="p-4 mb-8 md:w-1/2 md:px-20">
                                        <h1 className="text-4xl font-bold  mb-4 text-sky-600">Oceans in Crisis: Alarming Rise in Sea Pollution Threatens Marine Life</h1>
                                        <p className=" text-lg mb-6">A concerning report reveals a sharp increase in sea pollution, posing a severe threat to marine ecosystems. Plastic waste, chemical runoff, and oil spills are endangering marine life and jeopardizing the delicate balance of our oceans. Environmentalists urge immediate action to curb pollution and protect the world's vital waterways.</p>
                                        <Link to='/allarticles' className='bg-gradient-to-r from-sky-700 to-sky-400 hover:from-sky-400 hover:to-sky-700 text-white font-semibold px-6 py-3 rounded-md mb-4 '>Explore More</Link>
                                    </div>
                                    <div className="md:w-1/2">
                                        <img src={"https://i.ibb.co/xFXqfQN/news4.jpg"} alt="Polution" className="h-56 md:h-[400px] rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>

    );
};

export default SliderNews;
