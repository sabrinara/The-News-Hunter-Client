import { useState, useEffect } from "react";
import axios from "axios";
import "daisyui/dist/full.css";
import Swal from "sweetalert2";

const AllArticlesAdmin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/news");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApproval =  (articleId, status) => {
   fetch(`http://localhost:5000/news/${articleId}`, {
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
    fetch(`http://localhost:5000/news/${articleId}`, {
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
   fetch(`http://localhost:5000/news/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: "premium",
    }),
   })
   .then(res => res.json())
   .then(data => {

      if (data.modifiedCount > 0) {
        const updatedArticles = products.map((article) =>
          article._id === articleId
            ? { ...article, status: "premium" }
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
      <h2 className="text-2xl font-semibold mb-4">Manage Articles</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Image</th>
              <th className="px-4 py-2 border border-gray-300">Title</th>
              <th className="px-4 py-2 border border-gray-300">Description</th>
             
              <th className="px-4 py-2 border border-gray-300">Tags</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((article) => (
              <tr key={article._id}>
                <td className="px-4 py-2 border border-gray-300">
                  <img src={article.image} className="w-12 h-12 rounded-full" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {article.title}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {article.description}
                </td>
               
                <td className="px-4 py-2 border border-gray-300">
                  {article.tags}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {article.status}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        handleApproval(
                          article._id,
                          article.status === "approved" ? "pending" : "approved"
                        )
                      }
                      className={`btn btn-sm ${
                        article.status === "approved"
                          ? "btn-error"
                          : "btn-success"
                      }`}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDecline(article._id)}
                      className="btn btn-sm btn-error"
                    >
                      Decline
                    </button>
                    <button
                      onClick={() => handleMakePremium(article._id)}
                      className="btn btn-sm btn-warning"
                    >
                      Make Premium
                    </button>
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
