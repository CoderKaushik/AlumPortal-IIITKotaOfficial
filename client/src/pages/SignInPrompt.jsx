import React from "react";
import Navbar from "../components/Navbar.jsx";

const SignInPrompt = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <Navbar />
            <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-md">
                Sign In
            </button>
        </div>
    );
};

export default SignInPrompt;
