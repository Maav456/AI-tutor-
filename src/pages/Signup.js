// frontend/src/pages/Signup.js

import React, { useState } from 'react';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        console.log('Signing up with:', name, email, password);
        alert('Signup successful!');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Signup</h1>
            <input
                type="text"
                placeholder="Name"
                className="p-2 border rounded w-80 mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                className="p-2 border rounded w-80 mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="p-2 border rounded w-80 mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={handleSignup}>
                Signup
            </button>
        </div>
    );
};

export default Signup;
