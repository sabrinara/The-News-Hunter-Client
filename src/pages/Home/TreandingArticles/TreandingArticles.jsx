// // import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import AritcleCard from "../../AllArticle/AritcleCard";

// const TreandingArticles = ( {article} ) => {
//     // const [article, setArticles] = useState([]);

//     // useEffect(() => {
//     //     fetch("http://localhost:5000/news")
//     //         .then((res) => res.json())
//     //         .then((data) => setArticles(data));
//     // })
 
//     return (
//         <div>
//             <hr className=" border-sky-400" />
//             <h1 className="text-6xl font-bold text-center my-16">Treanding Articles</h1>
//             <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 px-16">

//                 {
//                     article?.slice(0, 6).map((article, index) => (
//                         <div key={index}>
//                             <AritcleCard article={article}> </AritcleCard>
//                         </div>
//                     ))
//                 }

//             </div>
//             <div className="flex justify-center mt-16">
//                 <Link to="/allarticles">
//                     <button className="btn bg-sky-600 hover:bg-sky-500 text-white rounded">Veiw All Services</button>
//                 </Link>
//             </div>
           
//         </div>
//     );
// };

// export default TreandingArticles;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../../AllArticle/ArticleCard";

const TrendingArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/news")
            .then((res) => res.json())
            .then((data) => {
                const articlesWithTotalViews = data.map((article) => ({
                    ...article,
                    totalViews: article.views || 0,
                }));
                const sortedArticles = articlesWithTotalViews.sort((a, b) => b.totalViews - a.totalViews);
                setArticles(sortedArticles);
            });
    }, []);

    return (
        <div>
            <hr className="border-sky-400" />
            <h1 className="text-6xl font-bold text-center my-16">Trending Articles</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-16">
                {articles.slice(0, 6).map((article, index) => (
                    <div key={index}>
                        <ArticleCard article={article} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-16">
                <Link to="/allarticles">
                    <button className="btn bg-sky-600 hover:bg-sky-500 text-white rounded">View All Services</button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingArticles;
