// backend/controllers/preferencesController.js

const User = require('../models/User');

console.log('Preferences Controller Loaded');

// Update user preferences
const updateUserPreferences = async (req, res) => {
    try {
        const { userId, favoriteTopics, learningStyle, aiPersonality } = req.body;
        console.log(`Updating preferences for user: ${userId}`);
        
        const updatedUser = await User.findByIdAndUpdate(userId, {
            'preferences.favoriteTopics': favoriteTopics,
            'preferences.learningStyle': learningStyle,
            'preferences.aiPersonality': aiPersonality,
        }, { new: true });

        res.json({ message: 'Preferences updated successfully', preferences: updatedUser.preferences });
    } catch (err) {
        console.error('Error updating preferences:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get user preferences
const getUserPreferences = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log(`Fetching preferences for user: ${userId}`);
        
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({ preferences: user.preferences });
    } catch (err) {
        console.error('Error fetching preferences:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { updateUserPreferences, getUserPreferences };
