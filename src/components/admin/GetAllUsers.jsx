import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const GetAllUsers = () => {
  const [users, setUsers] = useState([]); // To store user data
  const [loading, setLoading] = useState(true); // To handle loading state
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [totalPages, setTotalPages] = useState(1); // To handle total pages

  const usersPerPage = 5; // Define how many users to display per page

  // Function to fetch users from the backend
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token'); // or get token from cookie/session
      const response = await axios.get('http://localhost:4000/api/v1/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token here
        },
        params: { page: currentPage, limit: usersPerPage }, // Sending page and limit as query params
      });
      
      // Assuming the response has a `users` field and `totalUsers` is returned from API
      const totalUsers = response.data.totalUsers;
      setUsers(response.data.users);
      
      // Handle missing totalUsers or NaN cases
      if (totalUsers !== undefined && totalUsers !== null) {
        setTotalPages(Math.ceil(totalUsers / usersPerPage));
      } else {
        setTotalPages(1); // Set to 1 page if totalUsers is undefined or null
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  // Fetch users on initial render and when the currentPage changes
  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  // Function to handle page changes
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="pt-4 max-w-800px w-[70%] max-xl:w-[80%] flex flex-col items-center gap-4 flex-wrap mb-16">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {users.map((user) => (
              <div
                key={user.id} // Unique key for each user
                className="flex max-lg:flex-col max-lg:gap-10 items-center justify-around max-xl:justify-between max-md:items-start bg-contentbg w-full rounded-xl shadow-2xl p-10 max-2xl:p-6 mb-4"
              >
                <div className="bg-white w-28 max-md:ml-10 h-28 max-1075px:w-20 max-1075px:h-20 flex items-center justify-center shadow-2xl rounded-full">
                  <FontAwesomeIcon icon={faUser} className="h-16 w-16 max-1075px:w-12 max-1075px:h-12" />
                </div>
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-4">
                  <div key={`firstName-${user.id}`} className="flex w-auto items-center max-md:justify-start justify-center text-customBlack font-semibold text-xl gap-2">
                    <p>First Name :</p>
                    <p>{user.firstName}</p>
                  </div>
                  <div key={`lastName-${user.id}`} className="flex items-center max-md:justify-start justify-center text-customBlack font-semibold text-xl gap-2">
                    <p>Last Name :</p>
                    <p>{user.lastName}</p>
                  </div>
                  <div key={`username-${user.id}`} className="flex items-center max-md:justify-start justify-center text-customBlack font-semibold text-xl gap-2">
                    <p>Username :</p>
                    <p>{user.userName}</p>
                  </div>
                  <div key={`role-${user.id}`} className="flex items-center max-md:justify-start justify-center text-customBlack font-semibold text-xl gap-2">
                    <p>Role :</p>
                    <p>{user.role}</p>
                  </div>
                  <div key={`email-${user.id}`} className="flex max-sm:flex-col items-center max-sm:items-start max-md:justify-start justify-center text-customBlack font-semibold text-xl gap-2 col-span-2 max-md:col-span-1">
                    <p>Email :</p>
                    <p>{user.email}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Pagination buttons */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-white w-fit self-center text-customBlack border border-text font-semibold text-2xl pt-2 pb-2 pr-4 pl-4 transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white disabled:opacity-50"
              >
                Previous
              </button>
              <span className="font-semibold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-white w-fit self-center text-customBlack border border-text font-semibold text-2xl pt-2 pb-2 pr-4 pl-4 transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GetAllUsers;
