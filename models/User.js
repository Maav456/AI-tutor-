// backend/models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

console.log('User model initialized');

module.exports = mongoose.model('User', UserSchema);
