import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/news.png";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HelmetKiller from "../../pages/Shared/HelmetKiller/HelmetKIller";
import axios from "axios";
import SocialLogin from "../SocialLogin/SocialLogin";
import Lottie from "lottie-react";
import Ex from "../../../public/register.json";
import { TbHomeShare } from "react-icons/tb";
const Register = () => {

    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const image = form.get('image');
        const email = form.get('email');
        const password = form.get('password');


        try {
            if (password.length < 6) {
                throw new Error('Password must be at least 6 characters or longer');
            } else if (!/[A-Z]/.test(password)) {
                throw new Error('Password must contain at least one uppercase letter.');
            } else if (!/^(?=.*[A-Z])(?=.*\W).*$/g.test(password)) {
                throw new Error('Password must contain at least one special character.');
            } else if (!/[0-9]/.test(password)) {
                throw new Error('A numerical value is required.');
            }

            await createUser(email, password);
            await handleUpdateProfile(name, image);
            //create user entry into the database
            const userInfo = {
                name: name,
                email: email,
                image: image,
                role: '',
            }
            axios.post('https://the-news-hunter-server-lac.vercel.app/users', userInfo)
                .then(res => {
                    console.log(res);
                    toast.success('Successfully Registered');
                })

            navigate('/');
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div >
            <HelmetKiller pagename="Register"></HelmetKiller>
            <div className=" py-8" >
                <div className="text-center mt-8 mb-4">
                    <div className="flex items-center justify-center my-8">
                        <img className="w-8 h-8 md:w-10 md:h-10 " src={Logo} alt="logo" />
                        <h1 className="text-3xl md:text-5xl text-cyan-600 font-bold">The News <span className="text-3xl md:text-5xl font-sans font-bold text-red-500">Hunter</span></h1>

                    </div>
                    <div className="flex  justify-start ml-8 md:ml-0 md:justify-end md:mr-36">
                        <Link to="/" className="text-sky-500 font-bold text-3xl md:text-5xl hover:text-sky-600 " >
                            <TbHomeShare />
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row  justify-center items-center gap-6">
                        <div className="hidden md:flex md:w-1/3 mt-16 ">
                            <Lottie animationData={Ex} loop={true} />

                        </div>

                        <div className="w-full md:w-2/3 card flex-shrink-0 max-w-xl shadow-2xl">

                            {/* <h1 className="text-4xl font-bold text-cyan-600">Register Now</h1> */}

                            <form className="card-body" onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Write Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Profile Picture</span>
                                    </label>
                                    <input type="text" name="image" placeholder="PhotoUrl" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Write Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Write Your Password" className="input input-bordered mb-3" required />

                                </div>
                                <div className="form-control mt-1">
                                    <button className="p-3  bg-sky-200 text-sky-800 font-extrabold  rounded-md">Register</button>
                                </div>

                            </form>

                            <div className="flex flex-col items-center justify-center mb-6">
                                <p className="text-[15px]">Already have an account? Please<Link to="/login"><button className="p-1 text-sky-700 font-bold">Login</button></Link></p>
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

export default Register;