import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { User } from '../../assets';
import { faGear, faLock, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        role: '',
        country: 'India',
    });

    const menuRef = useRef();
    const profileRef = useRef();
    const dropdownRef = useRef(); // Reference for the dropdown

    // Fetch profile from API
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:4000/api/v1/me', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const { data } = response;
                setProfile({
                    firstName: data.user.firstName || '',
                    lastName: data.user.lastName || '',
                    userName: data.user.userName || '',
                    email: data.user.email || '',
                    role: data.user.role || '',
                    country: data.user.country || 'India',
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
                const response = await axios.get('http://localhost:4000/api/v1/logout', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (response.status === 200) {
                    localStorage.removeItem('token');
                    setOpen(false);  // Ensure the dropdown closes on logout
                    window.location.reload();
                }
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    // Event handler for clicking on the profile icon
    const handleProfileClick = () => {
        setOpen(prevState => !prevState); // Toggle the dropdown state
    };

    // Event handler for clicking outside the profile icon or dropdown
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && 
            dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);  // Close the dropdown if the click is outside
        }
    };

    // Attach and clean up the click event listener on component mount/unmount
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside); // Cleanup listener
        };
    }, []);

    return (
        <div className="text-center">
            <div
                className="relative"
                ref={menuRef}
            >
                {/* Clicking on the profile icon toggles the dropdown */}
                <div className="cursor-pointer" onClick={handleProfileClick}>
                    <img src={User} alt="User" className="w-12 h-12 rounded-full" />
                </div>

                {/* Conditional rendering of the dropdown */}
                <div
                    className={`absolute -right-5 mt-2 w-fit bg-n-3 bg-navdropdown text-white shadow-lg transition-transform duration-300 ${
                        open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
                    ref={dropdownRef}  // Reference for the dropdown to detect outside clicks
                >
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
                            {/* Conditionally render the Admin Panel if the role is 'admin' */}
                            {profile.role === 'Admin' && (
                                <Link to="/Jain-Jakhotiya/admin-panel">
                                    <button className="p-4 pl-6 flex gap-4 items-center hover:bg-white hover:text-black w-full border-b-[1px]">
                                        <FontAwesomeIcon icon={faLock} />
                                        Admin Panel
                                    </button>
                                </Link>
                            )}
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
