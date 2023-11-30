// import { useEffect, useState } from "react";
import HelmetKiller from "../Shared/HelmetKiller/HelmetKIller";
import AllPublisher from "./AllPublisher/AllPublisher";
import Banner from "./Banner/Banner";
import Plans from "./Plans/Plans";
import SliderNews from "./SliderNews/SliderNews";
import Statistics from "./Statistics/Statistics";
// import TreandingArticles from "./TreandingArticles/TreandingArticles";
import TreandingArticles from "./TreandingArticles/TreandingArticles";



const Home = () => {
    // const [article, setArticle] = useState([]);

    // useEffect(() => {
    //     fetch('https://the-news-hunter-server-lac.vercel.app/news')
    //         .then(res => res.json())
    //         .then(data => setArticle(data))
    //         .catch(error => console.error(error));
    // })

    return (
        <div>
            <HelmetKiller pagename = "Home"></HelmetKiller>
            <Banner></Banner>
            {/* <TreandingArticles article={article}></TreandingArticles>
             */}
             <TreandingArticles></TreandingArticles>
            <AllPublisher></AllPublisher>
            <SliderNews></SliderNews>
            <Statistics></Statistics>
            <Plans></Plans>

        </div>
    );
};

export default Home;