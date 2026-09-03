import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Mitra AI Assistant"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-900 text-white shadow-xl transition-all hover:scale-105 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
      >
        <MessageCircle size={28} aria-hidden="true" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex h-[32rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
      <div className="flex items-center justify-between bg-green-900 px-4 py-3 text-white">
        <h2 className="text-sm font-semibold tracking-wide">Mitra AI Assistant</h2>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close Mitra AI Assistant"
          className="rounded-full p-1 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4">
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-relaxed text-gray-700 shadow-sm">
          Hi! I am Mitra, your smart travel agent. Where are we exploring today?
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white p-3">
        <div className="flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2 focus-within:border-green-700 focus-within:ring-2 focus-within:ring-green-100">
          <input
            type="text"
            placeholder="Ask Mitra about your trip..."
            className="flex-1 border-none bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
          <button
            type="button"
            aria-label="Send message"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900 text-white transition-colors hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
          >
            <Send size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}