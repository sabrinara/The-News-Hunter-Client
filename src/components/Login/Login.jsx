import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/news.png";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HelmetKiller from "../../pages/Shared/HelmetKiller/HelmetKIller";
import SocialLogin from "../SocialLogin/SocialLogin";
import Lottie from "lottie-react";
import Ex from "../../../public/login.json";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('Successfully Login');
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
                toast('Login failed. Please check your email and password.');
            });
    }

    return (
        <div>
            <HelmetKiller pagename="Login"></HelmetKiller>
            <div className=" py-8" >
                <div className="text-center mt-8 mb-4">
                    <div className="flex items-center justify-center my-8">
                        <img className="w-8 h-8 md:w-10 md:h-10 " src={Logo} alt="logo" />
                        <h1 className="text-5xl text-cyan-600 font-bold">The News <span className="text-5xl font-sans font-bold text-red-500">Hunter</span></h1>

                    </div>
                    <div className="flex flex-col md:flex-row mt-10 justify-center items-center gap-6">
                        <div className="hidden md:flex md:w-1/3 mt-16 md:mt-1">
                            <Lottie animationData={Ex} loop={true} />

                        </div>

                        <div className="w-full md:w-2/3 card flex-shrink-0 max-w-xl shadow-2xl">
                        {/* <h1 className="text-4xl font-bold text-cyan-600">Login Now</h1> */}
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-4">
                                <button className="p-3 bg-sky-200 text-sky-800 font-extrabold  rounded-md">Login</button>
                            </div>

                        </form>

                        <div className="flex flex-col items-center justify-center mb-6">
                                <p className="text-[15px]">Already have an account? Please<Link to="/register"><button className="p-1 text-sky-800 font-bold">Register</button></Link></p>
                                <div className="divider">Or, Continue With <SocialLogin></SocialLogin></div>
                                
                            </div>
                    </div>
                </div>
            </div>
            </div>
            <ToastContainer position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
        </div>
    );
};

export default Login;