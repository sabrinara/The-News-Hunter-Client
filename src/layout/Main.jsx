import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import { useState } from "react";


const Main = () => {
    const location = useLocation();
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <div data-theme={isDarkTheme ? "night" : "light"}>
            {noHeaderFooter || <NavBar toggleTheme={toggleTheme}></NavBar>}
            {/* Use Outlet directly for the root layout */}
            <Outlet />
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;
