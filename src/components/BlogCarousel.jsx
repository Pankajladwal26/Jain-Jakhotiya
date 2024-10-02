import React from 'react';
import { Link } from 'react-router-dom';
import './ScrollBar.css';

const BlogCarousel = () => {
  const blogs = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Blog Post 1',
      description: 'This is a description of blog post 1.'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Blog Post 2',
      description: 'This is a description of blog post 2.'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'Blog Post 3',
      description: 'This is a description of blog post 3.'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      title: 'Blog Post 4',
      description: 'This is a description of blog post 4.'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/150',
      title: 'Blog Post 5',
      description: 'This is a description of blog post 5.'
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/150',
      title: 'Blog Post 6',
      description: 'This is a description of blog post 6.'
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full mb-28">
      <div className='pt-4 pl-4 pb-4 max-w-1350px w-[70%] flex gap-4 overflow-x-auto mb-10 bg-gray-300 rounded-lg scrollbar-thin'>
        {blogs.map(blog => (
          <div key={blog.id} className="min-w-[200px] border border-gray-300 rounded-lg shadow-md bg-white p-4 flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-md mb-2" />
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="text-gray-600">{blog.description}</p>
          </div>
        ))}
      </div>
      <Link to="/blogs">
        <button className='bg-white text-customBlack border-[1px] border-text font-semibold text-xl p-4 transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white'>
          Discover Blogs
        </button>
      </Link>
    </div>
  );
};

export default BlogCarousel;
