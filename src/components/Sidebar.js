// frontend/src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-4">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul>
                <li className="mb-2"><Link to="/" className="hover:underline">Home</Link></li>
                <li className="mb-2"><Link to="/chat" className="hover:underline">Chat</Link></li>
                <li className="mb-2"><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
                <li className="mb-2"><Link to="/preferences" className="hover:underline">Preferences</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
