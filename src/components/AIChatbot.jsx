import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        // Floating Action Button
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-800 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-transform transform hover:scale-105 flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </button>
      ) : (
        // Chat Window Container
        <div className="w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col h-[400px]">
          
          {/* Header */}
          <div className="bg-green-800 text-white px-4 py-3 flex justify-between items-center rounded-t-xl">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <h3 className="font-semibold text-sm sm:text-base">Mitra AI Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-green-700 p-1 rounded-md transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Middle Section (Scrollable Chat) */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 text-gray-800 p-3 rounded-2xl rounded-tl-sm shadow-sm text-sm max-w-[85%] leading-relaxed">
                Hi! I am Mitra, your smart travel agent. Where are we exploring today?
              </div>
            </div>
          </div>

          {/* Bottom Input Area */}
          <div className="p-3 border-t border-gray-200 bg-white rounded-b-xl flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
            />
            <button className="bg-green-800 text-white p-2 flex items-center justify-center rounded-lg hover:bg-green-700 transition-colors">
              <Send size={18} />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default AIChatbot;