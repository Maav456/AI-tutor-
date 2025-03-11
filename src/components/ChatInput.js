// frontend/src/components/ChatInput.js

import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div className="flex p-2 bg-white border-t">
            <input
                type="text"
                className="flex-1 p-2 border rounded-l"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="px-4 bg-blue-500 text-white rounded-r" onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatInput;
