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
            title: "Your profile has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h2 className="text-6xl font-semibold mb-10 text-center ">My Profile</h2>
      <div className="flex justify-center items-center gap-10">
        <div className="flex flex-cols justify-center items-center my-10">
          <div className="card w-96 bg-sky-200 text-black shadow-xl ">
            <div className="card-body">
              <figure><img className="w-64 h-64 " src={user?.photoURL} alt="Shoes" /></figure>
              <h2 className="card-title">Name: {user?.displayName}</h2>
              <p className="text-xl">Email: {user?.email}</p>
            </div>

          </div>
        </div>
        <div className="flex flex-cols justify-center items-center my-10">
          <div className="card w-96 bg-sky-200 text-black shadow-2xl p-20">
            <form action="" onSubmit={handleUpdate}>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
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
                  <span className="label-text">Image</span>
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
            </form>
          </div>
        </div>
      </div>



    </div>
  );
};

export default MyProfile;
