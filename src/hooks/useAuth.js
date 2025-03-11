// frontend/src/hooks/useAuth.js

import { useState, useEffect } from 'react';
import { login, signup } from '../services/authService';

const useAuth = () => {
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

    return { user, loading, handleLogin, handleSignup, logout };
};

export default useAuth;
