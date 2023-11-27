import HelmetKiller from "../Shared/HelmetKiller/HelmetKIller";
import AllPublisher from "./AllPublisher/AllPublisher";
import Banner from "./Banner/Banner";
import Plans from "./Plans/Plans";
import Statistics from "./Statistics/Statistics";



const Home = () => {
    return (
        <div>
            <HelmetKiller pagename = "Home"></HelmetKiller>
            <Banner></Banner>
            <AllPublisher></AllPublisher>
            <Statistics></Statistics>
            <Plans></Plans>

        </div>
    );
};

export default Home;