import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={`fixed bottom-7 right-7 max-md:bottom-3 max-md:right-3 z-50 ${isVisible ? 'block' : 'hidden'}`}>
            <button
                onClick={scrollToTop}
                className="bg-slate-500 text-white rounded-full w-16 h-16 max-lg:w-10 max-lg:h-10 flex items-center justify-center text-2xl shadow-lg hover:bg-n-4 transition-colors"
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
};

export default ScrollUp;
