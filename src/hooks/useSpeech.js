// frontend/src/hooks/useSpeech.js

import { useState } from 'react';
import { convertTextToSpeech } from '../services/voiceService';

const useSpeech = () => {
    const [audioUrl, setAudioUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const speakText = async (text) => {
        setLoading(true);
        try {
            const response = await convertTextToSpeech(text);
            setAudioUrl(response.audioFile);
        } catch (error) {
            console.error('TTS Error:', error);
        }
        setLoading(false);
    };

    return { audioUrl, speakText, loading };
};

export default useSpeech;
