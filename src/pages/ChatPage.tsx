
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ChatInterface from '@/components/ChatInterface';

const ChatPage = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  
  // Mock admin state - in a real app, this would come from auth context
  const isAdmin = true;

  const handleModuleSelect = (moduleId: string) => {
    setActiveModule(moduleId);
  };

  const getModuleName = () => {
    if (!activeModule) return 'AI Assistant';
    
    switch (activeModule) {
      case 'chatbot': return 'Chatbot';
      case 'document': return 'Document';
      case 'hrm': return 'HRM';
      case 'sales': return 'Mua bán';
      default: return 'AI Assistant';
    }
  };

  return (
    <div className="flex h-screen bg-aiBackground">
      <Sidebar 
        isAdmin={isAdmin}
        activeModule={activeModule || undefined}
        onModuleSelect={handleModuleSelect}
      />
      <div className="flex-1 overflow-hidden">
        <ChatInterface moduleName={getModuleName()} />
      </div>
    </div>
  );
};

export default ChatPage;
