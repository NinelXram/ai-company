
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Users,
  FileText,
  BarChart3,
  Settings,
  Upload,
  Save,
  ArrowLeft,
  UserPlus,
  Database,
  Clock,
  Shield
} from 'lucide-react';

const AdminDashboard = () => {
  const [companyName, setCompanyName] = useState('AI Company Name');
  const [logo, setLogo] = useState('/placeholder.svg');

  // Mock state for company configuration
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setLogo(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-aiBackground">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="h-6 w-6 mr-2" />
              <span className="text-lg">Quay lại ứng dụng</span>
            </Link>
          </div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <div className="bg-white rounded-xl p-4">
            <TabsList className="grid grid-cols-4 gap-4 h-auto">
              <TabsTrigger value="dashboard" className="text-lg py-3">
                <BarChart3 className="h-5 w-5 mr-2" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="users" className="text-lg py-3">
                <Users className="h-5 w-5 mr-2" />
                Quản lý người dùng
              </TabsTrigger>
              <TabsTrigger value="modules" className="text-lg py-3">
                <Database className="h-5 w-5 mr-2" />
                Quản lý modules
              </TabsTrigger>
              <TabsTrigger value="logs" className="text-lg py-3">
                <Clock className="h-5 w-5 mr-2" />
                Nhật ký & Phân tích
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Dashboard Content */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Tổng số người dùng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">45</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Tổng số tài liệu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">128</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Module phổ biến nhất</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">Document</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Cấu hình công ty</CardTitle>
                <CardDescription>
                  Thông tin này sẽ hiển thị trên giao diện người dùng
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name" className="text-lg">Tên công ty</Label>
                    <Input
                      id="company-name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company-logo" className="text-lg">Logo công ty</Label>
                    <div className="flex items-center gap-4">
                      <img 
                        src={logo} 
                        alt="Company Logo" 
                        className="w-20 h-20 object-contain border rounded-lg p-1"
                      />
                      <div>
                        <Button asChild className="bg-aiPrimary hover:bg-aiPrimary/90">
                          <label htmlFor="logo-upload" className="cursor-pointer">
                            <Upload className="h-5 w-5 mr-2" />
                            Upload Logo
                            <input
                              id="logo-upload"
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleLogoChange}
                            />
                          </label>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Preview</h3>
                  <div className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex items-center gap-3">
                      <img 
                        src={logo} 
                        alt={companyName} 
                        className="w-10 h-10 object-contain" 
                      />
                      <h2 className="text-xl font-semibold">{companyName}</h2>
                    </div>
                  </div>
                </div>

                <Button className="bg-aiPrimary hover:bg-aiPrimary/90">
                  <Save className="h-5 w-5 mr-2" />
                  Lưu thay đổi
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Management Content */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Quản lý người dùng</CardTitle>
                  <CardDescription>
                    Tạo và quản lý tài khoản người dùng
                  </CardDescription>
                </div>
                <Button className="bg-aiPrimary hover:bg-aiPrimary/90">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Tạo người dùng
                </Button>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 text-aiTextSecondary">
                      <tr>
                        <th className="py-3 px-4 text-left text-lg font-medium">Tên</th>
                        <th className="py-3 px-4 text-left text-lg font-medium">Email</th>
                        <th className="py-3 px-4 text-left text-lg font-medium">Vai trò</th>
                        <th className="py-3 px-4 text-left text-lg font-medium">Bộ phận</th>
                        <th className="py-3 px-4 text-left text-lg font-medium">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-4 px-4 text-lg">Nguyễn Văn A</td>
                        <td className="py-4 px-4">nguyenvana@example.com</td>
                        <td className="py-4 px-4">Admin</td>
                        <td className="py-4 px-4">Nhân sự</td>
                        <td className="py-4 px-4">
                          <Button variant="outline" size="sm">Edit</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-lg">Trần Thị B</td>
                        <td className="py-4 px-4">tranthib@example.com</td>
                        <td className="py-4 px-4">Quản lý</td>
                        <td className="py-4 px-4">Thu mua</td>
                        <td className="py-4 px-4">
                          <Button variant="outline" size="sm">Edit</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-lg">Lê Văn C</td>
                        <td className="py-4 px-4">levanc@example.com</td>
                        <td className="py-4 px-4">Nhân viên</td>
                        <td className="py-4 px-4">Xưởng</td>
                        <td className="py-4 px-4">
                          <Button variant="outline" size="sm">Edit</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Modules Management Content */}
          <TabsContent value="modules" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quản lý modules</CardTitle>
                <CardDescription>
                  Cấu hình và quản lý các module trong hệ thống
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-aiPrimary" />
                        <div>
                          <h3 className="text-xl font-medium">Document Agent</h3>
                          <p className="text-base text-aiTextSecondary">Quản lý và tìm kiếm tài liệu nội bộ</p>
                        </div>
                      </div>
                      <Button variant="outline" className="text-base">
                        <Settings className="h-5 w-5 mr-2" />
                        Cấu hình
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Database className="h-8 w-8 text-aiPrimary" />
                        <div>
                          <h3 className="text-xl font-medium">TXNG Agent</h3>
                          <p className="text-base text-aiTextSecondary">Quản lý dữ liệu TXNG</p>
                        </div>
                      </div>
                      <Button variant="outline" className="text-base">
                        <Settings className="h-5 w-5 mr-2" />
                        Cấu hình
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Shield className="h-8 w-8 text-aiPrimary" />
                        <div>
                          <h3 className="text-xl font-medium">External Resource Agent</h3>
                          <p className="text-base text-aiTextSecondary">Cấu hình nguồn external và kiểm soát truy cập</p>
                        </div>
                      </div>
                      <Button variant="outline" className="text-base">
                        <Settings className="h-5 w-5 mr-2" />
                        Cấu hình
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Logs & Analytics Content */}
          <TabsContent value="logs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Nhật ký & Phân tích</CardTitle>
                <CardDescription>
                  Theo dõi hoạt động và phân tích sử dụng hệ thống
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-4">Truy vấn gần đây</h3>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="text-base font-medium">User{i}@example.com</p>
                            <p className="text-sm text-aiTextSecondary">Hỏi về chính sách nghỉ phép</p>
                          </div>
                          <div className="text-sm text-aiTextSecondary">2 giờ trước</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-4">Tài liệu được truy vấn nhiều nhất</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="text-base font-medium">Chính sách nghỉ phép 2023</p>
                          <p className="text-sm text-aiTextSecondary">28 lượt truy vấn</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="text-base font-medium">Quy trình ISO 9001</p>
                          <p className="text-sm text-aiTextSecondary">22 lượt truy vấn</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-4">Thống kê AI usage</h3>
                    <div className="h-64 border rounded-lg flex items-center justify-center">
                      <p className="text-aiTextSecondary">Biểu đồ thống kê sẽ hiển thị tại đây</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
