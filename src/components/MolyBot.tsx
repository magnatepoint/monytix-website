import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const MolyBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm MolyBot, your AI financial assistant. I can help you understand MONYTIX features, answer financial questions, or provide personalized money advice. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "How does MONYTIX work?",
    "Tell me about budgeting",
    "What security measures do you have?",
    "How much does it cost?",
    "Can you help me save money?"
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('budget') || message.includes('budgeting')) {
      return "BudgetPilot is our AI-powered budgeting tool! It analyzes your spending history to create personalized budget plans. It offers smart recommendations you can customize anytime, with real-time insights to keep you on track. Would you like to know more about any specific budgeting features?";
    }
    
    if (message.includes('security') || message.includes('safe')) {
      return "Security is our top priority! We use 256-bit SSL encryption, are SOC 2 Type II certified, and maintain bank-level security standards. We only have read-only access to your accounts - we never move or access your money. Your data stays yours and we never sell it.";
    }
    
    if (message.includes('cost') || message.includes('price') || message.includes('free')) {
      return "MONYTIX offers flexible pricing to suit everyone's needs. We have a free tier to get you started, and our premium plans unlock advanced AI features and unlimited access to all tools. Would you like me to explain the different plan options?";
    }
    
    if (message.includes('save') || message.includes('saving')) {
      return "Great question! Our users typically save 15-25% more with MONYTIX. SaveTrack helps you set personalized goals, SpendSense identifies money-saving opportunities, and our AI provides smart recommendations. Plus, SmartRewards gives you points for hitting your goals!";
    }
    
    if (message.includes('how') && message.includes('work')) {
      return "MONYTIX connects to your financial accounts (read-only) and uses our MOLYTIX AI engine to analyze your money patterns. We provide personalized insights, automated budgeting, smart savings recommendations, and help you reach your financial goals faster. Think of it as having a personal financial advisor powered by AI!";
    }
    
    if (message.includes('features') || message.includes('tools')) {
      return "We have 12+ integrated financial tools! Including Molytix Console (dashboard), BudgetPilot (budgeting), SpendSense (expense tracking), SaveTrack (savings goals), MolyLearn (financial education), and more. Each tool is powered by AI to give you personalized insights. What area interests you most?";
    }
    
    return "That's a great question! I'm here to help you understand how MONYTIX can improve your financial life. You can ask me about our features, security, pricing, or general financial advice. Is there something specific you'd like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-gradient-to-r from-primary-600 to-accent-500 text-white p-4 rounded-full shadow-2xl z-50 hover:shadow-3xl transition-shadow"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={!isOpen ? { 
          boxShadow: ['0 10px 25px rgba(59, 130, 246, 0.3)', '0 10px 35px rgba(59, 130, 246, 0.5)', '0 10px 25px rgba(59, 130, 246, 0.3)']
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-4 right-4 w-full max-w-sm sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 mx-4 sm:mx-0"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">MolyBot</h3>
                  <p className="text-xs opacity-90">AI Financial Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`p-2 rounded-full ${
                      message.sender === 'user' 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                    </div>
                    <div className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-100 text-gray-600 p-2 rounded-full">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-gray-100">
                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.slice(0, 3).map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about MONYTIX..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MolyBot; 