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
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <form action="" onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
