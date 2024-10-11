import React, { useState, useEffect } from 'react';
import axios from "axios";

const Profile = () => {

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

  return (
    <div className='text-white relative p-6 pt-24 pb-12'>
      <div className="pt-4 flex gap-4 flex-wrap justify-evenly items-center xl:flex-row mt-[10%]">
          <div className='flex flex-col items-center justify-center gap-12 max-md:order-2'>
              <h1 className='relative h1 text-center text-discover font-bold text-6xl max-sm:text-5xl leading-4rem z-20 text-shadow-glow'>Hello {profile.firstName} {profile.lastName} !</h1>
            <div className='flex flex-col items-center text-center justify-center'>
              <span className='text-2xl font-semibold'>Welcome to your {profile.role} Dashboard—</span>
              <span className='text-lg font-semibold'>Your one-stop hub for staying organized, tracking progress, and managing your tasks effortlessly.</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Profile
