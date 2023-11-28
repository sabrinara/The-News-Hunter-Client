
import { useContext } from "react";
import HelmetKiller from "../Shared/HelmetKiller/HelmetKIller";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import { useEffect,} from "react";
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

        axios.get('http://localhost:5000/news')
            .then(response => {
                setArticles(response.data)
                // const filteredData = response.data.filter(
                //     (article) => article.email === user.email
                // );
                // setArticles(filteredData);
                // console.log(filteredData);

            })
    }, []);

    const handleDetailsClick = (article) => {
        navigate(`/details/${article._id}`);


        console.log('Details button clicked for article:', article);
    };

    const handleUpdateClick = (article) => {
        //handle update button
        const form = document.getElementById("updateForm");
        const formData = new FormData(form);

        fetch(`http://localhost:5000/news/${article._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: formData.get('title'),
                image: formData.get('image'),
                description: formData.get('description'),
                tags: formData.get('tags'),
                status: formData.get('status'),
            }),
        })
            .then(response => response.json())
            .then(data => {
                //update article state with updated data
                const updatedArticle = articles.map(a => a._id === data._id ? data : a);
                setArticles(updatedArticle);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Article updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Failed to update article',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        document.getElementById("my_modal_5").close();
        console.log('Update button clicked for article:', selectedArticle);
    }




    const handleDeleteClick = (article) => {
        // Handle delete button click
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
                axios.delete(`http://localhost:5000/news/${article._id}`)
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

    const handleDeclineReasonClick = (reason) => {
        // Handle decline reason button click
        setDeclineReason(reason);
        setModalOpen(true);
    };

    return (
        <div>
            <HelmetKiller pagename="My Articles"></HelmetKiller>
            <h1 className="text-7xl font-bold my-16 text-center">My Articles</h1>
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
                        {articles.map((article, index) => (
                            <tr key={index} className="border-b border-sky-400">
                                <td className="py-2 px-4 border-b border-sky-400">{index + 1}</td>
                                <td className="py-2 px-8 border-b border-sky-400 mx-10">{article.title}</td>
                                <td>
                                    <button className="btn mx-10 bg-emerald-600 hover:bg-emerald-500 text-white rounded" onClick={() => handleDetailsClick(article)}> Details</button>
                                </td>
                                <td className="py-2 px-8 border-b border-sky-400 mx- ">{article.status}</td>
                                <td>{article.isPremium ? 'Yes' : 'No'}</td>
                                <td>
                                    <div>
                                        <button
                                            className="btn rounded mx-10 bg-blue-600 text-white hover:bg-blue-500"
                                            onClick={() => document.getElementById("my_modal_5").showModal()}
                                        >
                                            Update
                                        </button>
                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">

                                                <div className="modal-action">
                                                    <form id="updateForm" method="dialog" onSubmit={(e) => {
                                                        e.preventDefault();
                                                        handleUpdateClick(article);
                                                    }}>
                                                        <div className="flex  gap-2 ">
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Article Title</span>
                                                                </label>
                                                                <input type="text" name="title" className="input input-bordered" placeholder="Article Title" defaultValue={article.title} required />
                                                            </div>
                                                            <div className="form-control ml-2">
                                                                <label className="label">
                                                                    <span className="label-text">Article Image</span>
                                                                </label>
                                                                <input type="text" name="image" className="input input-bordered" placeholder="Article Image" defaultValue={article.image} required />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            
                                                        </div>

                                                        <div>
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Article Description</span>
                                                                </label>
                                                                <input type="text" name="description" className="input input-bordered" placeholder="Write Description" defaultValue={article.description} required />
                                                            </div>
                                                        </div>

                                                       
                                                       
                                                        <button className="btn rounded mt-4 w-full text-white bg-blue-400 hover:bg-blue-600">Update</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>

                                </td>
                                <td>

                                    <button className="btn bg-red-500 hover:bg-red-700 text-white rounded mx-8" onClick={() => handleDeleteClick(article)}>Delete</button>
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
