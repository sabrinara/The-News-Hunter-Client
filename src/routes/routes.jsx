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
import DashBoard from "../layout/DashBoard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AllArticlesAdmin from "../pages/Dashboard/AllArticlesAdmin/AllArticlesAdmin";
import AddPublisher from "../pages/Dashboard/AddPublisher/AddPublisher";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";




const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://the-news-hunter-server-lac.vercel.app/news')
            },
            {
                path: "/contact",
                element:<Contact></Contact>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addarticle",
                element: <PrivateRouters><AddArticle></AddArticle></PrivateRouters>
            },
            {
                path: "/allarticles",
                element: <PrivateRouters><AllArticles></AllArticles></PrivateRouters>
            },
            {
                path: "/details/:id",
                element: <PrivateRouters><Details></Details></PrivateRouters>
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

            {
                path: "/dashboard",
                element: <PrivateRouters><DashBoard></DashBoard></PrivateRouters>,
            },
            
            {
                path: "/allusers",
                element: <PrivateRouters><AllUsers></AllUsers></PrivateRouters>
            },
            {
                path: "/allarticlesadmin",
                element: <PrivateRouters><AllArticlesAdmin></AllArticlesAdmin></PrivateRouters>
            },
            {
                path: "/addpublishers",
                element:<PrivateRouters> <AddPublisher></AddPublisher></PrivateRouters>
            },
          
        ]
    },

])

export default routes;