// frontend/src/pages/Preferences.js

import React, { useState } from 'react';

const Preferences = () => {
    const [preferences, setPreferences] = useState({
        favoriteTopics: [],
        learningStyle: 'textual',
        aiPersonality: 'fun'
    });

    const handleChange = (e) => {
        setPreferences({ ...preferences, [e.target.name]: e.target.value });
    };

    const savePreferences = () => {
        console.log('User preferences saved:', preferences);
        alert('Preferences saved successfully!');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">User Preferences</h1>
            <label className="mb-2">Favorite Topics (Comma Separated):</label>
            <input
                type="text"
                name="favoriteTopics"
                className="p-2 border rounded w-80 mb-4"
                onChange={handleChange}
                placeholder="e.g. Math, Science, History"
            />
            <label className="mb-2">Learning Style:</label>
            <select name="learningStyle" className="p-2 border rounded w-80 mb-4" onChange={handleChange}>
                <option value="textual">Textual</option>
                <option value="visual">Visual</option>
                <option value="interactive">Interactive</option>
            </select>
            <label className="mb-2">AI Personality:</label>
            <select name="aiPersonality" className="p-2 border rounded w-80 mb-4" onChange={handleChange}>
                <option value="fun">Fun</option>
                <option value="formal">Formal</option>
                <option value="engaging">Engaging</option>
            </select>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={savePreferences}>
                Save Preferences
            </button>
        </div>
    );
};

export default Preferences;
