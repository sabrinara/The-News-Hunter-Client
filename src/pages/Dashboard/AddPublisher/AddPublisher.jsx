
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddPublisher = () => {
const navigate = useNavigate();
   
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const publisher_name = form.publisher_name.value;
        const publisher_image = form.publisher_image.value;
        
        const newPublisher = {
           
            publisher_name,
            publisher_image,
           
        }

        fetch("https://the-news-hunter-server-lac.vercel.app/publisher", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newPublisher)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Publisher Added Sucessfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool!',
                    })
                    navigate('/allarticles');
                }
            })
            .catch(error => {
                console.log(error);
            })

        form.reset();
    }

   
    
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Add Publisher</h2>

         

            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label  className="block text-sm font-medium text-gray-700">
                        Publisher Name
                    </label>
                    <input
                        type="text"
                      
                        name='publisher_name'
                        className="mt-1 p-2 border w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Publisher Image
                    </label>
                    <input
                        type="text"
                        
                        name='publisher_image'
                        className="mt-1 p-2 border w-full"
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primarypx-4 py-2 rounded-md "
                >
                    Add Publisher
                </button>
            </form>
        </div>
    );
};

export default AddPublisher;
