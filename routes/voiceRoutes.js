// backend/routes/voiceRoutes.js

const express = require('express');
const { convertTextToSpeech } = require('../services/ttsService');
const { convertSpeechToText } = require('../services/sttService');
const router = express.Router();

console.log('Voice Routes Initialized');

// TTS Route
router.post('/tts', async (req, res) => {
    try {
        const { text } = req.body;
        console.log('Received TTS request:', text);
        const filePath = await convertTextToSpeech(text);
        res.json({ audioFile: filePath });
    } catch (err) {
        res.status(500).json({ message: 'TTS Error' });
    }
});

// STT Route
router.post('/stt', async (req, res) => {
    try {
        const { audioFilePath } = req.body;
        console.log('Received STT request:', audioFilePath);
        const transcription = await convertSpeechToText(audioFilePath);
        res.json({ text: transcription });
    } catch (err) {
        res.status(500).json({ message: 'STT Error' });
    }
});

module.exports = router;
