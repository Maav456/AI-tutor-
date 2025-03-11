// frontend/src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold">AI Tutor</h1>
            <div>
                <Link to="/" className="mr-4 hover:underline">Home</Link>
                <Link to="/chat" className="mr-4 hover:underline">Chat</Link>
                <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            </div>
        </nav>
    );
};

export default Navbar;
