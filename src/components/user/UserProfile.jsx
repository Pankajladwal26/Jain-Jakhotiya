import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import axios
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { User } from '../../assets';
import { faGear, faPenToSquare, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {

    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // To track user login status
    const menuRef = useRef();

    useEffect(() => {
        // Check if user is logged in when the component mounts
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }

        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    const handleLogout = async () => {
        try {
          const token = localStorage.getItem('token');
          if (token) {
            // Example API URL for logout
            const response = await axios.get('http://localhost:4000/api/v1/logout', {}, {
             
            });
    
            if (response.status === 200) {
              // Successfully logged out
              localStorage.removeItem('token'); // Clear token
              setIsLoggedIn(false); // Update login state
            } else {
              // Handle case where logout failed
              console.error('Logout failed', response.data);
            }
          }
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };

  return (
    <div className="text-center">
                <div className="relative" ref={menuRef}>
                    
                    <div
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >
                        <img src={User} alt="User" className="w-12 h-12 rounded-full" />
                    </div>

                    <div
                        className={`absolute -left-24 mt-2 w-60 bg-n-3 bg-navdropdown text-white shadow-lg transition-transform duration-300 ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                    >
                        <div className="absolute left-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-navdropdown transform -translate-x-1/2" />
                        <div className="w-full">
                            <h3 className="text-xl border-b-[1px] p-2 w-full">User Name <br /> User Email </h3>
                            <ul className=''>
                                <button className='p-2 pl-6 flex gap-4 items-center hover:bg-white hover:text-black w-full border-b-[1px]'><FontAwesomeIcon icon={faUser}/>My Profile</button>
                                <button className='p-2 pl-6 flex gap-4 items-center hover:bg-white hover:text-black w-full border-b-[1px]'><FontAwesomeIcon icon={faPenToSquare}/>Edit Profile</button>
                                <button className='p-2 pl-6 flex gap-4 items-center hover:bg-white hover:text-black w-full border-b-[1px]'><FontAwesomeIcon icon={faGear}/>Settings</button>
                                <button className='p-2 pl-6 flex gap-4 items-center hover:bg-white hover:text-black w-full' onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket}/>Logout</button>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    );
};

const DropdownItem = ({ img, text }) => (
    <li className="flex items-center py-2 px-4 hover:bg-gray-700 cursor-pointer">
        <img src={img} alt={text} className="w-6 h-6 mr-3" />
        <a>{text}</a>
    </li>
);

export default UserProfile;


