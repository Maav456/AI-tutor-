// frontend/src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';
import Preferences from './pages/Preferences';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import { AIProvider } from './context/AIContext';
import { PDFProvider } from './context/PDFContext';
import { PreferencesProvider } from './context/PreferencesContext';
import './styles/global.css';

const App = () => {
    return (
        <AuthProvider>
            <AIProvider>
                <PDFProvider>
                    <PreferencesProvider>
                        {/* ❌ REMOVED <Router> */}
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/chat" element={<Chat />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/preferences" element={<Preferences />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </Routes>
                    </PreferencesProvider>
                </PDFProvider>
            </AIProvider>
        </AuthProvider>
    );
};

export default App;
