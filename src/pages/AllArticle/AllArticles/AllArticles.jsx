// import { useEffect, useState } from "react";
// import HelmetKiller from "../../Shared/HelmetKiller/HelmetKIller";
// import AritcleCard from "../AritcleCard";

// const AllArticles = () => {

//     const [articles, setArticles] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         fetch('http://localhost:5000/news')
//             .then(res => res.json())
//             .then(data => setArticles(data))
//     }, []);

//     const filteredArticles = articles.filter(article =>
//         article.title && article.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
    
//     return (
//         <div>
//             <HelmetKiller pagename="All Articles"></HelmetKiller>
//             <div>
//                 <h1 className="text-6xl font-bold text-center my-16">All Articles</h1>
//                 <div className="flex justify-center items-center m-20 text-2xl">

//                     <input
//                         type="text"
//                         placeholder="Search by Article Name"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="px-20 py-10 border border-gray-300 rounded"
//                     />
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-4">
//                     {filteredArticles.map((article, index) => (
//                         <div key={index}>
//                             <AritcleCard article={article}></AritcleCard>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AllArticles;


import { useEffect, useState } from "react";
import HelmetKiller from "../../Shared/HelmetKiller/HelmetKIller";
import AritcleCard from "../AritcleCard";

const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isSubscribed, setIsSubscribed] = useState(true); // Set the initial value based on the user's subscription status

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`http://localhost:5000/news?page=${page}&search=${searchTerm}`);
                const data = await response.json();

                if (data.length === 0) {
                    setHasMore(false);
                    return;
                }

                setArticles(prevArticles => [...prevArticles, ...data]);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, searchTerm]);

    window.onscroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight &&
            hasMore
        ) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const filteredArticles = articles.filter(article =>
        article.title && article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <HelmetKiller pagename="All Articles"></HelmetKiller>
            <div>
                <h1 className="text-6xl font-bold text-center my-16">All Articles</h1>
                <div className="flex justify-center items-center m-20 text-2xl">
                    <input
                        type="text"
                        placeholder="Search by Article Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-20 py-10 border border-gray-300 rounded"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-4">
                    {filteredArticles.map((article, index) => (
                        <div key={index}>
                            <AritcleCard article={article} premium={article.isPremium} isSubscribed={isSubscribed}></AritcleCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllArticles;

