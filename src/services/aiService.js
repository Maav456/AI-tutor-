// frontend/src/services/aiService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/ai';

export const askAI = async (pdfId, question) => {
    try {
        const response = await axios.post(`${API_URL}/ask`, { pdfId, question });
        return response.data;
    } catch (error) {
        console.error('AI Q&A error:', error.response?.data?.message || error.message);
        throw error;
    }
};
