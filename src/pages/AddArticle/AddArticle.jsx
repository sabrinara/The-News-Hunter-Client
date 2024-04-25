import { useContext, useEffect, useState } from "react";
import HelmetKiller from "../Shared/HelmetKiller/HelmetKIller";
import Logo from "../../assets/news.png";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const AddArticle = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [publishers, setPublishers] = useState([]);
    const [selectedPublisher, setSelectedPublisher] = useState({});

    useEffect(() => {
        fetchPublishers();
    }, []);

    const fetchPublishers = async () => {
        try {
            const response = await fetch("https://the-news-hunter-server-lac.vercel.app/publisher");
            const data = await response.json();
            setPublishers(data);
        } catch (error) {
            console.error('Error fetching publishers:', error);
        }
    }

    const handleAddArticle = async (event) => {
        event.preventDefault();
    
        const form = event.target;
        // const formData = new FormData(form);
    
        // Create an object to hold the publisher information
        const publisherObject = {
            name: selectedPublisher.publisher_name,
            image: selectedPublisher.publisher_image
        };
    
        // Convert the tags string to an array
        const tagsArray = form.tags.value.split(',');
    
        // Create the data object to be sent to the server
        const data = {
            title: form.title.value,
            image: form.image.value,
            publisher: publisherObject,
            description: form.description.value,
            tags: tagsArray,
            status: "pending",
            email: user?.email
        };
    
        try {
            const response = await fetch("https://the-news-hunter-server-lac.vercel.app/news", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            const responseData = await response.json();
            console.log(responseData);
            if (responseData.insertedId) {
                Swal.fire({
                    title: 'Success',
                    text: 'Article Added Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool!',
                });
                navigate('/allarticles');
            } else {
                throw new Error("Something went wrong.");
            }
        } catch (error) {
            console.error('Error:', error)
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    
        form.reset();
    };
    


    return (
        <div>
            <HelmetKiller pagename="Add Article" />

            <div className="hero min-h-screen bg-base-200 mb-6">
                <div className="hero-content flex-col">
                    <div className="text-center mt-8 mb-4">
                        <h1 className="text-cyan-800 text-5xl font-bold">Add Articles</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full md:w-[100rem] max-w-xl shadow-2xl">
                        <a href="#" className="flex items-center justify-center mt-8">
                            <img className="w-10 h-10" src={Logo} alt="logo" />
                            <h1 className="text-2xl">The News Hunter</h1>
                        </a>

                        <form className="card-body" onSubmit={handleAddArticle}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Article Title</span>
                                </label>
                                <input type="text" name='title' placeholder="Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Article Image</span>
                                </label>
                                <input type="file" name="image" className="input input-bordered py-2" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Article Publisher</span>
                                </label>
                                <select
                                    name="publisher"
                                    className="input input-bordered"
                                    onChange={(e) => setSelectedPublisher(JSON.parse(e.target.value))}
                                    required
                                >
                                    <option value="" defaultValue disabled selected> Select Publisher</option>
                                    {publishers.map(publisher => (
                                        <option key={publisher._id} value={JSON.stringify(publisher)}>
                                            {publisher.publisher_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publisher Image</span>
                                </label>
                                <input type="text" name="publisher_image" placeholder="Publisher Image" value={selectedPublisher?.publisher_image} className="input input-bordered" required readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tags</span>
                                </label>
                                <select name="tags" className="input input-bordered" required>
                                    <option value="" defaultValue disabled selected>Select Tags</option>
                                    <option value="general">General</option>
                                    <option value="business">Business</option>
                                    <option value="entertainment">Entertainment</option>
                                    <option value="health">Health</option>
                                    <option value="science">Science</option>
                                    <option value="sports">Sports</option>
                                    <option value="technology">Technology</option>
                                    <option value="politics">Politics</option>
                                    <option value="travel">Travel</option>
                                    <option value="food">Food</option>
                                    <option value="lifestyle">Lifestyle</option>
                                    <option value="music">Music</option>
                                    <option value="cryptocurrency">Cryptocurrency</option>
                                    <option value="crypto">Crypto</option>
                                    <option value="finance">Finance</option>
                                    <option value="investing">Investing</option>
                                    <option value="pollution">Pollution</option>
                                    <option value="climate">Climate</option>
                                    <option value="environment">Environment</option>
                                    <option value="war">War</option>
                                    <option value="exposions">Exposions</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name='description' placeholder="Write Short Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-4">
                                <button type="submit" className="py-2 text-white font-semibold rounded bg-sky-500 hover:bg-blue-600 mt-4"  >Add Article</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddArticle;
