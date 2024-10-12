import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const GetUserByID = () => {
  const [userId, setUserId] = useState('');
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null); // State to store fetched user info

  // Function to handle "ENTER" button
  const handleEnter = async () => {
    if (!userId) {
      setError('Please enter a valid user ID');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const token = localStorage.getItem('token');
      if (!token) {
        setError('You are not authenticated. Please log in.');
        setIsLoading(false);
        return;
      }

      const response = await axios.get(
        `http://localhost:4000/api/v1/admin/user/${userId}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('User data fetched successfully:', response.data);
        setUserInfo(response.data.user); // Set the fetched user data to state
        setRole(response.data.user.role); // Set the role to be editable
      }

    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 401) {
        setError('Unauthorized access. Please log in.');
      } else {
        setError('User not found. Please check the ID.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle "Reset" button
  const handleReset = () => {
    setUserId('');
    setUserInfo(null);
    setRole('');
    setError(null); // Clear any previous error
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="pt-4 max-w-800px w-[90%] max-xl:w-[80%] flex flex-col items-center gap-4 flex-wrap mb-16">
        <div className="w-full flex max-xl:flex-col items-start gap-16">
          {/* User Profile Section */}
          <div className="bg-contentbg h-fit shadow-2xl w-1/3 max-xl:w-full p-10 rounded-3xl flex flex-col justify-center items-center gap-10">
            <div className="bg-white shadow-2xl rounded-full p-2 w-60 h-60 flex items-center justify-center flex-col">
              <FontAwesomeIcon icon={faUser} size="8x" />
            </div>
            <p className="text-customBlack font-bold text-center text-2xl">
              {userInfo ? `${userInfo.firstName} ${userInfo.lastName}` : `User's Name`}
            </p>
            <p className="text-customBlack text-center font-bold text-xl">
              Country -
              <span className="font-semibold ml-2">
                <select
                  name="country"
                  id="country"
                  className="p-2 border-[3px] border-text rounded-lg"
                  defaultValue={userInfo ? 'India' : ''} // Default value or empty
                  disabled // Make it read-only
                >
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="China">China</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Russia">Russia</option>
                  <option value="Israel">Israel</option>
                  <option value="Nepal">Nepal</option>
                  <option value="UK">UK</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                </select>
              </span>
            </p>
          </div>

          {/* User Info and Role Management Section */}
          <div className="bg-contentbg h-full shadow-2xl w-2/3 max-xl:w-full p-10 rounded-3xl">
            <div className="flex items-center justify-start p-2 pb-6 border-b-2">
              <p className="text-customBlack font-bold text-4xl">Get User By ID</p>
            </div>

            {/* USER ID Input */}
            <div className="mt-8 pl-2 mb-10">
              <p className="text-2xl text-text font-semibold mb-4">USER ID</p>
              <div className="flex max-sm:flex-col items-center max-sm:items-start gap-10">
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="border-2 p-2 rounded-lg shadow-2xl h-10 w-80 max-sm:w-full"
                />
                <button
                  onClick={handleEnter}
                  className="bg-white text-customBlack border-[1px] border-text font-semibold text-xl pt-1 pb-1 pr-4 pl-4 transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white"
                >
                  ENTER
                </button>
              </div>
            </div>

            {/* USER INFORMATION */}
            <div className="mt-8 pl-2 mb-8">
              <p className="text-2xl text-text font-semibold">USER INFORMATION</p>
            </div>
            <div className="flex flex-col gap-8 mt-6 pb-10 pl-2 border-b-2">
              <div className="flex max-lg:flex-col gap-10">
                <div>
                  <p className="text-text font-semibold text-xl mb-2">First Name</p>
                  <input
                    type="text"
                    value={userInfo ? userInfo.firstName : ''}
                    className="border-2 p-2 rounded-lg shadow-2xl h-10 w-80 max-sm:w-full"
                    readOnly
                  />
                </div>
                <div>
                  <p className="text-text font-semibold text-xl mb-2">Last Name</p>
                  <input
                    type="text"
                    value={userInfo ? userInfo.lastName : ''}
                    className="border-2 p-2 rounded-lg shadow-2xl h-10 w-80 max-sm:w-full"
                    readOnly
                  />
                </div>
              </div>
              <div className="flex max-lg:flex-col gap-10">
                <div>
                  <p className="text-text font-semibold text-xl mb-2">Username</p>
                  <input
                    type="text"
                    value={userInfo ? userInfo.userName : ''}
                    className="border-2 p-2 rounded-lg shadow-2xl h-10 w-80 max-sm:w-full"
                    readOnly
                  />
                </div>
                <div>
                  <p className="text-text font-semibold text-xl mb-2">Email</p>
                  <input
                    type="text"
                    value={userInfo ? userInfo.email : ''}
                    className="border-2 p-2 rounded-lg shadow-2xl h-10 w-80 max-sm:w-full"
                    readOnly
                  />
                </div>
              </div>
              <div>
                <p className="text-text font-semibold text-xl mb-2">Role</p>
                <input
                  type="text"
                  value={userInfo ? userInfo.role : ''}
                  className="border-2 p-2 rounded-lg shadow-2xl h-10 w-80 max-sm:w-full"
                  readOnly
                />
              </div>
            </div>
            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="bg-white mt-6 ml-2 text-customBlack border-[1px] border-text font-semibold text-2xl pt-2 pb-2 pr-6 pl-6 transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white"
            >
              Reset
            </button>
            {/* Display error or loading state */}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUserByID;
