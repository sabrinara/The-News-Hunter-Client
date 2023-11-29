import { Link, NavLink, Outlet } from "react-router-dom";
import HelmetKiller from "../pages/Shared/HelmetKiller/HelmetKIller";


const DashBoard = () => {
    return (
        <div>
            <HelmetKiller pagename="DashBoard"></HelmetKiller>
            <div className="drawer ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button ">Dashboard slider </label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        <li>
                           <NavLink to="/dashboard/allusers">All Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/allarticlesadmin">All Articles</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/addpublishers">Add Publisher</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
            <div>
                <h1>Statistics</h1>
               
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;