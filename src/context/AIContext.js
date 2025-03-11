// frontend/src/context/AIContext.js

import { createContext, useState } from 'react';
import { askAI } from '../services/aiService';

export const AIContext = createContext();

export const AIProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async (pdfId, question) => {
        setLoading(true);
        setMessages((prev) => [...prev, { text: question, sender: 'user' }]);

        try {
            const response = await askAI(pdfId, question);
            setMessages((prev) => [...prev, { text: response.answer, sender: 'ai' }]);
        } catch (error) {
            console.error('AI Chat error:', error);
        }

        setLoading(false);
    };

    return (
        <AIContext.Provider value={{ messages, sendMessage, loading }}>
            {children}
        </AIContext.Provider>
    );
};
