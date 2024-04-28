import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AddPublisher = () => {
    const [publisherRequests, setPublisherRequests] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchPublisherRequests();
        fetchUsers(); // Fetch users once component mounts
    }, []);

    const fetchPublisherRequests = () => {
        axios.get('https://the-news-hunter-server-lac.vercel.app/publisher')
            .then(response => {
                setPublisherRequests(response.data);
            })
            .catch(error => {
                console.error('Error fetching publisher requests:', error);
                toast.error('Error fetching publisher requests');
            });
    };

    const fetchUsers = () => {
        axios.get('https://the-news-hunter-server-lac.vercel.app/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                toast.error('Error fetching users');
            });
    };

    const handleApproveRequest = (id, email) => {
        axios.patch(`https://the-news-hunter-server-lac.vercel.app/publisher/${id}`, {
            status: 'approved',
            role: 'editor'
        })
        .then(response => {
            const updatedRequests = publisherRequests.map(request => request._id === id
                ? { ...request, status: 'approved', role: 'editor' }
                : request
            );
            setPublisherRequests(updatedRequests);
            console.log(response.data);

            // Update user role if email matches
            const user = users.find(user => user.email === email);
            if (user) {
                axios.patch(`https://the-news-hunter-server-lac.vercel.app/users/${user._id}`, {
                    role: 'editor'
                })
                .then(response => {
                    console.log('User role updated successfully');
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error updating user role:', error);
                    toast.error('Error updating user role');
                });
            }

            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Editor Approved successfully',
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(error => {
            console.error('Error approving request:', error);
            toast.error('Error approving request');
        });
    };

    const handleDeclineRequest = (id) => {
        axios.patch(`https://the-news-hunter-server-lac.vercel.app/publisher/${id}`, {
            status: 'declined',
        })
        .then(response => {
            const updatedRequests = publisherRequests.map(request => request._id === id
                ? { ...request, status: 'declined', role: 'user' }
                : request
            );
            setPublisherRequests(updatedRequests);
            console.log(response.data);

            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Declined successfully',
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(error => {
            console.error('Error declining request:', error);
            toast.error('Error declining request');
        });
    };

    return (
        <div>
            <h2 className="text-3xl md:text-5xl font-bold my-10 text-center text-cyan-600">Add Publisher</h2>
            <div className="overflow-x-auto">
                <table className='min-w-full table border text-cyan-600'>
                    <thead>
                        <tr className='text-center  text-lg'>
                            <th className="px-4 py-2 border border-gray-300">Publisher Name</th>
                            <th className="px-4 py-2 border border-gray-300">Publisher Image</th>
                            <th className="px-4 py-2 border border-gray-300">Publisher Status</th>
                            <th className="px-4 py-2 border border-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {publisherRequests.map(request => (
                            <tr key={request._id}>
                                <td className="px-4 py-2 border border-gray-300">{request.publisher_name}</td>
                                <td className="px-4 py-2 border border-gray-300 "><img src={request.publisher_image} alt="Publisher" className="w-12 h-12 rounded-full mx-auto" /></td>
                                <td className="px-4 py-2 border border-gray-300">{request.status}</td>
                                <td className="px-4 py-2 border border-gray-300 ">
                                <div className="flex space-x-2 ">
                                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleApproveRequest(request._id, request.email)}>Approve</button>
                                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2' onClick={() => handleDeclineRequest(request._id)}>Decline</button>
                                 </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddPublisher;
