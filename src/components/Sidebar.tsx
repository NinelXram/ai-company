
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  FileText, 
  Users, 
  ShoppingCart, 
  Settings, 
  LogOut, 
  User,
  LayoutDashboard
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data - in a real app, this would come from API/context
const modules = [
  { id: 'chatbot', name: 'Chatbot', icon: MessageSquare },
  { id: 'document', name: 'Document', icon: FileText },
  { id: 'hrm', name: 'HRM', icon: Users },
  { id: 'sales', name: 'Mua bán', icon: ShoppingCart },
];

interface SidebarProps {
  isAdmin?: boolean;
  companyName?: string;
  companyLogo?: string;
  activeModule?: string;
  onModuleSelect: (moduleId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isAdmin = false, 
  companyName = "AI Company", 
  companyLogo = "/placeholder.svg",
  activeModule,
  onModuleSelect
}) => {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Company Logo and Name */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img 
            src={companyLogo} 
            alt={companyName} 
            className="w-10 h-10 object-contain" 
          />
          <h1 className="text-xl font-semibold truncate">{companyName}</h1>
        </div>
      </div>

      {/* Modules List */}
      <div className="flex-1 overflow-auto p-4">
        <h2 className="text-aiTextSecondary text-base font-medium mb-4 px-2">Modules</h2>
        <nav className="space-y-2">
          {modules.map((module) => (
            <Button
              key={module.id}
              variant="ghost"
              className={`w-full justify-start text-lg font-normal h-12 ${
                activeModule === module.id ? 'bg-aiPrimary/10 text-aiPrimary font-medium' : ''
              }`}
              onClick={() => onModuleSelect(module.id)}
            >
              <module.icon className="mr-3 h-5 w-5" />
              {module.name}
            </Button>
          ))}
        </nav>
      </div>

      {/* Admin Dashboard Button */}
      {isAdmin && (
        <div className="p-4 border-t border-gray-200">
          <Link to="/admin">
            <Button 
              variant="outline" 
              className="w-full justify-start text-lg h-12"
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              Admin Dashboard
            </Button>
          </Link>
        </div>
      )}

      {/* User Account */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-aiPrimary/10 flex items-center justify-center text-aiPrimary">
              <User className="h-5 w-5" />
            </div>
            <div className="ml-3">
              <p className="text-base font-medium">User Name</p>
              <p className="text-sm text-aiTextSecondary">user@example.com</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
