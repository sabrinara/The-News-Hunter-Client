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

    const handleGoogleRegister = async () => {
        setLoading(true);
        try {
            const result = await googleSignIn();
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                image: result.user?.photoURL,
                role : 'user' 
            };
            console.log(userInfo);

    
        const response = await axios.get(`https://the-news-hunter-server-lac.vercel.app/users?email=${userInfo.email}`);
        console.log(response)

        let isUserExist  = false;
        response?.data.forEach(user => {
            if(user.email === userInfo.email) {
                isUserExist = true;
            }

        });
            if (!isUserExist)  {
                await axios.post('https://the-news-hunter-server-lac.vercel.app/users', userInfo);
                toast.success('Successfully Registered');
            } else {
                toast.warning('User already exists. Please login.');
            }
            navigate('/');
        } catch (error) {
            console.error(error);
            toast.error('Login failed. Please check your email and password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center gap-4">
            <button
                type="button"
                onClick={handleGoogleRegister}
                className="bg-sky-200 text-sky-800 font-extrabold rounded flex justify-center items-center"
                disabled={loading}
            >
                {loading ? 'Processing...' : 'Google'}
                <FcGoogle className="w-8 h-8" />
            </button>
        </div>
    );
};

export default SocialLogin;
