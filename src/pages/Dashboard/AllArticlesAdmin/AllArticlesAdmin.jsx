import { useState, useEffect } from "react";
import axios from "axios";
import "daisyui/dist/full.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllArticlesAdmin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://the-news-hunter-server-lac.vercel.app/news");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApproval =  (articleId, status) => {
   fetch(`https://the-news-hunter-server-lac.vercel.app/news/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: status,
    }),
    
   })
   .then(res => res.json())
   .then(data => {

      if (data.modifiedCount > 0) {
        const updatedArticles = products.map((article) =>
          article._id === articleId
            ? { ...article, status: status }
            : article
        );
        setProducts(updatedArticles);
      }
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Article updated successfully',
        showConfirmButton: false,
        timer: 1500
      })
   })
  };

  const handleDecline = (articleId) => {
    fetch(`https://the-news-hunter-server-lac.vercel.app/news/${articleId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "declined",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updatedArticles = products.map((article) =>
            article._id === articleId
              ? { ...article, status: "declined" }
              : article
          );
          setProducts(updatedArticles);
        }
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Article updated successfully',
          showConfirmButton: false,
          timer: 1500
        })
      })
  };

  const handleMakePremium = (articleId) => {
   fetch(`https://the-news-hunter-server-lac.vercel.app/news/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: "premium" || "approved",
    }),
   })
   .then(res => res.json())
   .then(data => {

      if (data.modifiedCount > 0) {
        const updatedArticles = products.map((article) =>
          article._id === articleId
            ? { ...article, status: "premium" || "approved" }
            : article
        );
        setProducts(updatedArticles);
      }
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Article updated successfully',
        showConfirmButton: false,
        timer: 1500
      })
   })
  };

  return (
    <div>
      <h2 className="text-5xl font-semibold my-10 text-center text-cyan-600">All Article</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-cyan-600">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Image</th>
              <th className="px-4 py-2 border border-gray-300">Title</th>
              <th className="px-4 py-2 border border-gray-300">Details</th>
              <th className="px-4 py-2 border border-gray-300">Publisher</th>

              <th className="px-4 py-2 border border-gray-300">Description</th>
             
              {/* <th className="px-4 py-2 border border-gray-300">Tags</th> */}
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((article) => (
              <tr key={article._id}>
                <td className="px-4 py-2 border border-gray-300">
                <Link to={`/details/${article._id}`} className="md:mt-2">
                  <img src={article.image} className="w-12 h-12 rounded-full" />
                  </Link>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <Link to={`/details/${article._id}`} className="md:mt-2">
                  {article.title}
                  </Link>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <button
                  
                  className="px-3 py-2 rounded-md text-white font-medium shadow-md bg-cyan-600 hover:bg-cyan-700"
                >
                     <Link to={`/details/${article._id}`} className="md:mt-2"> View</Link>
                 
                </button>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {article.publisher_name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {article.description}
                </td>
               
                {/* <td className="px-4 py-2 border border-gray-300">
                  {article.tags}
                </td> */}
                <td className="px-4 py-2 border border-gray-300">
                  {article.status}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        handleApproval(
                          article._id,
                          article.status === "approved" ? "pending" : article.status === "declined" ? "approved" : "approved"
                        )
                      }
                      className={`px-3 py-1 rounded-md text-white font-medium shadow-md transition-colors ${
                        article.status === "approved"
                        ? "bg-gray-600" : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      Approved
                    </button>
                    <button
                      onClick={() => handleDecline(article._id)}
                      className={`px-3 py-1 rounded-md text-white font-medium shadow-md transition-colors  ${
                        article.status === "declined"
                        ? "bg-red-500" : "bg-red-700 hover:bg-red-600"
                      }`}
                    >
                      Declined
                    </button>
                    <button
                      onClick={() => handleMakePremium(article._id)}
                      className={`px-3 py-1 rounded-md text-white font-medium shadow-md transition-colors  ${
                        article.status === "premium"
                        ? "bg-sky-500" : "bg-sky-800 hover:bg-sky-600"
                      }`}
                    >
                      Make Premium
                    </button>
                  {/* view details button */}
               
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArticlesAdmin;
