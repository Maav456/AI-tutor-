// backend/models/PDF.js

const mongoose = require('mongoose');

const PDFSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    filePath: { type: String, required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    uploadedAt: { type: Date, default: Date.now },
});

console.log('PDF model initialized');

module.exports = mongoose.model('PDF', PDFSchema);
