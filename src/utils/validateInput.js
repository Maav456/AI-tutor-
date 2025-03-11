// frontend/src/utils/validateInput.js

export const validateEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

export const validatePassword = (password) => {
    return password.length >= 6;
};
