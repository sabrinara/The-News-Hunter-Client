import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const AritcleCard = ({ article }) => {
    const { role } = useContext(AuthContext)
    const { _id, title, image, publisher, description, status ,tags } = article || {}
    // console.log(role)

    return (
        <div>

            <div className="flex flex-col md:flex-row md:h-[54vh] rounded bg-base-100 shadow-2xl justify-between items-center">
                <figure className="w-full h-[36vh] md:h-[54vh] md:w-1/2 ">
                    <img className="w-full h-[36vh] md:h-[54vh] md:max-w-none rounded" src={image} />
                </figure>
                <div className="pt-3 md:pt-5 px-5 md:w-1/2">
                    <h1 className="text-2xl md:text-3xl font-bold text-sky-600">{title.substring(0, 20)}</h1>
                    <p className="text-sm overflow-hidden">{description.substring(0, 120)}...</p>

                    <div className="flex flex-wrap gap-2 text-sm mt-2">

                        {tags?.slice(0, 3).map((tag, index) => (
                            <span
                                key={index}
                                className="bg-cyan-700 text-white px-1 py-0.5 rounded"
                            >
                                {tag}
                            </span>
                        ))}

                    </div>

                    <div className="flex flex-col  md:flex-row items-center justify-center md:justify-start md:gap-2">
                        <img
                            alt=""
                            src={publisher.image}
                            className="relative inline-block w-12 h-12 md:h-[50px] md:w-[50px] rounded-full border-2 border-cyan-600 object-cover object-center mt-2 md:my-2"
                        />
                        <h5 className="mb-2 font-sans text-md font-semibold ">
                            {publisher.name}
                        </h5>
                    </div>
                    <div className="flex justify-center md:justify-start text-sm  md:text-lg mb-4 md:mb-2">

                        <Link to={`/details/${_id}`} className="md:mt-2">
                            {role === "admin" ? (
                                <button
                                    className="px-2 py-1 mb-2 rounded text-white hover:text-white bg-sky-600 hover:bg-sky-500"
                                >
                                    View Details
                                </button>
                            ) : (
                                <button
                                    disabled={status === "premium"}
                                    className={`px-2 py-1 mb-2 rounded text-white hover:text-white ${status === "premium" ? "bg-gray-400" : "bg-sky-600 hover:bg-sky-500"
                                        }`}
                                >
                                    View Details
                                </button>
                            )}
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AritcleCard;