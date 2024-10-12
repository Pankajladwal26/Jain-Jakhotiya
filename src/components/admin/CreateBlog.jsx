import React, { useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body.replace(/\n/g, '<br>'));  // Preserve newlines
    if (image) {
      formData.append('image', image);
    }
  
    // Log the formData content before sending the request
    console.log("Form Data: ", formData);
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);  // Log each field and its value
    }
  
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error("No token found.");
        alert('You are not authenticated. Please log in.');
        setLoading(false);
        return;
      }
  
      const response = await axios.post('http://localhost:4000/api/v1/admin/blog/new', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log(response);
      if (response.status === 201) {
        alert('Blog created successfully!');
        
        // Reset the form fields after successful blog creation
        setTitle('');
        setBody('');
        setImage(null);
        document.getElementById('imageInput').value = '';  // Clear the file input manually
      } else {
        throw new Error('Failed to create blog');
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Something went wrong! Check the console for more details.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex justify-center items-center w-full -mt-12">
      <div className="pt-4 max-w-800px w-[70%] max-xl:w-[80%] flex flex-col items-start gap-4 flex-wrap mb-16">
        <div className="blog-form w-full">
          <h2 className='text-customBlack text-5xl max-lg:text-4xl max-md:text-3xl font-bold mb-10'>Create a New Blog</h2>
          <form onSubmit={handleSubmit}>
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
            <div className='mb-12 flex flex-col gap-4 w-fit'>
              <label className='text-customBlack text-4xl max-lg:text-3xl max-md:text-2xl font-semibold'>Image:</label>
              <input 
                id="imageInput"  // Add an id to target the file input
                className='w-fit'
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className='mb-12 flex flex-col gap-4'>
              <label className='text-customBlack text-4xl max-lg:text-3xl max-md:text-2xl font-semibold'>Body:</label>
              <textarea
                className='text-text font-medium border-[2px] rounded-lg h-96 text-xl p-4 bg-contentbg'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              className='bg-white w-fit self-center text-customBlack border border-text font-semibold text-2xl pt-2 pb-2 pr-4 pl-4 transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white' 
              disabled={loading}
            >
              {loading ? 'Uploading...' : 'Create'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
