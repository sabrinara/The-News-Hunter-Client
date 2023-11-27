import { Link } from "react-router-dom";


const AritcleCard = ({ article }) => {

    const { _id,title, image, publisher, description, content, tags } = article || {}

    return (
        <div>
            
            <div className="card  lg:h-[56vh] lg:card-side bg-base-100 shadow-xl m-6">
                <figure className="w-full h-[50vh] lg:h-[56vh] lg:w-[50%]">
                    <img className="w-full h-[50vh] lg:h-[56vh] lg:max-w-none" src={image} /></figure>
                <div className="card-body lg:w-[50%]">
                    <h1 className="card-title text-3xl text-red-600">{title}.</h1>
                    <p className="text-sm overflow-hidden">{description}</p>
                   
                   
                    <div className="flex flex-col  lg:flex-row items-center justify-center lg:justify-start lg:gap-6">
                        <img
                            alt=""
                            src={publisher.image}
                            className="relative inline-block h-[70px] w-[70px] lg:h-[50px] lg:w-[50px] rounded-full border-2 border-cyan-600 object-cover object-center"
                        />
                        <h5 className="mb-4 font-sans text-lg font-semibold ">
                            {publisher.name}
                        </h5>
                    </div>
                    <div className="card-actions justify-center lg:justify-start">
                        <Link to={`/details/${_id}`}> <button className="lg:mt-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-500 text-white  hover:text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AritcleCard;