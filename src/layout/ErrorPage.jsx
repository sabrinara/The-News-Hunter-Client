import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="container w-1/2 mx-auto relative">
                <img src="https://i.ibb.co/dMSJRfs/error-page.jpg" alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
                    <h1 className="text-black  text-4xl ">Something went wrong!!!</h1>
                    <button className="btn btn-ghost hover:bg-blue-700 text-4xl text-black hover:text-white font-extrabold  rounded px-16 ">
                        <Link to="/">Go to Home</Link>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default ErrorPage;
