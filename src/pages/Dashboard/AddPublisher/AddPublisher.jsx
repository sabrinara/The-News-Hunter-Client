import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddPublisher = () => {
    const [publisherRequests, setPublisherRequests] = useState([]);

    useEffect(() => {
        fetchPublisherRequests();
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

    const handleApproveRequest = (id) => {
        fetch(`https://the-news-hunter-server-lac.vercel.app/publisher/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               status: 'approved',
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const updatedRequests = publisherRequests.map((request) => request._id === id
                        ? { ...request, status: 'approved' }
                        : request
                );
                    setPublisherRequests(updatedRequests);
                    toast.success('Publisher request approved successfully!');
            }});
    };

    const handleDeclineRequest = (id) => {
        axios.patch(`https://the-news-hunter-server-lac.vercel.app/publisher/${id}`, {
            status: 'declined',
        })
            .then(response => {
                if (response.data.modifiedCount > 0) {
                    setPublisherRequests(publisherRequests.filter(request => request._id !== id));
                    toast.warning('Publisher request declined successfully!');
                } else {
                    toast.error('Failed to decline publisher request');
                }
            })
            .catch(error => {
                console.error('Error declining publisher request:', error);
                toast.error('Error declining publisher request');
            });
    };

    return (
        <div>
            <h2 className="text-5xl font-semibold my-10 text-center text-cyan-600">Add Publisher</h2>
            <div className="overflow-x-auto">
                <table className='min-w-full table border text-cyan-600 '>
                    <thead>
                        <tr className='text-center'>
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
                                <td className="px-4 py-2 border border-gray-300">
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleApproveRequest(request._id)}>Approve</button>
                                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2' onClick={() => handleDeclineRequest(request._id)}>Decline</button>
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
