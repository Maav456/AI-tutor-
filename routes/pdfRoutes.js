// backend/routes/pdfRoutes.js

const express = require('express');
const { uploadPDF, extractTextFromPDF } = require('../controllers/pdfController');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

console.log('PDF routes initialized');

// Route to upload PDF
router.post('/upload', upload.single('pdf'), uploadPDF);

// Route to extract text from a PDF
router.get('/extract/:id', extractTextFromPDF);

module.exports = router;
