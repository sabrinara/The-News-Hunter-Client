import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleGoogleRegister = () => {
        setLoading(true);
        googleSignIn()
            .then((result) => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    image: result.user?.photoURL
                };

                // Check if the user already exists
                axios.get(`https://the-news-hunter-server-lac.vercel.app/users?email=${userInfo.email}`)
                    .then((response) => {
                        if (response.data.length === 0) {
                            // User does not exist, proceed with registration
                            axios.post('https://the-news-hunter-server-lac.vercel.app/users', userInfo)
                                .then(() => {
                                    toast.success('Successfully Registered');
                                    navigate('/');
                                })
                                .catch((error) => {
                                    console.error(error);
                                    toast.error('Registration failed. Please try again later.');
                                });
                        } else {
                            // User already exists, handle accordingly
                            toast.warning('User already exists. Redirecting to home page.');
                            navigate('/');
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        toast.error('An error occurred. Please try again later.');
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            })
            .catch((error) => {
                console.error(error);
                toast.error('Login failed. Please check your email and password.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <button
                type="button"
                onClick={handleGoogleRegister}
                className="btn bg-sky-200 text-sky-800 font-extrabold rounded-md flex justify-center items-center p-2 px-20 lg:px-52"
                disabled={loading}
            >
                {loading ? 'Processing...' : 'Google'}
                <FcGoogle className="w-8 h-8" />
            </button>
        </div>
    );
};

export default SocialLogin;
