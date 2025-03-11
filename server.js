// backend/server.js

const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const pdfRoutes = require('./routes/pdfRoutes');
const aiRoutes = require('./routes/aiRoutes');
require('dotenv').config();

console.log('Initializing server...');

// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Middleware
console.log('Setting up middleware...');
app.use(cors());
app.use(express.json());

// Connect Database
console.log('Connecting to MongoDB...');
connectDB();

// Routes
console.log('Initializing routes...');
app.use('/api/auth', authRoutes);
app.use('/api/pdf', pdfRoutes);
app.use('/api/ai', aiRoutes);

// WebSocket Connection
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on('message', (data) => {
        console.log(`Message received from ${socket.id}:`, data);
        socket.emit('response', { text: 'AI Response Placeholder' });
    });
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

// Default Route
app.get('/', (req, res) => {
    console.log('Received request at root endpoint');
    res.send('AI Tutor Backend Running');
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
