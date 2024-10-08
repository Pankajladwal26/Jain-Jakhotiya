import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // To store signup errors
    const navigate = useNavigate(); // For navigation after successful signup

    const handleSignupRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/v1/register', {
                name,
                email,
                password
            });

            const { token } = response.data;

            // Store token in localStorage
            localStorage.setItem('token', token);

            // Redirect to home page after successful signup
            navigate('/Jain-Jakhotiya/');

        } catch (error) {
            setErrorMessage('Registration failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSignupRegister} className="w-full px-10 py-5">
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} {/* Display error message */}
            <div className="social-icons mb-4 flex justify-center space-x-2">
                <a href="#" className="p-2 border rounded-full border-gray-300">
                    <FontAwesomeIcon icon={faGoogle} className="text-gray-600" />
                </a>
                <a href="#" className="p-2 border rounded-full border-gray-300">
                    <FontAwesomeIcon icon={faFacebookF} className="text-gray-600" />
                </a>
                <a href="#" className="p-2 border rounded-full border-gray-300">
                    <FontAwesomeIcon icon={faGithub} className="text-gray-600" />
                </a>
                <a href="#" className="p-2 border rounded-full border-gray-300">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-600" />
                </a>
            </div>
            <span className="block mb-4 text-gray-600">or use your email for registration</span>
            <input 
                type="text" 
                placeholder="Name" 
                onChange={(e) => setName(e.target.value)} 
                className="bg-gray-200 border-none p-2 mb-2 text-sm rounded-lg w-full" 
            />
            <input 
                type="email" 
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)} 
                className="bg-gray-200 border-none p-2 mb-2 text-sm rounded-lg w-full" 
            />
            <input 
                type="password" 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)} 
                className="bg-gray-200 border-none p-2 mb-4 text-sm rounded-lg w-full" 
            />
            <button 
                type="submit" 
                className="bg-purple-700 text-white text-sm px-11 py-2.5 rounded-md font-semibold tracking-wide uppercase"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignUp;
