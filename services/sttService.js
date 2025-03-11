// backend/services/sttService.js

const speech = require('@google-cloud/speech');
const fs = require('fs');
require('dotenv').config();

console.log('Initializing STT Service...');

const client = new speech.SpeechClient();

const convertSpeechToText = async (audioFilePath) => {
    try {
        console.log('Processing audio file for STT:', audioFilePath);
        const file = fs.readFileSync(audioFilePath);
        const audioBytes = file.toString('base64');

        const request = {
            audio: { content: audioBytes },
            config: { encoding: 'MP3', sampleRateHertz: 16000, languageCode: 'en-US' },
        };

        const [response] = await client.recognize(request);
        const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');
        console.log('STT Output:', transcription);

        return transcription;
    } catch (err) {
        console.error('Error in STT conversion:', err.message);
        throw new Error('STT Service Error');
    }
};

module.exports = { convertSpeechToText };
