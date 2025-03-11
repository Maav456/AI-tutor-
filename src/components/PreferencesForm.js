// frontend/src/components/PreferencesForm.js

import React, { useState } from 'react';

const PreferencesForm = ({ onSave }) => {
    const [preferences, setPreferences] = useState({
        favoriteTopics: '',
        learningStyle: 'textual',
        aiPersonality: 'fun'
    });

    const handleChange = (e) => {
        setPreferences({ ...preferences, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        onSave(preferences);
    };

    return (
        <div className="p-4 border rounded bg-white">
            <label className="block mb-2">Favorite Topics (Comma Separated):</label>
            <input
                type="text"
                name="favoriteTopics"
                className="p-2 border rounded w-full mb-4"
                onChange={handleChange}
                placeholder="e.g. Math, Science, History"
            />
            <label className="block mb-2">Learning Style:</label>
            <select name="learningStyle" className="p-2 border rounded w-full mb-4" onChange={handleChange}>
                <option value="textual">Textual</option>
                <option value="visual">Visual</option>
                <option value="interactive">Interactive</option>
            </select>
            <label className="block mb-2">AI Personality:</label>
            <select name="aiPersonality" className="p-2 border rounded w-full mb-4" onChange={handleChange}>
                <option value="fun">Fun</option>
                <option value="formal">Formal</option>
                <option value="engaging">Engaging</option>
            </select>
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition w-full" onClick={handleSave}>
                Save Preferences
            </button>
        </div>
    );
};

export default PreferencesForm;
