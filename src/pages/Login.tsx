
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would make an API call to authenticate
    // For now, we'll just navigate to the main page
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-aiBackground p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="mb-8 text-center">
          <img
            src="/placeholder.svg"
            alt="Company Logo"
            className="mx-auto h-16 w-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Đăng nhập</h1>
          <p className="text-aiTextSecondary mt-2">
            Đăng nhập để tiếp tục sử dụng hệ thống
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@company.com"
              className="h-14 text-lg p-4"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-lg">
                Mật khẩu
              </Label>
              <a 
                href="/forgot-password"
                className="text-aiPrimary text-base hover:underline"
              >
                Quên mật khẩu?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-14 text-lg p-4"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(!!checked)}
            />
            <Label htmlFor="remember" className="text-base cursor-pointer">
              Ghi nhớ đăng nhập
            </Label>
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 text-lg bg-aiPrimary hover:bg-aiPrimary/90"
          >
            Đăng nhập
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-aiTextSecondary">
            Không thể đăng nhập?{" "}
            <a href="#" className="text-aiPrimary hover:underline">
              Liên hệ hỗ trợ
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
