import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // To store login errors
    const navigate = useNavigate(); // For navigation after successful login

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/v1/login', {
                email,
                password
            });

            const { token } = response.data;

            // Store token in localStorage
            localStorage.setItem('token', token);

            // Redirect to the home page after successful login
            navigate('/Jain-Jakhotiya/'); // Replace '/home' with your actual route

        } catch (error) {
            setErrorMessage('Invalid email or password. Please try again.');
        }
    };

    const handlePasswordReset = () => {
        const email = prompt("Please enter your email! : ");
        // Implement password reset logic here
        console.log("Password reset for:", email);
    };

    return (
        <form onSubmit={handleLoginSubmit} className="w-full px-10 py-5">
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} {/* Display error message */}
            <div className="social-icons mb-4 flex justify-center space-x-2">
                {/* Social Icons */}
            </div>
            <span className="block mb-4 text-gray-600">or use your email password</span>
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
            <p onClick={handlePasswordReset} className="block mb-4 text-blue-500">Forget Your Password?</p>
            <button 
                type="submit" 
                className="bg-purple-700 text-white text-sm px-11 py-2.5 rounded-md font-semibold tracking-wide uppercase"
            >
                Sign In
            </button>
        </form>
    );
};

export default Login;
