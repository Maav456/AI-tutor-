// backend/routes/authRoutes.js

const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

console.log('Auth routes initialized');

// User Registration
router.post('/register', registerUser);

// User Login
router.post('/login', loginUser);

module.exports = router;
