import { useEffect, useState } from "react";
const AllPublisher = () => {

    const [newPublisher, setNewPublisher] = useState([]);

    useEffect(() => {
        fetch('publisher.json')
            .then(res => res.json())
            .then(data => setNewPublisher(data));
    },[])

    return (
        <div className="my-20 mx-10">
            <h1 className="text-4xl md:text-7xl font-bold text-center mb-10">Our All Publisher</h1>
            <div className="grid grid-cols-2 md:grid-cols-3  gap-8" data-aos="fade-right" data-aos-duration="1000">
                    {newPublisher && newPublisher.map( ({ id, publisher_name, publisher_image }) => (
                        <div className="h-full flex items-center bg-white border p-4 rounded-lg hover:border-myprimary overflow-hidden" key={id}>
                            <img alt="team" className="w-20 h-20 bg-gray-100 object-cover object-center rounded-full mr-4 border-4 " src={publisher_image} />
                            <div className="">
                                <h2 className="text-gray-900 title-font font-medium">Name: {publisher_name}</h2>
                               
                            </div>
                        </div>)
                    )}
                </div>
        </div>
    );
};

export default AllPublisher;