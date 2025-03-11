// frontend/src/context/PDFContext.js

import { createContext, useState } from 'react';
import { uploadPDF, extractText } from '../services/pdfService';

export const PDFContext = createContext();

export const PDFProvider = ({ children }) => {
    const [uploadedPDF, setUploadedPDF] = useState(null);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleUpload = async (file) => {
        setLoading(true);
        try {
            const response = await uploadPDF(file);
            setUploadedPDF(response.pdf);
        } catch (error) {
            console.error('PDF Upload Error:', error);
        }
        setLoading(false);
    };

    const handleExtractText = async (pdfId) => {
        setLoading(true);
        try {
            const response = await extractText(pdfId);
            setText(response.text);
        } catch (error) {
            console.error('Text Extraction Error:', error);
        }
        setLoading(false);
    };

    return (
        <PDFContext.Provider value={{ uploadedPDF, text, handleUpload, handleExtractText, loading }}>
            {children}
        </PDFContext.Provider>
    );
};
