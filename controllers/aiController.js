// backend/controllers/aiController.js

const { generateAIResponse } = require('../services/aiService');
const PDF = require('./models/PDF');
const fs = require('fs');
const pdfParse = require('pdf-parse');

console.log('AI Controller Loaded');

// AI Q&A Handler
const askAI = async (req, res) => {
    try {
        const { pdfId, question } = req.body;
        console.log(`Processing AI question for PDF: ${pdfId}`);

        // Find PDF in the database
        const pdf = await PDF.findById(pdfId);
        if (!pdf) return res.status(404).json({ message: 'PDF not found' });

        // Read and extract text from the PDF
        const dataBuffer = fs.readFileSync(pdf.filePath);
        const data = await pdfParse(dataBuffer);
        
        console.log('Extracted text from PDF, passing to AI...');
        
        // Generate AI response
        const aiResponse = await generateAIResponse(`${data.text}\n\nQuestion: ${question}`);

        res.json({ answer: aiResponse });
    } catch (err) {
        console.error('Error in AI Q&A:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { askAI };
