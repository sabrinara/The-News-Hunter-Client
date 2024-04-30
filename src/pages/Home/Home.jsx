// import { useEffect, useState } from "react";
import HelmetKiller from "../Shared/HelmetKiller/HelmetKIller";
import AboutHome from "./AboutHome/AboutHome";
import AllPublisher from "./AllPublisher/AllPublisher";
import Banner from "./Banner/Banner";
import Plans from "./Plans/Plans";
import SliderNews from "./SliderNews/SliderNews";
import Sponsoprs from "./Sponsoprs/Sponsoprs";
import Statistics from "./Statistics/Statistics";
import TreandingArticles from "./TreandingArticles/TreandingArticles";

const Home = () => {

    return (
        <div>
            <HelmetKiller pagename="Home"></HelmetKiller>
            <Banner></Banner>
            <TreandingArticles></TreandingArticles>
            <AllPublisher></AllPublisher>
            <SliderNews></SliderNews>
            <Statistics></Statistics>
            <Plans></Plans>
            <Sponsoprs></Sponsoprs>
            <AboutHome></AboutHome>
        </div>
    );
};

export default Home;