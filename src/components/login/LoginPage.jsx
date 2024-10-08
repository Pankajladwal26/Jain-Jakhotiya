import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const handleSignUp = () => {
        setIsSignUp(true);
    };

    const handleSignIn = () => {
        setIsSignUp(false);
    };

    return (
        <div className='bg-contentbg pt-10 h-[100vh] w-full flex items-center justify-center'>
            <div className={`container flex flex-col justify-start relative overflow-hidden bg-white shadow-md w-full max-w-[768px] min-h-[768px] transition-all duration-600 ease-in-out ${isSignUp ? '' : 'active'}`}>
                <div className='container flex flex-col'>
                    {/* Sign Up Form */}
                    <div className={`form-container absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-center transition-all duration-600 ease-in-out ${isSignUp ? 'opacity-0 z-10 -translate-x-full' : 'opacity-100 z-20 translate-x-0'}`}>
                        <SignUp />
                    </div>

                    {/* Sign In Form */}
                    <div className={`form-container absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-center transition-all duration-600 ease-in-out ${isSignUp ? 'opacity-100 z-20 translate-x-0' : 'opacity-0 z-10 translate-x-full'}`}>
                        <Login />
                    </div>

                    {/* Toggle Container */}
                    <div className={`flex justify-center items-center absolute top-0 w-full h-1/2 overflow-hidden transition-all duration-600 ease-in-out bg-purple-700`}>
                        <div className={`flex flex-row justify-center items-center text-white w-full`}>
                            {isSignUp ? (
                                // Sign In Panel
                                <div className={`toggle-panel w-full flex flex-col items-center justify-center px-7 text-center transition-all duration-600 ease-in-out ${isSignUp ? 'opacity-100 z-20 translate-x-0' : 'opacity-0 z-10 -translate-x-full'}`}>
                                    <h1 className="text-2xl font-bold mb-4">Hello, Friend!</h1>
                                    <p>Join our community by registering with your personal details.</p>
                                    <p className="mb-4">Enjoy full access to all features!</p>
                                    <button onClick={handleSignIn} className="bg-transparent border border-white text-sm px-11 py-2.5 rounded-md font-semibold tracking-wide uppercase">
                                        Sign Up
                                    </button>
                                </div>
                            ) : (
                                // Sign Up Panel
                                <div className={`toggle-panel w-full flex flex-col items-center justify-center px-7 transition-all duration-600 ease-in-out ${isSignUp ? 'opacity-0 z-10 translate-x-full' : 'opacity-100 z-20 translate-x-0'}`}>
                                    <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
                                    <p>Already have an account?</p>
                                    <p className="mb-4">Sign In and pick up right where you left off!</p>
                                    <button onClick={handleSignUp} className="bg-transparent border border-white text-sm px-11 py-2.5 rounded-md font-semibold tracking-wide uppercase">
                                        Sign In
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
