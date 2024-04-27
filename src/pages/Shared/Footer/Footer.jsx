import { FaFacebook, FaInstagram, FaTwitter, } from "react-icons/fa";
import Logo from "../../../assets/news.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const Footer = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <footer className="w-full p-12">
            <hr className="my-8 border-sky-400 md:mx-12" />
            <div className=" ">
                <div className="flex flex-col md:flex-row  justify-between md:mx-12 items-center   ">
                    <div className="flex items-center my-4 md:my-0">
                        <img className="w-8 h-8 md:w-10 md:h-10" src={Logo} alt="" />
                        <h1 className="text-2xl md:text-4xl mx-2 font-serif font-semibold text-cyan-600 ">The News <span className=" font-sans font-bold text-red-500">Hunter</span></h1>
                    </div>
                    <div className="flex flex-col-reverse md:flex-col  justify-between">
                        <div className="flex gap-6 text-cyan-600 my-4 md:my-0 mx-6 justify-center ">
                            <a href="/about" className="underline underline-offset-4 ">About</a>
                            <a href="/contact" className="underline underline-offset-4">Contact</a>
                            {user?.email ?
                                <a onClick={handleLogOut} className="underline underline-offset-4">Logout</a>

                                :
                                <a href="/login" className="underline underline-offset-4">Login</a>
                            }
                        </div>
                        <div className="flex gap-6 text-cyan-500 mx-6 my-3 justify-center ">
                            <a href="https://www.facebook.com/" ><FaFacebook className="md:w-6 md:h-6"></FaFacebook></a>
                            <a href="https://www.instagram.com/"><FaInstagram className="md:w-6 md:h-6"></FaInstagram></a>
                            <a href="https://twitter.com/"><FaTwitter className="md:w-6 md:h-6"></FaTwitter></a>
                        </div>
                    </div>


                </div>
                {/* 
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav> */}
            </div>
            {/* <hr className="my-8 border-sky-400 lg:mx-24 " /> */}

            <p className="block text-cyan-600 text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              <span className="underline underline-offset-4">© 2024,The News Hunter <small> -Newspaper Website</small></span>  <br /> <small> @Sabrina Rashid</small>
            </p>
        </footer >


    );
};

export default Footer;