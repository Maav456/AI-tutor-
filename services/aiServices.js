// backend/services/aiService.js

const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

console.log('Initializing AI Service...');

// Configure OpenAI API
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

// Function to generate AI response
const generateAIResponse = async (text) => {
    try {
        console.log('Generating AI response for:', text);
        const response = await openai.createChatCompletion({
            model: 'gpt-4',
            messages: [{ role: 'system', content: 'You are an intelligent tutor providing helpful explanations.' },
                       { role: 'user', content: text }],
        });
        
        const answer = response.data.choices[0].message.content;
        console.log('AI Response:', answer);
        return answer;
    } catch (err) {
        console.error('Error generating AI response:', err.message);
        throw new Error('AI Service Error');
    }
};

module.exports = { generateAIResponse };
