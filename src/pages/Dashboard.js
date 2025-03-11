// frontend/src/pages/Dashboard.js

import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
            <p className="text-lg text-gray-700 mb-6">View your uploaded PDFs and learning progress here.</p>
            <div className="w-full max-w-2xl bg-white p-4 rounded shadow">
                <p className="text-gray-600">No PDFs uploaded yet.</p>
            </div>
        </div>
    );
};

export default Dashboard;
