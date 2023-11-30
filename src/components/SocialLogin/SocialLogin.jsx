import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleGoogleRegister = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    image: result.user?.photoURL
                }
                axios.post('https://the-news-hunter-server-lac.vercel.app/users', userInfo)
                    .then(res => {
                        console.log(res);
                        toast.success('Successfully Login');
                        navigate('/');
                    })


            })
            .catch(error => {
                console.error(error);
                toast('Login failed. Please check your email and password.');
            });
    }
    return (
        <div>
            <button
                type="button"
                onClick={handleGoogleRegister}
                className="btn bg-sky-200 text-sky-800 font-extrabold   rounded-md flex justify-center items-center p-2 px-20 lg:px-52 "
            >
                Google
                <FcGoogle className="w-8 h-8" />
            </button>
        </div>
    );
};

export default SocialLogin;