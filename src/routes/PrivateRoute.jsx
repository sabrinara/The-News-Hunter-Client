import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { CircleLoader } from "react-spinners";

const PrivateRouters = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return (
            <CircleLoader
                className="text-center items-center py-40"
                color="rgb(2 132 199)"
                size={20}
                speedMultiplier={1}
            />
        )
    }


    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname} ></Navigate>

};

export default PrivateRouters;
