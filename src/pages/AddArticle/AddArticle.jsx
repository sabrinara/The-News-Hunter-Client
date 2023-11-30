import { useContext, useEffect, useState } from "react";
import HelmetKiller from "../Shared/HelmetKiller/HelmetKIller";
import Logo from "../../assets/news.png"
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const AddArticle = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [publishers, setPublishers] = useState([]);
    const [selectedPublisher, setSelectedPublisher] = useState("");

    useEffect(() => {
        // Fetch publishers from the server
        fetch("https://the-news-hunter-server-lac.vercel.app/publisher")
            .then(res => res.json())
            .then(data => setPublishers(data))
            .catch(error => console.error('Error fetching publishers:', error));
    }, []);

    const handleAddArticle = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const publisher_name = selectedPublisher.name;
        const publisher_image = selectedPublisher.image;
        const description = form.description.value;
        const tags = form.tags.value;
        const email = user?.email;
        const status = "pending";

        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);
        formData.append("publisher_name", publisher_name);
        formData.append("publisher_image", publisher_image);
        formData.append("description", description);
        formData.append("tags", tags);
        formData.append("status", status);
        formData.append("email", email);

        fetch("https://the-news-hunter-server-lac.vercel.app/news", {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Article Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool!',
                    });
                    navigate('/allarticles');
                }
            })
            .catch(error => {
                console.error('Error adding article:', error);
            });

        form.reset();
    }

    return (
        <div>
            <HelmetKiller pagename="Add Article"></HelmetKiller>

            <div className="hero  min-h-screen bg-base-200 mb-6"  >
                <div className="hero-content flex-col ">
                    <div className="text-center mt-8 mb-4">
                        <h1 className=" text-cyan-800 text-5xl  font-bold">Add Articles</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full md:w-[100rem] max-w-xl shadow-2xl">
                        <a href="#" className="flex items-center justify-center mt-8">
                            <img className="w-10 h-10 " src={Logo} alt="logo" />
                            <h1 className="text-2xl ">The News Hunter</h1>
                        </a>

                        <form className="card-body" onSubmit={handleAddArticle} >

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Article Title</span>
                                </label>
                                <input type="name" name='title' placeholder="Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Article Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
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
                                    <option value="" disabled selected>Select Publisher</option>
                                    {publishers.map(publisher => (
                                        <option key={publisher._id} value={JSON.stringify(publisher)}>
                                            {publisher.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                           

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publisher Image</span>
                                </label>
                                <input type="text" name="publisher_image" placeholder="Avatar" value={user?.photoURL} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tags</span>
                                </label>
                                <select name="tags" className="input input-bordered" required>
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
                                <button className="btn text-white font-semibold rounded bg-blue-500 hover:bg-blue-600 mt-4">Add Article</button>
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddArticle;