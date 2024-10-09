import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const EditProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    role: '',
    country: 'India',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch profile from API
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true); // Set loading to true before API call
        const token = localStorage.getItem('token');  // Assuming you have the token stored in localStorage
        const response = await axios.get('http://localhost:4000/api/v1/me', {
          headers: { Authorization: `Bearer ${token}` }
        });

        const { data } = response;

        setProfile({
          firstName: data.user.firstName || '',
          lastName: data.user.lastName || '',
          userName: data.user.userName || '',    // Ensure data is not undefined
          email: data.user.email || '',  // Ensure data is not undefined
          role: data.user.role || '',    // Ensure data is not undefined
          country: data.user.country || 'India', // Default to 'India' if undefined
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Failed to load user profile');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // Function to handle the "Save" button click
  const handleSave = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem('token');
      const updatedData = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        userName: profile.userName,
        email: profile.email,
        country: profile.country,
      };

      // Send PUT request to update user profile
      const response = await axios.put('http://localhost:4000/api/v1/me/update', updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setLoading(false);
        alert("Profile updated successfully!");

        // Redirect user to "MyProfile" page after successful save
        navigate ('/Jain-Jakhotiya/profile');

      } else {
        throw new Error('Failed to update profile');
      }
    } catch (err) {
      setLoading(false);
      console.error('Error updating user profile:', err);
      setError('Failed to update user profile');
    }
  };


  return (
    <div className='-mt-16 flex justify-center w-full mb-16'>
      <div className='mt-16 pt-4 max-w-800px w-[70%] max-md:w-[90%] flex items-center flex-col gap-4 flex-wrap mb-10'>
        <div className="w-full flex items-start gap-16">
          <div className="bg-contentbg h-fit shadow-2xl w-2/5 p-10 rounded-3xl flex flex-col justify-center items-center gap-10">
            <div className="bg-white shadow-2xl rounded-full p-2 w-60 h-60 flex items-center justify-center flex-col">
              <FontAwesomeIcon icon={faUser} size="8x" />
            </div>
            <p className="text-customBlack font-bold text-4xl">{profile.firstName} {profile.lastName}</p>
            <p className="text-customBlack font-bold text-2xl">Country - 
              <span className="font-semibold ml-2">
                <select 
                  name="country" 
                  id="country" 
                  className="p-2 border-[3px] border-text rounded-lg"
                  value={profile.country} 
                  onChange={(e) => setProfile({ ...profile, country: e.target.value })}
                >
                  <option value="India">India</option>
                  <option value="India">Pakistan</option>
                  <option value="India">China</option>
                  <option value="India">USA</option>
                  <option value="India">Canada</option>
                  <option value="India">Russia</option>
                  <option value="India">Israel</option>
                  <option value="India">Nepal</option>
                  <option value="India">UK</option>
                  <option value="India">Sri Lanka</option>
                  {/* Add other options as needed */}
                </select>
              </span>
            </p>
          </div>
          <div className="bg-contentbg h-full shadow-2xl w-3/5 p-10 rounded-3xl">
            <div className="flex items-center justify-start p-2 pb-6 border-b-2">
              <p className="text-customBlack font-bold text-4xl">My Account</p>
            </div>
            <div className="mt-8 pl-2 mb-10">
              <p className="text-2xl text-text font-semibold">USER INFORMATION</p>
            </div>
            <div className="flex flex-col gap-8 mt-6 pb-10 pl-2 border-b-2">
            <div>
                <p className="text-text font-semibold text-xl mb-2">First Name</p>
                <input 
                  type="text" 
                  className="border-2 p-2 rounded-lg shadow-2xl h-10 w-80"
                  value={profile.firstName} 
                  onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                />
              </div>
              <div>
                <p className="text-text font-semibold text-xl mb-2">Last Name</p>
                <input 
                  type="text" 
                  className="border-2 p-2 rounded-lg shadow-2xl h-10 w-80"
                  value={profile.lastName} 
                  onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                />
              </div>
              <div>
                <p className="text-text font-semibold text-xl mb-2">Username</p>
                <input 
                  type="text" 
                  className="border-2 p-2 rounded-lg shadow-2xl h-10 w-80"
                  value={profile.userName} 
                  onChange={(e) => setProfile({ ...profile, userName: e.target.value })}
                />
              </div>
              <div>
                <p className="text-text font-semibold text-xl mb-2">Email</p>
                <input 
                  type="text" 
                  className="border-2 p-2 rounded-lg shadow-2xl h-10 w-80"
                  value={profile.email} 
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>
              <div>
                <p className="text-text font-semibold text-xl mb-2">Role</p>
                <input 
                  type="text" 
                  className="border-2 p-2 rounded-lg shadow-2xl h-10 w-80 pointer-events-none"
                  value={profile.role} 
                  onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center justify-start gap-10 mt-6 ml-2">
                <button 
                    onClick={handleSave}
                    disabled={loading}
                    className="bg-white text-customBlack border-[1px] border-text font-semibold text-xl pt-3 pb-3 pr-6 pl-6 transition-transform duration-2000 hover:scale-110 hover:bg-blue hover:text-white">
                    Save
                </button>
                <button 
                    onClick={() => navigate(-1)}
                    className="bg-white text-customBlack border-[1px] border-text font-semibold text-xl pt-3 pb-3 pr-6 pl-6 transition-transform duration-2000 hover:scale-110 hover:bg-red-500 hover:text-white">
                    Cancel
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
