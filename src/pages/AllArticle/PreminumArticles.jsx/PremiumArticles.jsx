import { useEffect, useState } from "react";
import HelmetKiller from "../../Shared/HelmetKiller/HelmetKIller";
import AritcleCard from "../AritcleCard";
import { Link } from "react-router-dom";

const PremiumArticles = () => {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isSubscribed, setIsSubscribed] = useState(true); // Set the initial value based on the user's subscription status

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`https://the-news-hunter-server-lac.vercel.app/news`);
                const data = await response.json();

                if (data.length === 0) {
                    setHasMore(false);
                    return;
                }

                // Filter articles with status 'premium'
                const filteredArticles = data.filter(article => article.status === 'premium');
                setArticles(filteredArticles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();

    }, [page, searchTerm]);

    return (
        <div>
            <HelmetKiller pagename="Premium Articles"></HelmetKiller>
            <div>
                <h1 className="text-6xl font-bold text-center my-16">Premium Articles</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-4">
                    {articles.map((article, index) => (
                        <div key={index}>
                            <div className="card  lg:h-[56vh] lg:card-side bg-base-100 shadow-xl m-6">
                                <figure className="w-full h-[50vh] lg:h-[56vh] lg:w-[50%]">
                                    <img className="w-full h-[50vh] lg:h-[56vh] lg:max-w-none" src={article.image} alt={article.title} />
                                </figure>
                                <div className="card-body lg:w-[50%]">
                                    <h1 className="card-title text-3xl text-red-600">{article.title}.</h1>
                                    <p className="text-sm overflow-hidden">{article.description}</p>

                                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:gap-6">
                                        <img
                                            alt=""
                                            src={article.publisher.image}
                                            className="relative inline-block h-[70px] w-[70px] lg:h-[50px] lg:w-[50px] rounded-full border-2 border-cyan-600 object-cover object-center"
                                        />
                                        <h5 className="mb-4 font-sans text-lg font-semibold ">
                                            {article.publisher.name}
                                        </h5>
                                    </div>
                                    <div className="card-actions justify-center lg:justify-start">
                                        <Link to={`/details/${article._id}`} className="lg:mt-2">
                                            <button
                                                className="px-4 py-2 rounded text-white hover:text-white bg-sky-600 hover:bg-sky-500"
                                            >
                                                View Details
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
