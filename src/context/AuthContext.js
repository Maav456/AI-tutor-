// frontend/src/context/AuthContext.js

import { createContext, useState, useEffect } from 'react';
import { login, signup } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));
        setLoading(false);
    }, []);

    const handleLogin = async (email, password) => {
        const data = await login(email, password);
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
    };

    const handleSignup = async (name, email, password) => {
        const data = await signup(name, email, password);
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, loading, handleLogin, handleSignup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
