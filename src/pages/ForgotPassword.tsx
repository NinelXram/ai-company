
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call to send a reset email
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-aiBackground p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {!submitted ? (
          <>
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold">Quên mật khẩu</h1>
              <p className="text-aiTextSecondary mt-2">
                Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              <Button 
                type="submit" 
                className="w-full h-14 text-lg bg-aiPrimary hover:bg-aiPrimary/90"
              >
                Gửi hướng dẫn
              </Button>
            </form>

            <div className="mt-6">
              <Link 
                to="/login"
                className="block text-center text-aiPrimary hover:underline text-lg"
              >
                Quay lại đăng nhập
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center space-y-6 py-8">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold">Email đã được gửi</h2>
            <p className="text-lg text-aiTextSecondary">
              Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu đến email {email}.
              Vui lòng kiểm tra hộp thư đến của bạn.
            </p>
            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
              <p className="text-base text-yellow-700">
                Nếu bạn không nhận được email, vui lòng kiểm tra thư mục spam hoặc
                <a href="#" className="text-aiPrimary hover:underline ml-1">
                  liên hệ bộ phận hỗ trợ
                </a>.
              </p>
            </div>
            <Link to="/login">
              <Button 
                variant="outline" 
                className="mt-4 h-14 text-lg border-aiPrimary text-aiPrimary hover:bg-aiPrimary/10"
              >
                Quay lại đăng nhập
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
