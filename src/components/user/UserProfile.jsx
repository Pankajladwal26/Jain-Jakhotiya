import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { User } from '../../assets';
import { faGear, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // To track user login status
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const menuRef = useRef();
    const profileRef = useRef();
    // Timer ID to clear the timeout on mouse enter
    const [timeoutId, setTimeoutId] = useState(null);
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        role: '',
        country: 'India',
      });
    
    
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

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                // Send logout request to the API (usually requires token in header)
                const response = await axios.get(
                    'http://localhost:4000/api/v1/logout',
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}` // Pass token in Authorization header
                        }
                    }
                );

                if (response.status === 200) {
                    // Successfully logged out
                    localStorage.removeItem('token'); // Remove token from localStorage after logout
                    setIsLoggedIn(false); // Update login state to reflect user is logged out

                    // Optionally, redirect the user or refresh the page
                    window.location.reload(); // Reload the page to reset the app state
                } else {
                    // Handle the case where logout failed
                    console.error('Logout failed', response.data);
                }
            } else {
                // If no token is found, handle logout logic without token (e.g., user not logged in)
                console.warn('No token found, user may already be logged out');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    // Event handler for mouse entering the profile icon
    const handleMouseEnter = () => {
        // If a timeout exists, clear it so that the dropdown stays visible immediately
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setOpen(true); // Open the dropdown
    };

    // Event handler for mouse leaving the profile icon or dropdown
    const handleMouseLeave = () => {
        // Set a timeout to close the dropdown after 2 seconds if the mouse leaves
        const id = setTimeout(() => {
            setOpen(false); // Close the dropdown after 2 seconds
        }, 500);
        setTimeoutId(id);
    };

    useEffect(() => {
        // Clean up the timeout when component unmounts or when `timeoutId` changes
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId); // Clear any existing timeout on unmount
            }
        };
    }, [timeoutId]);

    return (
        <div className="text-center">
            <div
                className="relative"
                ref={menuRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="cursor-pointer">
                    <img src={User} alt="User" className="w-12 h-12 rounded-full" />
                </div>

                {/* Conditional rendering of the dropdown */}
                <div
                    className={`absolute -left-24 mt-2 w-fit bg-n-3 bg-navdropdown text-white shadow-lg transition-transform duration-300 ${
                        open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
                    onMouseEnter={handleMouseEnter} // Keep open when hovering over the dropdown
                    onMouseLeave={handleMouseLeave} // Hide after 2 seconds when leaving the dropdown
                >
                    <div className="absolute left-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-navdropdown transform -translate-x-1/2" />
                    <div className="w-fit">
                        <h3 className="text-xl text-center p-4 w-full pr-4 pl-4">{profile.firstName} {profile.lastName}</h3>
                        <h3 className='text-xl border-b-[1px] pb-4 pr-4 pl-4 w-full'>{profile.email}</h3>
                        <ul className="">
                            <Link to="/Jain-Jakhotiya/profile">
                                <button className="p-4 pl-6 flex gap-4 items-center hover:bg-white hover:text-black w-full border-b-[1px]">
                                    <FontAwesomeIcon icon={faUser} />
                                    My Profile
                                </button>
                            </Link>
                            <Link to="/Jain-Jakhotiya/edit-profile">
                                <button className="p-4 pl-6 flex gap-4 items-center hover:bg-white hover:text-black w-full border-b-[1px]">
                                    <FontAwesomeIcon icon={faGear} />
                                    Settings
                                </button>
                            </Link>
                            <button
                                className="p-4 pl-6 flex gap-4 items-center hover:bg-white hover:text-black w-full"
                                onClick={handleLogout}
                            >
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                Logout
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
