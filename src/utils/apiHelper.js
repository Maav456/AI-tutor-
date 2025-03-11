// frontend/src/utils/apiHelper.js

export const handleApiError = (error) => {
    console.error('API Error:', error.response?.data?.message || error.message);
    return error.response?.data?.message || 'An unexpected error occurred';
};
