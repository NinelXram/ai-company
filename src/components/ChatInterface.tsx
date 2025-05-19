
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Send, Copy, Bookmark, ExternalLink } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import TagSelector from './TagSelector';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  source?: string;
}

interface ChatInterfaceProps {
  moduleName?: string;
  initialMessages?: Message[];
}

// Sample tag data - in a real app, this would come from API/context
const tags = [
  { id: 'document', name: 'Document' },
  { id: 'txng', name: 'TXNG' },
  { id: 'hrm', name: 'HRM' },
  { id: 'sales', name: 'Mua bán' },
];

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  moduleName = "AI Assistant",
  initialMessages = []
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `This is a simulated response to: "${input}"`,
        sender: 'ai',
        timestamp: new Date(),
        source: activeTag ? `Source: ${activeTag} database` : 'Source: External Knowledge',
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Chat Header */}
      <div className="border-b border-gray-200 p-4">
        <h1 className="text-xl font-semibold">{moduleName}</h1>
        <TagSelector 
          tags={tags} 
          activeTag={activeTag} 
          onChange={setActiveTag} 
        />
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-aiTextSecondary">
            <p className="text-xl mb-4">Bắt đầu cuộc hội thoại với AI</p>
            <p className="text-lg">Nhập câu hỏi bên dưới để bắt đầu...</p>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className="flex flex-col">
              <div className={message.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}>
                <p className="text-lg">{message.content}</p>
                
                {message.source && (
                  <p className="text-sm mt-2 text-aiTextSecondary">
                    {message.source}
                  </p>
                )}
              </div>
              
              {/* Message Actions */}
              {message.sender === 'ai' && (
                <div className="flex gap-2 mt-2 ml-2">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Copy className="h-4 w-4 mr-1" />
                    <span className="text-sm">Copy</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Bookmark className="h-4 w-4 mr-1" />
                    <span className="text-sm">Bookmark</span>
                  </Button>
                  {message.source && (
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span className="text-sm">View Source</span>
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
      
      {/* Chat Input */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-start gap-2">
          <Textarea
            placeholder="Nhập câu hỏi cho AI..."
            className="min-h-input-height text-lg p-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-aiPrimary hover:bg-aiPrimary/90 h-input-height w-input-height p-0"
            disabled={!input.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
