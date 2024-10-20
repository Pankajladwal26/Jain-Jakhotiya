import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ScrollBar.css';
import { Blog1, Blog2 } from '../../assets';
import gsap from 'gsap';

const BlogCarousel = () => {
  const carouselRef = useRef(null);
  const blogRefs = useRef([]); // Array to store references to each blog container
  const buttonRef = useRef(null);
  const animationHasRun = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  const blogs = [
    {
      id: 1,
      image: Blog2,
      title: 'Blog Post 1',
      description: 'This is a description of blog post 1.',
      createdAt: '1min ago | 19 Oct 24',
    },
    {
      id: 2,
      image: Blog1,
      title: 'Blog Post 2',
      description: 'This is a description of blog post 2.',
      createdAt: '1min ago | 19 Oct 24',
    },
    {
      id: 3,
      image: Blog2,
      title: 'Blog Post 3',
      description: 'This is a description of blog post 3.',
      createdAt: '1min ago | 19 Oct 24',
    },
    {
      id: 4,
      image: Blog1,
      title: 'Blog Post 4',
      description: 'This is a description of blog post 4.',
      createdAt: '1min ago | 19 Oct 24',
    },
    {
      id: 5,
      image: Blog2,
      title: 'Blog Post 5',
      description: 'This is a description of blog post 5.',
      createdAt: '1min ago | 19 Oct 24',
    },
    {
      id: 6,
      image: Blog1,
      title: 'Blog Post 6',
      description: 'This is a description of blog post 6.',
      createdAt: '1min ago | 19 Oct 24',
    },
  ];

  const handleWheel = (event) => {
    event.preventDefault();

    if (carouselRef.current) {
      const scrollSpeed = 50;
      if (event.deltaY > 0) {
        carouselRef.current.scrollBy({
          top: 0,
          left: scrollSpeed,
          behavior: 'smooth',
        });
      } else {
        carouselRef.current.scrollBy({
          top: 0,
          left: -scrollSpeed,
          behavior: 'smooth',
        });
      }
    }
  };

  const preventVerticalScroll = (event) => {
    if (isHovered) {
      event.preventDefault();
    }
  };

  // Animation function to animate blog containers from right to left
  const animateBlogs = () => {
    gsap.fromTo(
      blogRefs.current, 
      {
        x: 200, // Start position (off to the right)
        opacity: 0, // Initially hidden
      },
      {
        x: 0, // End position (in place)
        opacity: 1, // Fully visible
        stagger: 0.3, // Stagger each element by 0.3 seconds
        ease: 'power1.out', // Ease the animation
        scrollTrigger: {
          trigger: blogRefs.current,
          start: 'top 80%', // Animation starts when the element is 80% from the top of the viewport
          once: true, // Animation happens only once
      }
      }
    );
  };

  useEffect(() => {
    if (!animationHasRun.current) {
      gsap.fromTo(buttonRef.current, {
        opacity: 0,
        scale: 0,
      }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 80%', // Animation starts when the element is 80% from the top of the viewport
          once: true, // Animation happens only once
        }
      });
      
      animateBlogs(); // Trigger the animation on mount
      animationHasRun.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', preventVerticalScroll, { passive: false });
    carouselRef.current?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventVerticalScroll);
      carouselRef.current?.removeEventListener('wheel', handleWheel);
    };
  }, [isHovered]);

  return (
    <div className="flex flex-col items-center justify-center w-full mb-28">
      <div
        ref={carouselRef}
        className="pt-4 pl-4 pb-4 max-w-1350px w-[70%] max-md:w-[90%] flex gap-4 overflow-x-auto mb-10 bg-white rounded-lg scrollbar-thin"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {blogs.map((blog, index) => (
          <Link key={blog.id} to="/Jain-Jakhotiya/blogs">
            <div
              className="group min-w-[320px] min-h-[500px] border border-gray-300 rounded-3xl shadow-md bg-white flex flex-col overflow-hidden relative hover:cursor-pointer"
              ref={(el) => (blogRefs.current[index] = el)} // Assign each blog to the refs array
            >
              {/* Image Section */}
              <div className="relative z-0 overflow-hidden group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 ease-in-out">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full min-h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              {/* Title and Description Section */}
              <div className="absolute bottom-0 min-h-[250px] left-0 flex flex-col justify-between right-0 bg-white p-4 rounded-t-3xl transition-all duration-300 ease-in-out group-hover:min-h-[270px]">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 transition-all duration-300 ease-in-out">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-4">{blog.createdAt}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link to="/Jain-Jakhotiya/blogs">
        <div ref={buttonRef}>
          <button 
            className="bg-white text-buttonBlue border-[1px] border-buttonBlue font-semibold text-xl p-4 transition-transform duration-2000 hover:scale-110 hover:bg-buttonBlue hover:text-white"
          >
            Discover Blogs
          </button>
        </div>
      </Link>
    </div>
  );
};

export default BlogCarousel;
