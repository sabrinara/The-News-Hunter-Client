import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Statistics = () => {
    const [statistics, setStatistics] = useState([])
    useEffect(() => {
        fetch('statistics.json')
            .then(res => res.json())
            .then((data) => setStatistics(data))
    }, [])
    return (
        <section className=" px-4 py-4 lg:py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4" data-aos="fade-up" data-aos-duration="1000">
                {
                    statistics.map(({ id, name, number, image }) => (
                        <div className="flex justify-center flex-col items-center gap-3 sm:p-8" key={id}>  
                            <div className="flex items-center bg-white w-80">
                                <img src={image} alt={name} className="h-44  w-56"></img>
                                <CountUp end={number} duration={5} enableScrollSpy className="text-2xl font-bold text-slate-600" />
                                <span className="text-2xl font-bold text-slate-600">+</span>
                            </div>
                            <p className="text-xl font-extrabold">{name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Statistics;