import { useContext, useState } from "react";
import HelmetKiller from "../Shared/HelmetKiller/HelmetKIller";
import Logo from "../../assets/news.png";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Select from 'react-select';
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddArticle = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState("");

    // const [publishers, setPublishers] = useState([]);
    // const [selectedPublisher, setSelectedPublisher] = useState({});
    const [selectedTags, setSelectedTags] = useState([]);
    const tagOptions = [
        { value: "Sports", label: "Sports" },
        { value: "Business", label: "Business" },
        { value: "Technology", label: "Technology" },
        { value: "Entertainment", label: "Entertainment" },
        { value: "Health", label: "Health" },
        { value: "Science", label: "Science" },
        { value: "General", label: "General" },
        { value: "Fashion", label: "Fashion" },
        { value: "Travel", label: "Travel" },
        { value: "Food", label: "Food" },
        { value: "Music", label: "Music" },
        { value: "Automobile", label: "Automobile" },
        { value: "Education", label: "Education" },
        { value: "Gaming", label: "Gaming" },
        { value: "Movie", label: "Movie" },
        { value: "Religion", label: "Religion" },
        { value: "Animal", label: "Animal" },
        { value: "War", label: "War" },
        { value: "Politic", label: "Politic" },
    ];

    // useEffect(() => {
    //     fetchPublishers();
    // }, []);

    // const fetchPublishers = async () => {
    //     try {
    //         const response = await fetch("https://the-news-hunter-server-lac.vercel.app/publisher");
    //         const data = await response.json();
    //         setPublishers(data);
    //     } catch (error) {
    //         console.error('Error fetching publishers:', error);
    //     }
    // };

    const handleAddArticle = async (event) => {
        event.preventDefault();
    
        const form = event.target;
        const imageFile = new FormData();
        imageFile.append("image", event.target.image.files[0]);
    
        try {
            const { data } = await axios.post(image_upload_api, imageFile);
            const image_url = data.data.display_url;
            setImageUrl(image_url);
            console.log(data);
    
            const postData = { // Rename the variable to postData
                title: form.title.value,
                image: image_url,
                publisher_name: user?.displayName,
                publisher_image: user?.photoURL,
                description: form.description.value,
                tags: selectedTags.map(tag => tag.value),
                status: "pending",
                email: user?.email
            };
    
            try {
                const response = await fetch("https://the-news-hunter-server-lac.vercel.app/news", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(postData), // Use postData here
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
        } catch (error) {
            console.error('Error:', error)
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };
    


    return (
        <div>
            <HelmetKiller pagename="Add Article" />

            <div className="hero min-h-screen bg-base-200 mb-6">
                <div className="hero-content flex-col">
                    <div className="text-center mt-8 mb-4">
                        <h1 className="text-sky-600 text-5xl font-bold">Add Articles</h1>
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
                                <input type="text" name='title' placeholder="Title" className="input input-bordered" defaultValue="" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Article Image</span>
                                </label>
                                <input type="file" name="image" className="input input-bordered py-2" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publisher Name</span>
                                </label>
                                <input type="text" name="publisher_name" defaultValue={user?.displayName} className="input input-bordered py-2" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publisher Email</span>
                                </label>
                                <input type="text" name="email" defaultValue={user?.email} className="input input-bordered py-2" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Publisher Image</span>
                                </label>
                                <input type="text" name="publisher_image" placeholder="Publisher Image" defaultValue={user?.photoURL} className="input input-bordered" required readOnly />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Article Publisher</span>
                                </label>
                                <select
                                    name="publisher"
                                    className="input input-bordered"
                                    onChange={(e) => setSelectedPublisher(JSON.parse(e.target.value))}
                                    required
                                >
                                    <option value="" defaultValue disabled selected>Select Publisher</option>
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
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tags</span>
                                </label>
                                <Select options={tagOptions} value={selectedTags} onChange={setSelectedTags} isMulti />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name='description' placeholder="Write Short Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-4">
                                <button type="submit" className="py-2 text-white font-semibold rounded bg-sky-500 hover:bg-blue-600 border-2 border-sky-600 mt-4"  >Add Article</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddArticle;
