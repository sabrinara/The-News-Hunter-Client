import { useEffect, useState } from "react";
import HelmetKiller from "../../Shared/HelmetKiller/HelmetKIller";
// import AritcleCard from "../AritcleCard";
import { Link } from "react-router-dom";

const PremiumArticles = () => {
    const [articles, setArticles] = useState([]);



    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`https://the-news-hunter-server-lac.vercel.app/news`);
                const data = await response.json();



                // Filter articles with status 'premium'
                const filteredArticles = data.filter(article => article.status === 'premium');
                setArticles(filteredArticles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();

    }, []);

    return (
        <div>
            <HelmetKiller pagename="Premium Articles"></HelmetKiller>
            <div>
                <h1 className="text-6xl font-bold text-center my-16">Premium Articles</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 px-20 gap-4">
                    {articles.map((article, index) => (
                        <div key={index}>
                            <div className="card w-96 shadow-xl image-full">
                                <figure>
                                <img className="w-full h-[50vh] lg:h-[56vh] lg:max-w-none" src={article.image} alt={article.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title"></h2>
                                    <h1 className="card-title text-3xl">{article.title}.</h1>
                                    <div className="flex flex-col   justify-center items-center ">
                                        <img
                                            alt="publisher"
                                            src={article.publisher}
                                            className="relative inline-block h-[50px] w-[50px] rounded-full border-2 border-cyan-600 object-cover object-center"
                                        />
                                        {/* <h5 className="mb-4 font-sans text-lg font-semibold ">
                                            {article.publisher.name}
                                        </h5> */}
                                    </div>
                                    <div className="card-actions justify-center ">
                                        <Link to={`/details/${article._id}`} className="">
                                            <button
                                                className="px-4 py-2 rounded text-white hover:text-white bg-red-600 hover:bg-sky-500"
                                            >
                                               Details View 
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PremiumArticles;
