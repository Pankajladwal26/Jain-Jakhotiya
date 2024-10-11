import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretLeft, faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';
import CreateBlog from '../admin/CreateBlog';
import DeleteUser from '../admin/DeleteUser';
import DeleteBlog from '../admin/DeleteBlog';
import GetAllUsers from '../admin/GetAllUsers';
import GetUserByID from '../admin/GetUserByID';
import UpdateUserRole from '../admin/UpdateUserRole';

const AdminPanel = () => {
  const adminPanel = [
    { id: "0", title: "Create Blogs" },
    { id: "1", title: "Delete Blogs" },
    { id: "2", title: "Update User Role" },
    { id: "3", title: "Delete User" },
    { id: "4", title: "Get All Users" },
    { id: "5", title: "Get User By ID" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const adminPanelRef = useRef(null); // Reference to the admin panel container

  // Function to handle scrolling through the admin panel options
  const handleScroll = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adminPanel.length);
    } else if (direction === 'prev') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + adminPanel.length) % adminPanel.length);
    }
  };

  useEffect(() => {
    const adminPanelElement = adminPanelRef.current;

    if (adminPanelElement) {
      // Clean up event listeners if any
      return () => {
        // Any cleanup code can go here if needed
      };
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const renderComponentForCurrentIndex = () => {
    switch (currentIndex) {
      case 0:
        return <CreateBlog />;
      case 1:
        return <DeleteBlog />;
      case 2:
        return <UpdateUserRole />;
      case 3:
        return <DeleteUser />;
      case 4:
        return <GetAllUsers />;
      case 5:
        return <GetUserByID />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full -mt-16 mb-28">
      <div className="bg-contentbg flex flex-col justify-center pt-4">
        <button className="bg-white w-fit self-center text-customBlack border border-text font-semibold text-2xl pt-2 pb-2 pr-4 pl-4 transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white">
          Admin
        </button>
        <div className="flex flex-col justify-center items-center mt-3 gap-[6px] mb-10">
          <span className="block h-[1px] w-12 bg-customBlack"></span>
          <span className="block h-[1px] w-8 bg-customBlack"></span>
          <span className="block h-[1px] w-4 bg-customBlack"></span>
        </div>
      </div>

      {/* Routes container with carousel effect */}
      <div
        className="bg-contentbg relative w-full h-[100px] overflow-hidden"
        ref={adminPanelRef} // Reference to detect when the user is inside this div
      >
        {/* Render all admin panel options, but only show one at a time */}
        {adminPanel.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-full flex justify-center items-center gap-48 transition-transform duration-500 ${
              index === currentIndex
                ? 'translate-x-0'
                : index < currentIndex
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
          >
            <p className="self-center mt-[6px] text-customBlack text-3xl font-semibold">
              {item.title}
            </p>
          </div>
        ))}

        {/* Fixed position icons */}
        <div className='flex items-center justify-center gap-[900px] max-lg:gap-[600px] max-md:gap-[500px] max-sm:gap-[250px]'>
          <div className="relative z-10">
            <FontAwesomeIcon 
              onClick={() => handleScroll('prev')} 
              className="h-12 w-12 text-black transition-transform duration-2000 hover:scale-110 cursor-pointer" 
              icon={faSquareCaretLeft} 
            />
          </div>
          <div className="relative z-10">
            <FontAwesomeIcon 
              onClick={() => handleScroll('next')} 
              className="h-12 w-12 text-black transition-transform duration-2000 hover:scale-110 cursor-pointer" 
              icon={faSquareCaretRight} 
            />
          </div>
        </div>
      </div>
      {/* Render the component based on the current index */}
      <div className="pt-28">
        <div>
          {renderComponentForCurrentIndex()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
