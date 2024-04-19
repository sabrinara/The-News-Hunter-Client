import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Logo from "../../../assets/news.png"

const NavBar = ({ toggleTheme }) => {
    const { user, logOut, role } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.error(error);
            });
    }
    console.log("The is  ", role)
    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/allArticles">All Articles</NavLink>
            </li>
            {user?.email ?
                <>
                    <li>
                        <NavLink to="/addarticle">Add Article</NavLink>
                    </li>
                    <li>
                        <NavLink to="/premium">Premium Articles</NavLink>
                    </li>
                    <li>
                        <NavLink to="/subscriptions">Subscription</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myarticles">My Articles</NavLink>
                    </li>
                    {
                        role === "admin" &&
                        <>
                            <li>
                                <NavLink to="/dashboard">Dashboard</NavLink>
                            </li>
                        
                        </>
                    }
                    
                    <li>
                        <a onClick={handleLogOut}>Logout</a>
                    </li>
                </>
                :
                <>

                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>

                </>

            }
        </>
    );
    const profileNavLinks = (
        <>

            {
                user?.email ?

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">

                                <NavLink to="/myprofile"><img src={user.photoURL} /></NavLink>
                            </div>
                        </label>
                    </div>

                    :

                    <NavLink to="/login">Login</NavLink>

            }

        </>
    );

    return (
        <div className=" " >
            <div className="navbar  p-4  md:flex md:justify-between">
                <div className="navbar-start md:hidden">
                    <div className="dropdown md:hidden">
                        <label tabIndex={0} className=" md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 md:hidden">
                            {navLinks}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center ">
                    <img className="w-12 h-12 mr-2 mx-auto" src={Logo} alt="" />
                    <Link to="/" className="normal-case text-cyan-600 font-serif text-4xl lg:text-6xl">
                        The News <span className="text-red-600">Hunter</span></Link>
                </div>
                <div className="navbar-end ">
                    <div className="flex-none gap-2 md:hidden">
                        {profileNavLinks}
                    </div>
                </div>
                <label className="swap swap-rotate pl-2">

                    <input type="checkbox" onChange={toggleTheme} />

                    <svg className="swap-on fill-current w-6 h-6 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-6 h-6 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
            <div className="w-full h-[1px] bg-cyan-300 my-2"></div>
            <div className="justify-between items-center mx-10  hidden md:flex">
                <div className="flex justify-center ">
                    <ul className="menu menu-horizontal  px-1 gap-6">
                        {navLinks}
                    </ul>
                </div>
                <div className=" menu menu-horizontal px-1">
                    {profileNavLinks}
                </div>
            </div>
            <div className="w-full h-[1px] bg-cyan-300 my-2"></div>
        </div>
    );
};

export default NavBar;