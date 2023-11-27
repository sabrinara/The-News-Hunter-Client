import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../layout/ErrorPage";
import Home from "../pages/Home/Home";
import AddArticle from "../pages/AddArticle/AddArticle";
import Subscription from "../pages/Subscription/Subscription";
import AllArticles from "../pages/AllArticle/AllArticles/AllArticles";
import MyArticles from "../pages/MyPages/MyArticles";
import Login from "../components/Login/Login";
import MyProfile from "../pages/MyPages/MyProfile";
import PremiumArticles from "../pages/AllArticle/PreminumArticles.jsx/PremiumArticles";
import Details from "../pages/AllArticle/ArticleDetails/Details";
import PrivateRouters from "./PrivateRoute";
import Register from "../components/Register/Register";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader : () => fetch('http://localhost:5000/news')
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path: "/addarticle",
                element: <PrivateRouters><AddArticle></AddArticle></PrivateRouters>
            },
            {
                path: "/allarticles",
                element: <AllArticles></AllArticles>
            },
            {
                path: "/details/:id",    
                element: <Details></Details>
            },
            {
                path: "/subscriptions",
                element: <PrivateRouters> <Subscription></Subscription></PrivateRouters>
            },
            {
                path: "/myarticles",
                element: <PrivateRouters><MyArticles></MyArticles></PrivateRouters>
            },
            {
                path: "/myprofile",
                element: <PrivateRouters><MyProfile></MyProfile></PrivateRouters>
            },
            {
                path: "/premium",
                element: <PrivateRouters> <PremiumArticles></PremiumArticles></PrivateRouters>
            },
          
        ]
    },
])

export default routes;