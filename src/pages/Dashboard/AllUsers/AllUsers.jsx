import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";

const AllUsers = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await axios.get("https://the-news-hunter-server-lac.vercel.app/users");
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const updateUserRole = async (userId, newRole) => {
        try {
            const response = await axios.patch(`https://the-news-hunter-server-lac.vercel.app/users/${userId}`, {
                role: newRole
            });
            const updatedUsers = users.map((user) =>
                user._id === userId ? { ...user, role: newRole } : user
            );
            setUsers(updatedUsers);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteUser = async (userId) => {
        try {
            await axios.delete(`https://the-news-hunter-server-lac.vercel.app/users/${userId}`);
            const updatedUsers = users.filter((user) => user._id !== userId);
            setUsers(updatedUsers);
            toast("User deleted successfully");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-4 overflow-x-auto">
            <h2 className="text-5xl font-semibold my-10 text-center text-cyan-600">All Users</h2>
            <table className="min-w-full border text-cyan-600">
                <thead>
                    <tr>
                        <th className="text-center border p-2">Name</th>
                        <th className="text-center border p-2">Image</th>
                        <th className="text-center border p-2">Email</th>
                        <th className="text-center border p-2">Role</th>
                        <th className="text-center border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user?._id} className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                            <td className="py-2 border text-center">{user?.name}</td>
                            <td className="py-2 border text-center"><img src={user?.image} className="rounded mx-auto" width={"50px"} alt="" /></td>
                            <td className="py-2 border text-center">{user?.email}</td>
                            <td className="py-2 border text-center">{user?.role || "user"}</td>
                            <td className="py-2 border text-center">
                                <div className="flex justify-between items-center md:mx-10 gap-2">
                                    <button
                                        onClick={() => updateUserRole(user?._id, "admin")}
                                        disabled={user?.role === "admin"}
                                        className={`px-4 py-2 rounded-md text-white font-medium shadow-md transition-colors ${user.role === "admin" ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"}`}
                                    >
                                        Make Admin
                                    </button>
                                    <button
                                        onClick={() => updateUserRole(user?._id, "editor")}
                                        disabled={user?.role === "editor"}
                                        className={`px-4 py-2 rounded-md text-white font-medium shadow-md transition-colors ${user.role === "editor" ? "bg-gray-400" : "bg-sky-500 hover:bg-sky-600"}`}
                                    >
                                        Make Editor
                                    </button>
                                    <button
                                        onClick={() => updateUserRole(user?._id, "user")}
                                        disabled={user?.role === "user" || user.role === ""}
                                        className={`px-4 py-2 rounded-md text-white font-medium shadow-md transition-colors ${user.role === "user" || user.role === "" ? "bg-gray-400" : "bg-purple-500 hover:bg-purple-600"}`}
                                    >
                                        Make User
                                    </button>
                                    <button
                                        onClick={() => deleteUser(user?._id)}
                                        className="px-4 py-2 rounded-md text-white font-medium shadow-md bg-red-500 hover:bg-red-600"
                                    >
                                        Delete User
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;
