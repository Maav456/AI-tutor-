// backend/services/ttsService.js

const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
require('dotenv').config();

console.log('Initializing TTS Service...');

const client = new textToSpeech.TextToSpeechClient();

const convertTextToSpeech = async (text) => {
    try {
        console.log('Converting text to speech:', text);
        const request = {
            input: { text },
            voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
            audioConfig: { audioEncoding: 'MP3' },
        };

        const [response] = await client.synthesizeSpeech(request);
        const writeFile = util.promisify(fs.writeFile);
        const filePath = `tts_output_${Date.now()}.mp3`;
        await writeFile(filePath, response.audioContent, 'binary');
        console.log('TTS output saved as:', filePath);

        return filePath;
    } catch (err) {
        console.error('Error in TTS conversion:', err.message);
        throw new Error('TTS Service Error');
    }
};

module.exports = { convertTextToSpeech };
