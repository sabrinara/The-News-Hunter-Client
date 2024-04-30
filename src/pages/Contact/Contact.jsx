import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Ex from "../../../public/contact.json";
import Con from "../../../public/contact-2.json";
import Lottie from "lottie-react";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
    // Step 1: Define state variables for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    // Step 2: Define event handlers for form fields
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { name, email, message });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        toast.success('Thank you for contacting us!');
    };

    return (
        <div >
            <Helmet>
                <title>The Hunter News- Contact</title>
            </Helmet>
            <div className="flex flex-col md:flex-row-reverse  items-center justify-between mt-0">
                <div className="w-full md:w-1/3 mx-10 text-center md:text-start">
                    <h1 className="text-3xl md:text-5xl font-bold text-cyan-600 ">Contact Us</h1>
                    <p className="text-sm  my-2 text-cyan-600">Get in touch with us. We will respond as soon as possible.</p>
                    <p className="text-sm  my-2 text-cyan-600">Reach Out for any type of Inquiries, or Just to Say Hi!</p>
                    <p className="text-sm  my-2 text-cyan-600">Send us a message!</p>
                </div>
                <div className="w-full md:w-2/3 ">
                    <Lottie animationData={Con} loop={true} />
                </div>

            </div>

            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="hidden md:flex md:w-1/3  md:mt-1 mx-20">
                    <Lottie animationData={Ex} loop={true} />
                </div>
                <div className="w-full md:w-1/2 mx-auto">
                    <form className="card-body" onSubmit={handleSubmit}>

                        <div className="form-control">
                            <label className="label">Name:</label>
                            <input type="text" id="name" className="input input-bordered" value={name} onChange={handleNameChange} required />
                        </div>

                        <div className="form-control">
                            <label className="label">Email:</label>
                            <input type="email" id="email" className="input input-bordered" value={email} onChange={handleEmailChange} required />
                        </div>
                        <div className="form-control">
                            <label className="label">Phone:</label>
                            <input type="number" id="phone" className="input input-bordered" value={phone} onChange={handlePhoneChange} required />
                        </div>

                        <div className="form-control">
                            <label className="label">Message:</label>
                            <textarea id="message" value={message} className="input input-bordered" onChange={handleMessageChange} required />
                        </div>


                        <button className="px-10 py-3 mt-10 rounded border-2 border-sky-400 " type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
        </div>

    );
};

export default Contact;