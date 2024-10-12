import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateBlog = () => {
  // State to hold blog information
  const [blogId, setBlogId] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [body, setBody] = useState('');
  const [currentImage, setCurrentImage] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to fetch the blog data by ID
  const fetchBlog = async (id) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token'); // Adjust if token is stored elsewhere
      const response = await axios.get(`http://localhost:4000/api/v1/admin/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const blogData = response.data.blog;
      if (blogData) {
        setTitle(blogData.title);
        // Replace <br> tags with newline characters (\n) to preserve line breaks in the text
        setBody(blogData.body.replace(/<br\s*\/?>/gi, '\n'));
        setCurrentImage(blogData.image[0]?.url || ''); // Assuming image is an array and you get the URL
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle form submission (update blog)
  // Function to handle form submission (update blog)
const updateBlog = async (e) => {
    e.preventDefault();
  
    if (!title || !body) {
      alert('Please fill in all fields');
      return;
    }
  
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('title', title);
  
      // Replace newlines with <br> before sending the body back to the server
      const updatedBody = body.replace(/\n/g, '<br/>');
      formData.append('body', updatedBody);
  
      // If no new image is uploaded, use the original image
      if (image) {
        formData.append('image', image);
      } else if (currentImage) {
        // Send the original image if no new image is selected
        formData.append('image', currentImage);
      }
  
      console.log("Form Data: ", formData);
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);  // Log each field and its value
      }
  
      const token = localStorage.getItem('token');
  
      const response = await axios.put(`http://localhost:4000/api/v1/admin/blog/update/${blogId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 200) {
        alert('Blog updated successfully');
        
        // Reset the form fields after successful update
        resetForm();
      } else {
        alert('Error updating blog');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // Function to handle form reset (cancel)
  const resetForm = () => {
    setTitle('');
    setBody('');
    setImage(null);
    setCurrentImage('');
  };

  // Handle the "Enter" button to fetch blog details
  const handleEnter = () => {
    if (blogId) {
      fetchBlog(blogId);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="pt-4 max-w-800px w-[70%] max-xl:w-[80%] flex flex-col items-center gap-4 flex-wrap mb-16">
        <div className="blog-form w-full">
          <h2 className='text-customBlack text-5xl max-lg:text-4xl max-md:text-3xl font-bold mb-10'>Update a Blog</h2>
          <div className='mb-14 flex flex-col items-start justify-start gap-4'>
            <div className='flex max-lg:flex-col max-lg:items-start items-center gap-4 w-full'>
              <p className='text-customBlack font-semibold text-3xl max-lg:text-2xl max-md:text-xl'>Enter the Blog ID:</p>
              <input
                className='text-text font-semibold border-[2px] rounded-lg max-lg:w-full h-16 text-3xl max-lg:text-xl p-4 max-lg:p-2 max-lg:h-14 bg-contentbg'
                type="text"
                value={blogId}
                onChange={(e) => setBlogId(e.target.value)}
                required
              />
            </div>
            <button
              className='bg-white w-fit text-customBlack border border-text font-semibold text-2xl py-1 px-3 transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white'
              onClick={handleEnter}
              disabled={loading || !blogId}
            >
              {loading ? 'Fetching...' : 'Enter'}
            </button>
          </div>

          {currentImage && (
            <div className="mb-12 flex flex-col gap-4 w-fit">
              <label className='text-customBlack text-4xl max-lg:text-3xl max-md:text-2xl font-semibold'>Current Image:</label>
              <img src={currentImage} alt="Blog" className="h-48 w-fit rounded-lg object-cover mb-4" />
              <label className='text-customBlack text-4xl max-lg:text-3xl max-md:text-2xl font-semibold'>Change Image:</label>
              <input 
                className='w-fit'
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          )}

          <form onSubmit={updateBlog}>
            <div className='mb-12 flex flex-col gap-4 w-full'>
              <label className='text-customBlack text-4xl max-lg:text-3xl max-md:text-2xl font-semibold'>Title:</label>
              <input
                className='text-text font-semibold border-[2px] rounded-lg h-20 text-3xl max-lg:text-xl p-4 max-lg:p-2 max-lg:h-14 bg-contentbg max-lg:w-full lg:w-[70%]'
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className='mb-12 flex flex-col gap-4'>
              <label className='text-customBlack text-4xl max-lg:text-3xl max-md:text-2xl font-semibold'>Body:</label>
              <textarea
                className='text-text font-medium border-[2px] rounded-lg h-96 text-xl max-lg:text-xl p-4 max-lg:p-2 bg-contentbg'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                style={{ whiteSpace: 'pre-wrap' }}
              />
            </div>

            <div className="flex justify-start gap-4">
              <button 
                type="submit" 
                className='bg-white text-customBlack border border-text font-semibold text-2xl pt-2 pb-2 pr-4 pl-4 transition-transform duration-2000 hover:scale-110 hover:bg-blue hover:text-white' 
                disabled={loading}
              >
                {loading ? 'Updating...' : 'Update'}
              </button>
              <button
                type="button"
                className='bg-white text-customBlack border border-text font-semibold text-2xl pt-2 pb-2 pr-4 pl-4 transition-transform duration-2000 hover:scale-110 hover:bg-red-500 hover:text-white'
                onClick={resetForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
