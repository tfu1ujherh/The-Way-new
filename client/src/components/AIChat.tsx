import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  Send, 
  X, 
  Minimize2, 
  Maximize2,
  Bot,
  User,
  Loader,
  Sparkles,
  Brain
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { aiChatAPI } from '../utils/api';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat = () => {
  const { isAuthenticated, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAuthenticated && isOpen && messages.length === 0) {
      loadInitialMessage();
    }
  }, [isAuthenticated, isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadInitialMessage = () => {
    const welcomeMessage: Message = {
      id: '1',
      content: `Hello ${user?.name || 'there'}! 👋 I'm your AI career assistant powered by advanced technology. I can help you with:

• Career guidance and course selection
• Educational pathways after 10th, 12th, or graduation
• Government job opportunities and exam preparation
• Interview preparation and tips
• Skill development recommendations

What would you like to explore today?`,
      sender: 'ai',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await aiChatAPI.sendMessage(inputMessage);
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response.data.response.answer,
        sender: 'ai',
        timestamp: new Date(response.data.response.timestamp)
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('AI chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again later. You can also explore our other features like Pathways, Government Jobs, and Career Roadmaps!',
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const loadChatHistory = async () => {
    try {
      setIsLoading(true);
      const response = await aiChatAPI.getChatHistory({ page: 1, limit: 20 });
      const history = response.data.chatHistory.map((chat: any, index: number) => [
        {
          id: `user-${index}`,
          content: chat.question,
          sender: 'user' as const,
          timestamp: new Date(chat.timestamp)
        },
        {
          id: `ai-${index}`,
          content: chat.answer,
          sender: 'ai' as const,
          timestamp: new Date(chat.timestamp)
        }
      ]).flat().reverse();
      
      setMessages(history);
    } catch (error) {
      console.error('Load chat history error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 group"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Ask AI Assistant
        </div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-t-2xl">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h3 className="font-semibold flex items-center space-x-1">
              <span>AI Career Assistant</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </h3>
            <p className="text-xs text-emerald-100">Powered by Advanced AI • Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[480px] bg-gradient-to-b from-emerald-50/30 to-cyan-50/30">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Loader className="w-6 h-6 animate-spin text-emerald-600 mx-auto mb-2" />
                  <p className="text-slate-600 text-sm">Loading chat history...</p>
                </div>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white' 
                          : 'bg-gradient-to-r from-violet-500 to-purple-500 text-white'
                      }`}>
                        {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-br-sm'
                          : 'bg-white text-slate-900 rounded-bl-sm shadow-sm border border-slate-100'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-emerald-100' : 'text-slate-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-sm border border-slate-100">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 bg-white rounded-b-2xl">
            <div className="flex items-center space-x-2">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about careers, courses, exams, government jobs..."
                className="flex-1 resize-none border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                rows={1}
                style={{ minHeight: '40px', maxHeight: '100px' }}
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-2 rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2 flex items-center space-x-1">
              <Sparkles className="w-3 h-3" />
              <span>Press Enter to send • Shift+Enter for new line • Powered by Advanced AI</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default AIChat;