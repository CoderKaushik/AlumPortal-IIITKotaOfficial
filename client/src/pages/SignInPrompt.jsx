import React from "react";
import Navbar from "../components/navbar.jsx";

const SignInPrompt = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <Navbar />
            <a href="/signin" className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-md">
                Sign In
            </a>
        </div>
    );
};

export default SignInPrompt;
