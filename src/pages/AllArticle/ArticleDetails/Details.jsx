import { useContext, useEffect, useState } from "react";
import HelmetKiller from "../../Shared/HelmetKiller/HelmetKIller";
import { AuthContext } from "../../../providers/AuthProvider";
import { useParams } from "react-router-dom";


const Details = () => {

    const [article, setArticle] = useState({});
    // const { user } = useContext(AuthContext)
    const { id } = useParams();
    

    useEffect(() => {
        fetch(`http://localhost:5000/news/${id}`)
            .then(res => res.json())
            .then(data => setArticle(data))
    }, [id])
    const { title, content, image, publisher  } = article || {};

    // update view count
    // fetch(`http://localhost:5000/news/${id}/views`, {
    //     method: "PUT"
    // })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));
    
    return (
        <div>
            <HelmetKiller pagename="Details"></HelmetKiller>
            <div>
             
                <div className="hero min-h-screen bg-base-200 ">
                    <div className="hero-content flex-col ">
                        <img src={image} className="w-2/3 rounded-lg shadow-2xl my-10" />
                        <div>
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <div className="flex items-center gap-4 my-2">
                                <img src={publisher?.image} className="w-20  h-20 border-4 border-b-orange-600 rounded-full " alt="" />
                                <p className="font-bold text-xl">{publisher?.name}</p>
                            </div>
                            <p className="py-6">{content}</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                    {/* update count */}

                </div>
             

            </div>
        </div>
    );
};

export default Details;
