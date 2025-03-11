// frontend/src/pages/Chat.js
// import React, { useState } from 'react';

// const Chat = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');

//     const sendMessage = () => {
//         if (input.trim() !== '') {
//             setMessages([...messages, { text: input, sender: 'user' }]);
//             setInput('');
            
//             // Simulate AI response
//             setTimeout(() => {
//                 setMessages(prev => [...prev, { text: 'This is an AI response.', sender: 'ai' }]);
//             }, 1000);
//         }
//     };

//     return (
//         <div className="flex flex-col h-screen p-4 bg-gray-100">
//             <div className="flex-1 overflow-auto mb-4 p-4 bg-white rounded shadow">
//                 {messages.map((msg, index) => (
//                     <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
//                         <span className={msg.sender === 'user' ? 'bg-blue-500 text-white p-2 rounded' : 'bg-gray-300 p-2 rounded'}>
//                             {msg.text}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//             <div className="flex">
//                 <input 
//                     type="text" 
//                     className="flex-1 p-2 border rounded-l" 
//                     value={input} 
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder="Type your question..." 
//                 />
//                 <button 
//                     className="px-4 bg-blue-500 text-white rounded-r" 
//                     onClick={sendMessage}
//                 >
//                     Send
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Chat;

// frontend/src/pages/Chat.js
import React, { useState, useEffect, useRef } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messageListRef = useRef(null);

    useEffect(() => {
        // Scroll to bottom when new messages are added
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, [messages]);


    const sendMessage = () => {
        if (input.trim() !== '') {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');

            // Simulate AI response (replace with actual API call)
            setTimeout(() => {
                setMessages(prev => [...prev, { text: 'This is an AI response.', sender: 'ai' }]);
            }, 1000);
        }
    };

    return (
        <div className="flex flex-col h-screen p-4 bg-gray-900 text-white dark:bg-gray-900 dark:text-white"> {/* Dark mode styles */}
            <div className="flex-1 overflow-auto mb-4 p-4 bg-gray-800 rounded shadow dark:bg-gray-800 dark:shadow-inner" ref={messageListRef}> {/* Dark mode bg, ref for scrolling */}
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 dark:bg-gray-700 dark:text-gray-300'}`}> {/* Dark mode message styles */}
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex">
                <input
                    type="text"
                    className="flex-1 p-2 border rounded-l bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                />
                <button
                    className="px-4 bg-blue-600 text-white rounded-r hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700" 
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
