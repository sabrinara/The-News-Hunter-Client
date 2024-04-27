import { useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [updateForm, setUpdateForm] = useState({
    name: user?.name || "", // Initialize with the user's name
    image: user?.image || "", // Initialize with the user's image
  });
  console.log(user)
  const handleUpdate = (event) => {
    event.preventDefault();
    fetch(`https://the-news-hunter-server-lac.vercel.app/users/${user?.email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateForm),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your profile has been updated!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="container mx-auto mt-10 p-4 dark:text-black ">
      <h2 className="text-3xl md:text-5xl font-semibold mb-10 text-center text-cyan-700 ">Hi {user?.displayName}! Welcome to your profile.</h2>
      <div className="flex flex-col md:flex-row  justify-center items-center text-black gap-10">
        <div className="flex flex-cols justify-center items-center my-10">
          <div className="card w-96 bg-sky-200 shadow-xl ">
            <div className="card-body">
              <figure><img className="w-64 h-64 rounded " src={user?.photoURL} alt="image" /></figure>
              <h2 className="text-xl ml-7 "><span className="font-bold text-cyan-800">Name: </span>{user?.displayName}</h2>
              <p className="text-xl ml-7"><span className="font-bold text-cyan-800">Email: </span> {user?.email}</p>
            </div>

          </div>
        </div>
        <div className="flex flex-cols justify-center items-center my-10">
          <div className="card w-96 bg-sky-200 text-black shadow-2xl p-20">
            <form action="" onSubmit={handleUpdate}>

              <div className="form-control">
                <label className="label">
                  <span className=" text-black">Name</span>
                </label>
                <input
                  type="text"
                  placeholder={user?.displayName}
                  className="input input-bordered"

                  onChange={(e) => setUpdateForm({ ...updateForm, name: e.target.value })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="">Image</span>
                </label>
                <input
                  type="text"
                  placeholder={user?.photoURL}
                  className="input input-bordered"
                  onChange={(e) => setUpdateForm({ ...updateForm, image: e.target.value })}
                />
              </div>


              <button type="submit" className="btn btn-primary mt-4">
                Update Profile
              </button>
              {user?.role !== "admin" || user?.role !== "editor" &&
              <button className="" >
                Request to become an publisher 
              </button> 
              }
            </form>
          </div>
        </div>
      </div>



    </div>
  );
};

export default MyProfile;
