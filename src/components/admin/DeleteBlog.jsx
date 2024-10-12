import React, { useState } from 'react';
import axios from 'axios';

const DeleteBlog = () => {
  // State to hold blog information
  const [blogId, setBlogId] = useState('');
  const [blogData, setBlogData] = useState(null); // To store the blog info after fetching
  const [loading, setLoading] = useState(false);

  // Function to fetch blog details by ID
  const fetchBlog = async (id) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token'); // Adjust if token is stored elsewhere
      const response = await axios.get(`http://localhost:4000/api/v1/admin/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const blog = response.data.blog;
      if (blog) {
        setBlogData(blog);
      } else {
        alert('Blog not found');
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle blog deletion
  const deleteBlog = async () => {
    if (!blogData) return;
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:4000/api/v1/admin/blog/delete/${blogData._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        alert('Blog deleted successfully');
        resetForm();
      } else {
        alert('Error deleting blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to reset form fields
  const resetForm = () => {
    setBlogId('');
    setBlogData(null);
  };

  // Handle "Enter" button to fetch blog details
  const handleEnter = () => {
    if (blogId) {
      fetchBlog(blogId);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="pt-4 max-w-800px w-[70%] max-xl:w-[80%] flex flex-col items-start gap-4 flex-wrap mb-16">
        <h2 className="text-customBlack text-5xl max-lg:text-4xl max-md:text-3xl font-bold mb-10">Delete a Blog</h2>

        {/* Blog ID input and fetch button */}
        <div className="mb-14 flex flex-col items-start justify-start gap-4 w-full">
          <div className="flex max-lg:flex-col items-center max-lg:items-start gap-4 w-full">
            <p className="text-customBlack font-semibold text-3xl max-lg:text-2xl max-md:text-xl">Enter the Blog ID:</p>
            <input
              className="text-text font-semibold border-[2px] max-lg:w-[80%] max-sm:w-full rounded-lg h-16 text-3xl max-lg:text-xl p-4 max-lg:p-2 max-lg:h-14 bg-contentbg"
              type="text"
              value={blogId}
              onChange={(e) => setBlogId(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-white w-fit text-customBlack border border-text font-semibold text-2xl py-1 px-3 transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white"
            onClick={handleEnter}
            disabled={loading || !blogId}
          >
            {loading ? 'Fetching...' : 'Enter'}
          </button>
        </div>

        {/* Display blog details if found */}
        {blogData && (
          <div className="w-full mb-12 flex flex-col gap-6">
            <div className="mb-6 flex gap-6 items-center">
              <p className="text-customBlack text-4xl max-lg:text-3xl max-md:text-2xl font-semibold">Title:</p>
              <p className="text-text text-3xl max-lg:text-xl">{blogData.title}</p>
            </div>
            {blogData.image && (
              <div className="mb-6 flex flex-col gap-4">
                <p className="text-customBlack text-4xl max-lg:text-3xl max-md:text-2xl font-semibold">Image:</p>
                <img src={blogData.image[0]?.url} alt="Blog" className="h-48 w-fit rounded-lg object-cover" />
              </div>
            )}
            <div className="mb-6 flex flex-col gap-4">
              <p className="text-customBlack text-4xl max-lg:text-3xl max-md:text-2xl font-semibold">Body:</p>
              <p className="text-text text-2xl max-lg:text-xl whitespace-pre-wrap">{blogData.body.replace(/<br\s*\/?>/gi, '\n')}</p>
            </div>

          </div>
        )}

        {/* Delete and Cancel buttons */}
        <div className="flex justify-start gap-4">
          <button
            type="button"
            className="bg-white text-customBlack border border-text font-semibold text-2xl pt-2 pb-2 pr-4 pl-4 transition-transform duration-2000 hover:scale-110 hover:bg-red-500 hover:text-white"
            onClick={deleteBlog}
            disabled={loading || !blogData}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>

          <button
            type="button"
            className="bg-white text-customBlack border border-text font-semibold text-2xl pt-2 pb-2 pr-4 pl-4 transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white"
            onClick={resetForm}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBlog;
