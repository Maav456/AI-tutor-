// frontend/src/services/preferencesService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/preferences';

export const getUserPreferences = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching preferences:', error.response?.data?.message || error.message);
        throw error;
    }
};

export const updateUserPreferences = async (userId, preferences) => {
    try {
        const response = await axios.put(`${API_URL}/update`, { userId, ...preferences });
        return response.data;
    } catch (error) {
        console.error('Error updating preferences:', error.response?.data?.message || error.message);
        throw error;
    }
};
