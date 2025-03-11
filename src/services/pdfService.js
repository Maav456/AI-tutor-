// frontend/src/services/pdfService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/pdf';

export const uploadPDF = async (file) => {
    try {
        const formData = new FormData();
        formData.append('pdf', file);
        
        const response = await axios.post(`${API_URL}/upload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    } catch (error) {
        console.error('PDF upload error:', error.response?.data?.message || error.message);
        throw error;
    }
};

export const extractText = async (pdfId) => {
    try {
        const response = await axios.get(`${API_URL}/extract/${pdfId}`);
        return response.data;
    } catch (error) {
        console.error('PDF text extraction error:', error.response?.data?.message || error.message);
        throw error;
    }
};
