// frontend/src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to AI Tutor</h1>
            <p className="text-lg text-gray-700 mb-6">An interactive learning experience powered by AI.</p>
            <Link to="/chat" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Start Learning
            </Link>
        </div>
    );
};

export default Home;
