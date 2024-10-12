import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]); // Array to store multiple blogs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [blogsPerPage] = useState(3); // Number of blogs per page (fixed to 5)

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem('token');
        if (!token) {
          setError('You are not authenticated. Please log in.');
          setLoading(false);
          return;
        }

        const response = await axios.get('http://localhost:4000/api/v1/blogs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBlogs(response.data.blogs); // Assuming the response has 'blogs'
        setLoading(false);
      } catch (err) {
        let errorMessage = 'Error fetching blog data';
        if (err.response) {
          errorMessage = err.response.data?.message || 'An unknown error occurred';
        } else if (err.request) {
          errorMessage = 'No response from the server';
        } else {
          errorMessage = err.message || 'An unexpected error occurred';
        }

        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  // Pagination logic: Calculate the index of the first and last blog to display on the current page
  const totalBlogs = blogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Check if the date is valid
  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Date not available' : date.toLocaleDateString();
  };

  // Pagination handler
  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (blogs.length === 0) {
    return (
      <div className='flex justify-center w-full'>
        <div className='pt-4 max-w-800px w-[70%] max-md:w-[90%] flex items-center justify-center mb-48 mt-28'>
          <div className='text-customBlack font-bold text-5xl'>
            No Blogs Uploaded Yet!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex justify-center w-full'>
      <div className='pt-4 max-w-800px w-[70%] max-md:w-[90%] flex flex-col gap-4 flex-wrap mb-10'>
        {/* Render the blogs for the current page */}
        {currentBlogs.map((blog, index) => (
          <div
            key={blog._id}
            className={`flex flex-col justify-center pb-20 mb-16 ${
              index !== currentBlogs.length - 1 ? 'border-b-2 border-text' : ''
            }`}
          >
            {/* Display image if available */}
            {blog.image && blog.image.length > 0 && (
              <img
                src={blog.image[0]?.url} // Assuming 'image' field contains the image URL
                alt={blog.title}
                className="mb-10 rounded-lg object-contain h-96 w-fit" // Example styling (adjust as needed)
              />
            )}
  
            <h1 className='text-customBlack font-bold text-3xl mb-3 max-sm:text-4xl'>
              {blog.title}
            </h1>
            <p className='text-text text-lg mb-6 ml-1'>
              By {`${blog.user?.firstName} ${blog.user?.lastName}` || "Unknown"} on {getFormattedDate(blog?.createdAt)}
            </p>
            <div className='text-text text-lg mt-2'>
              {/* Render blog body with HTML content */}
              <div
                className="blog-body"
                dangerouslySetInnerHTML={{ __html: blog?.body }}
              />
            </div>
          </div>
        ))}
  
        {/* Pagination buttons */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 1}
            className="bg-white w-fit self-center text-customBlack border border-text font-semibold text-2xl py-2 px-4 max-sm:py-1 max-sm:px-3 max-sm:text-xl transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white disabled:opacity-50"
          >
            Previous
          </button>
          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange('next')}
            disabled={currentPage === totalPages}
            className="bg-white w-fit self-center text-customBlack border border-text font-semibold text-2xl py-2 px-4 max-sm:py-1 max-sm:px-3 max-sm:text-xl transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );  
};

export default Blogs;
