import { useEffect, useState } from "react";
import Marquee from 'react-fast-marquee';
const AllPublisher = () => {
    const [newPublisher, setNewPublisher] = useState([]);

    useEffect(() => {
        fetch("https://the-news-hunter-server-lac.vercel.app/publisher")
            .then((res) => res.json())
            .then((data) => setNewPublisher(data));
    }, []);

    return (
        <div className="my-20 mx-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-sky-600 mb-10">Publishers</h1>
            <Marquee gradient={false} speed={100}>
            {/* <div className="grid grid-cols-1 md:grid-cols-3  gap-8" data-aos="fade-right" data-aos-duration="1000"> */}
                {newPublisher && newPublisher.map(({ _id, publisher_image, publisher_name }) => (
                        <div
                            className="h-full flex items-center border border-sky-600  p-4 rounded mx-2"
                            key={_id}
                        >
                            <img
                                alt="team"
                                className="w-20 h-20 bg-gray-100 object-cover object-center rounded-full mr-4 border-4"
                                src={publisher_image}
                            />
                            <div className="">
                                <h2 className=" title-font font-medium">Name:<span className="text-red-500">  {publisher_name}</span> </h2>
                            </div>
                        </div>
                    ))}
            {/* </div> */}
            </Marquee>
        </div>
    );
};

export default AllPublisher;
