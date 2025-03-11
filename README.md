# AI Tutor - Your Interactive Learning Assistant

AI Tutor is an AI-powered web application designed to provide an interactive learning experience. Users can upload PDFs, ask questions, and receive AI-generated responses in text, images, and voice formats. The AI comes with an engaging personality, adaptive learning features, and real-time interaction capabilities.

## Features
- 📚 **PDF Upload & AI-Powered Q&A** - Upload documents and ask questions for instant AI-generated answers.
- 🗣️ **Voice Interaction** - AI can speak responses and take voice commands.
- 🤖 **Expressive AI Avatar** - Animated avatar reacts with emotions like happy, confused, and excited.
- ⚡ **Real-Time Responses** - Uses WebSockets for fast and interactive communication.
- 🎨 **Customizable UI** - Dark mode and UI preferences for user comfort.
- 🧠 **Adaptive Learning** - AI remembers user preferences and tailors responses accordingly.
- 🎯 **Gamified Learning** - AI gives hints and quizzes to reinforce learning.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB / PostgreSQL
- **AI & NLP**: OpenAI API, Speech-to-Text, Text-to-Speech
- **Real-Time Communication**: WebSockets

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- MongoDB (if using a local database)

### Steps
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/ai-tutor.git
   cd ai-tutor
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and configure the following:
   ```env
   OPENAI_API_KEY=your-api-key
   DATABASE_URL=your-database-url
   ```
4. **Run the Development Server**
   ```sh
   npm run dev
   ```
5. **Open the App**
   Navigate to `http://localhost:3000` in your browser.

## Contributing
Feel free to fork the repository and submit pull requests. We welcome contributions that improve the AI's functionality, UI, and learning experience.

## License
This project is licensed under the MIT License.

---
🚀 **AI Tutor - Making Learning Fun & Interactive!**

