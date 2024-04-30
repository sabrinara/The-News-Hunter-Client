import { useContext } from "react";
import HelmetKiller from "../Shared/HelmetKiller/HelmetKIller";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

const MyArticles = () => {
    const { user } = useContext(AuthContext);
    const [articles, setArticles] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [declineReason, setDeclineReason] = useState('');
    const [selectedArticle, setSelectedArticle] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://the-news-hunter-server-lac.vercel.app/news')
            .then(response => {
                console.log('Response data:', response.data);
                console.log('User email:', user?.email);
    
                // Filter articles based on the user's email
                const filteredData = response.data.filter(article => article?.email === user?.email);
    
                setArticles(filteredData);
                console.log('Filtered articles:', filteredData);
            })
            .catch(error => {
                console.error('Error fetching news data:', error);
            });
    }, [user?.email]); // Make sure to include user?.email in the dependency array
    

    const handleDetailsClick = (article) => {
        navigate(`/details/${article._id}`);
        console.log('Details button clicked for article:', article);
    };

    const handleUpdateClick = (articleId) => {
        setSelectedArticle(articles.find(article => article._id === articleId));
        document.getElementById("my_modal_5").showModal();
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        try {
            const updatedArticle = {
                title: e.target.title.value,
                image: e.target.image.value,
                description: e.target.description.value,
                // ... add other fields as needed
            };

            // Send PATCH request to update the article
            await axios.put(`https://the-news-hunter-server-lac.vercel.app/news/${selectedArticle._id}`, updatedArticle);

            // Update the selectedArticle state
            setSelectedArticle(updatedArticle);
            // reset the form
            e.target.reset();
            // Close the modal after a successful update
            document.getElementById("my_modal_5").close();
            // Refresh articles data

        } catch (error) {
            console.error('Error updating article:', error);
        }
    };

    const handleDeleteClick = (article) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://the-news-hunter-server-lac.vercel.app/news/${article._id}`)
                    .then(response => {
                        if (response.data.deletedCount === 1) {
                            setArticles(prevArticles => prevArticles.filter(prevArticle => prevArticle._id !== article._id));
                            Swal.fire(
                                'Deleted!',
                                'Your article has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(error => console.error('Error deleting article:', error));
            }
        })
    };

    const handleDeclineClick = (reason) => {
        setModalOpen(true);
        setDeclineReason(reason);
    };

    return (
        <div>
            <HelmetKiller pagename="My Articles"></HelmetKiller>
            <h1 className="text-3xl md:text-5xl font-bold my-16 text-center text-sky-600 ">My Articles</h1>
            {articles?.length === 0 && <h1 className="text-3xl font-bold my-16 text-center">No Articles Found</h1>}
            <div className="flex justify-center items-center">
                <table>
                    <thead className="w-full border border-sky-400 ">
                        <tr className="bg-gray-100 ">
                            <th className="py-2 px-4 border-b">Serial No</th>
                            <th className="py-2 px-4 border-b">Article Title</th>
                            <th className="py-2 px-4 border-b">Details</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">isPremium</th>
                            <th className="py-2 px-4 border-b">Update</th>
                            <th className="py-2 px-4 border-b">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {articles?.map((article, index) => (
                            <tr key={index} className="border border-sky-400 text-sky-600">
                                <td className="py-2 px-4 border-b border-sky-400">{index + 1}</td>
                                <td className="py-2 px-8 border-b border-sky-400 mx-10">{article.title}</td>
                                <td>
                                    <button className="px-3 py-2 mx-10 bg-sky-600 hover:bg-sky-500 text-white rounded" onClick={() => handleDetailsClick(article)}> Details</button>
                                </td>
                                <td className="py-2 px-8 border-b border-sky-400 mx-10 ">{article.status}</td>
                                <td>{article.status === "premium" ? 'Yes' : 'No'}</td>
                                <td>
                                    <div>
                                        <button
                                            className="px-3 py-2 rounded mx-10 bg-orange-600 text-white hover:bg-orange-500"
                                            onClick={() => handleUpdateClick(article._id)}
                                        >
                                            Update
                                        </button>
                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">

                                                <div className="modal-action">
                                                    <form id="updateForm" method="dialog" onSubmit={handleUpdateSubmit}>
                                                        <div className="flex  gap-2 ">
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Article Title</span>
                                                                </label>
                                                                <input type="text" name="title" className="input input-bordered" placeholder="Article Title" defaultValue={selectedArticle?.title} required />
                                                            </div>
                                                            <div className="form-control ml-2">
                                                                <label className="label">
                                                                    <span className="label-text">Article Image</span>
                                                                </label>
                                                                <input type="text" name="image" className="input input-bordered" placeholder="Article Image" defaultValue={selectedArticle?.image} required />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Article Description</span>
                                                                </label>
                                                                <input type="text" name="description" className="input input-bordered" placeholder="Write Description" defaultValue={selectedArticle?.description} required />
                                                            </div>
                                                        </div>

                                                        <button className="px-3 py-2 rounded mt-4 w-full text-white bg-blue-400 hover:bg-blue-600">Update</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                </td>
                                <td>
                                    <button className="px-3 py-2 bg-red-500 hover:bg-red-700 text-white rounded mx-8" onClick={() => handleDeleteClick(article)}>Delete</button>
                                    {article.status === "declined" && (
                                        <button
                                            className="px-3 py-2 mx-2 bg-red-600 text-white rounded"
                                            onClick={() => handleDeclineClick(article.declineReason)}
                                        >
                                            Declined
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {modalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
                            <p>Decline Reason: {declineReason}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyArticles;
