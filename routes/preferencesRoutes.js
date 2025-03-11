// backend/routes/preferencesRoutes.js

const express = require('express');
const { updatePreferences, getPreferences } = require('../controllers/preferencesController');
const router = express.Router();

console.log('Preferences Routes Initialized');

// Route to update user preferences
router.put('/update', updatePreferences);

// Route to get user preferences
router.get('/:userId', getPreferences);

module.exports = router;
