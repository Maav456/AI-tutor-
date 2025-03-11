// frontend/src/services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        console.error('Login error:', error.response?.data?.message || error.message);
        throw error;
    }
};

export const signup = async (name, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { name, email, password });
        return response.data;
    } catch (error) {
        console.error('Signup error:', error.response?.data?.message || error.message);
        throw error;
    }
};
