// frontend/src/hooks/usePreferences.js

import { useState, useEffect } from 'react';
import { getUserPreferences, updateUserPreferences } from '../services/preferencesService';

const usePreferences = (userId) => {
    const [preferences, setPreferences] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPreferences = async () => {
            try {
                const data = await getUserPreferences(userId);
                setPreferences(data.preferences);
            } catch (error) {
                console.error('Error fetching preferences:', error);
            }
            setLoading(false);
        };
        fetchPreferences();
    }, [userId]);

    const savePreferences = async (newPreferences) => {
        try {
            const data = await updateUserPreferences(userId, newPreferences);
            setPreferences(data.preferences);
        } catch (error) {
            console.error('Error saving preferences:', error);
        }
    };

    return { preferences, savePreferences, loading };
};

export default usePreferences;
