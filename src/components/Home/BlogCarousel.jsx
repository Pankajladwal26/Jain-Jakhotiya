import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ScrollBar.css';

const BlogCarousel = () => {
  const carouselRef = useRef(null); // Reference to the carousel container
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const blogs = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Blog Post 1',
      description: 'This is a description of blog post one.'
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

  // Handle the wheel event for horizontal scrolling
  const handleWheel = (event) => {
    event.preventDefault(); // Prevent the default vertical scrolling on the page

    if (carouselRef.current) {
      // Horizontal scroll speed (adjust as necessary)
      const scrollSpeed = 30;

      // Scroll left if the user scrolls up, right if they scroll down
      if (event.deltaY > 0) {
        // Scroll right
        carouselRef.current.scrollBy({
          top: 0,
          left: scrollSpeed,
          behavior: 'smooth',
        });
      } else {
        // Scroll left
        carouselRef.current.scrollBy({
          top: 0,
          left: -scrollSpeed,
          behavior: 'smooth',
        });
      }
    }
  };

  // Function to prevent vertical scrolling when hovering over the carousel
  const preventVerticalScroll = (event) => {
    if (isHovered) {
      event.preventDefault(); // Stop the default page scroll if hovering over the carousel
    }
  };

  // Set up global scroll prevention and mouse hover events
  useEffect(() => {
    // Add the global scroll event listener when the component mounts
    window.addEventListener('wheel', preventVerticalScroll, { passive: false });

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('wheel', preventVerticalScroll);
    };
  }, [isHovered]); // The scroll event listener will trigger on hover change

  return (
    <div className="flex flex-col items-center justify-center w-full mb-28">
      <div
        ref={carouselRef}
        className="pt-4 pl-4 pb-4 max-w-1350px w-[70%] max-md:w-[90%] flex gap-4 overflow-x-auto mb-10 bg-white rounded-lg scrollbar-thin"
        onWheel={handleWheel} // Capture the wheel event for horizontal scrolling
        onMouseEnter={() => setIsHovered(true)} // Track when the user hovers over the carousel
        onMouseLeave={() => setIsHovered(false)} // Track when the user leaves the carousel
      >
        {blogs.map(blog => (
          <Link key={blog.id} to="/Jain-Jakhotiya/blogs">
            <div className="min-w-[300px] border border-gray-300 rounded-3xl shadow-md bg-white p-4 flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-md mb-2" />
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/Jain-Jakhotiya/blogs">
        <button className="bg-white text-customBlack border-[1px] border-text font-semibold text-xl p-4 transition-transform duration-2000 hover:scale-110 hover:bg-black hover:text-white">
          Discover Blogs
        </button>
      </Link>
    </div>
  );
};

export default BlogCarousel;
