import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const AritcleCard = ({ article }) => {
    const { role } = useContext(AuthContext)
    const { _id, title, image, publisher, description, status } = article || {}
    // console.log(role)

    return (
        <div>

            <div className="card  md:h-[56vh] md:card-side bg-base-100 shadow-xl  ">
                <figure className="w-full h-[50vh] md:h-[56vh] md:w-[50%]">
                    <img className="w-full h-[50vh] md:h-[56vh] md:max-w-none" src={image} /></figure>
                <div className="card-body md:w-[50%]">
                    <h1 className="card-title text-3xl text-red-600">{title}.</h1>
                    <p className="text-sm overflow-hidden">{description}</p>


                    <div className="flex flex-col  md:flex-row items-center justify-center md:justify-start md:gap-2">
                        <img
                            alt=""
                            src={publisher.image}
                            className="relative inline-block h-[70px] w-[70px] md:h-[50px] md:w-[50px] rounded-full border-2 border-cyan-600 object-cover object-center"
                        />
                        <h5 className="mb-4 font-sans text-md font-semibold ">
                            {publisher.name}
                        </h5>
                    </div>
                    <div className="card-actions justify-center md:justify-start">

                        <Link to={`/details/${_id}`} className="md:mt-2">
                            {role === "admin" ? (
                                <button
                                    className="px-4 py-2 rounded text-white hover:text-white bg-sky-600 hover:bg-sky-500"
                                >
                                    View Details
                                </button>
                            ) : (
                                <button
                                    disabled={status === "premium"}
                                    className={`px-4 py-2 rounded text-white hover:text-white ${status === "premium" ? "bg-gray-400" : "bg-sky-600 hover:bg-sky-500"
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