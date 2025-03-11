// frontend/src/pages/Login.js

import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in with:', email, password);
        alert('Login successful!');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
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
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default Login;
