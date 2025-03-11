// backend/models/UserPreferences.js

const mongoose = require('mongoose');

const UserPreferencesSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    favoriteTopics: [{ type: String }],
    learningStyle: { type: String, enum: ['visual', 'textual', 'interactive'], default: 'textual' },
    aiPersonality: { type: String, enum: ['fun', 'formal', 'engaging'], default: 'fun' }
}, { timestamps: true });

console.log('UserPreferences model initialized');

module.exports = mongoose.model('UserPreferences', UserPreferencesSchema);
