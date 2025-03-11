// frontend/src/components/PDFUploader.js

import React, { useState } from 'react';

const PDFUploader = ({ onUpload }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (file) {
            onUpload(file);
            setFile(null);
        }
    };

    return (
        <div className="p-4 border rounded bg-white">
            <input type="file" accept="application/pdf" onChange={handleFileChange} className="mb-2" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleUpload} disabled={!file}>
                Upload PDF
            </button>
        </div>
    );
};

export default PDFUploader;
