import React, { useState, useEffect } from "react";
import { 
  BarChart3, Users, Globe, Settings, Bell, Search,
  Plus, Edit3, Trash2, Eye, DollarSign, TrendingUp,
  Clock, CheckCircle, LogOut, Menu, X, ChevronDown,
  AlertCircle, MessageSquare, Calendar, Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  

  // Logout function
  const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  navigate("/login");
};

  // Admin User details
  const adminName = "Amir";
  const adminEmail = "amirdiscoveries@outlook.com";

  // Automation management states
  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: "Lead Generation Bot",
      type: "Telegram Bot",
      status: "active",
      triggers: ["New Contact", "Form Submission"],
      actions: ["Send Welcome Message", "Add to CRM"],
      createdDate: "2025-07-05",
      lastRun: "2025-07-10 08:30",
      runsToday: 45,
      successRate: 98.5,
      description: "Automatically captures leads from website forms and sends personalized welcome messages"
    },
    {
      id: 2,
      name: "Email Marketing Sequence",
      type: "Email Automation",
      status: "active",
      triggers: ["New Subscriber", "Purchase Complete"],
      actions: ["Send Email Series", "Tag Customer"],
      createdDate: "2025-06-15",
      lastRun: "2025-07-10 09:15",
      runsToday: 23,
      successRate: 95.2,
      description: "Sends targeted email sequences based on customer behavior and purchases"
    },
    {
      id: 3,
      name: "Social Media Poster",
      type: "Social Media",
      status: "paused",
      triggers: ["Scheduled Time", "New Blog Post"],
      actions: ["Post to Facebook", "Post to Instagram", "Post to Twitter"],
      createdDate: "2025-06-20",
      lastRun: "2025-07-09 18:00",
      runsToday: 0,
      successRate: 87.3,
      description: "Automatically posts content across multiple social media platforms"
    },
    {
      id: 4,
      name: "Invoice Reminder System",
      type: "Business Automation",
      status: "active",
      triggers: ["Invoice Due Date", "Payment Overdue"],
      actions: ["Send Reminder Email", "Update Status", "Notify Admin"],
      createdDate: "2025-05-10",
      lastRun: "2025-07-10 10:00",
      runsToday: 12,
      successRate: 92.8,
      description: "Automatically sends payment reminders and manages invoice status"
    },
    {
      id: 5,
      name: "Customer Support Bot",
      type: "Telegram Bot",
      status: "inactive",
      triggers: ["New Message", "Keyword Detected"],
      actions: ["Auto Reply", "Create Ticket", "Escalate to Human"],
      createdDate: "2025-07-01",
      lastRun: "2025-07-08 14:20",
      runsToday: 0,
      successRate: 89.1,
      description: "Provides automated customer support and ticket management"
    }
  ]);

  const [showAutomationModal, setShowAutomationModal] = useState(false);
  const [editingAutomation, setEditingAutomation] = useState(null);
  const [automationForm, setAutomationForm] = useState({
    name: '',
    type: '',
    status: 'active',
    triggers: [],
    actions: [],
    description: ''
  });

  // Automation types and options
  const automationTypes = [
    'Telegram Bot',
    'Email Automation',
    'Social Media',
    'Business Automation',
    'Lead Generation',
    'E-commerce',
    'Analytics',
    'Backup System'
  ];

  const triggerOptions = [
    'New Contact',
    'Form Submission',
    'New Subscriber',
    'Purchase Complete',
    'Scheduled Time',
    'New Blog Post',
    'Invoice Due Date',
    'Payment Overdue',
    'New Message',
    'Keyword Detected',
    'File Upload',
    'User Registration',
    'Cart Abandonment',
    'Low Stock Alert'
  ];

  const actionOptions = [
    'Send Welcome Message',
    'Add to CRM',
    'Send Email Series',
    'Tag Customer',
    'Post to Facebook',
    'Post to Instagram',
    'Post to Twitter',
    'Send Reminder Email',
    'Update Status',
    'Notify Admin',
    'Auto Reply',
    'Create Ticket',
    'Escalate to Human',
    'Generate Report',
    'Backup Data',
    'Send SMS',
    'Update Database',
    'Send Webhook'
  ];
const navigate = useNavigate();
  // Notifications data
  const notifications = [
    {
      id: 1,
      type: "order",
      title: "New Order Received",
      message: "Ali Hassan placed a new order for Telegram Bot",
      time: "2 minutes ago",
      unread: true,
      icon: DollarSign,
      color: "text-emerald-600"
    },
    {
      id: 2,
      type: "project",
      title: "Project Update",
      message: "TechStart Solutions project is ready for review",
      time: "1 hour ago",
      unread: true,
      icon: CheckCircle,
      color: "text-blue-600"
    },
    {
      id: 3,
      type: "message",
      title: "New Message",
      message: "Sara Mohamed sent you a message about the e-commerce site",
      time: "3 hours ago",
      unread: false,
      icon: MessageSquare,
      color: "text-purple-600"
    },
    {
      id: 4,
      type: "reminder",
      title: "Deadline Reminder",
      message: "Green Earth Co. project deadline is tomorrow",
      time: "5 hours ago",
      unread: false,
      icon: Clock,
      color: "text-amber-600"
    },
    {
      id: 5,
      type: "review",
      title: "Client Review",
      message: "Omar Khalil left a 5-star review for your service",
      time: "1 day ago",
      unread: false,
      icon: Star,
      color: "text-yellow-600"
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  // Menu items
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "automations", label: "Automations", icon: Settings },
    { id: "websites", label: "Websites", icon: Globe },
    { id: "orders", label: "Orders", icon: DollarSign },
    { id: "clients", label: "Clients", icon: Users }
  ];

  // Sample data with enhanced styling
  const stats = [
    { title: "Total Revenue", value: "$12,849", change: "+12.5%", icon: DollarSign, color: "bg-gradient-to-br from-emerald-50 to-emerald-100", iconColor: "text-emerald-600" },
    { title: "Active Projects", value: "8", change: "+2", icon: TrendingUp, color: "bg-gradient-to-br from-blue-50 to-blue-100", iconColor: "text-blue-600" },
    { title: "Pending Orders", value: "5", change: "-1", icon: Clock, color: "bg-gradient-to-br from-purple-50 to-purple-100", iconColor: "text-purple-600" },
    { title: "Happy Clients", value: "24", change: "+3", icon: CheckCircle, color: "bg-gradient-to-br from-indigo-50 to-indigo-100", iconColor: "text-indigo-600" }
  ];

  const recentOrders = [
    { id: 1, client: "Ali Hassan", service: "Telegram Bot", status: "completed", amount: "$49", date: "2025-07-09" },
    { id: 2, client: "Sara Mohamed", service: "E-commerce Site", status: "progress", amount: "$800", date: "2025-07-01" },
    { id: 3, client: "Omar Khalil", service: "Lead Automation", status: "pending", amount: "$120", date: "2025-06-28" },
    { id: 4, client: "Amir Discoveries", service: "Website Redesign", status: "completed", amount: "$1500", date: "2025-06-20" }
  ];

  const projects = [
    { id: 1, client: "AMIR Discoveries", type: "E-commerce + CMS", budget: "$1200", status: "progress", progress: 75 },
    { id: 2, client: "TechStart Solutions", type: "Portfolio Website", budget: "$450", status: "review", progress: 90 },
    { id: 3, client: "Green Earth Co.", type: "Business Website", budget: "$680", status: "planning", progress: 25 },
    { id: 4, client: "Global Innovations", type: "Mobile App Development", budget: "$3000", status: "progress", progress: 50 }
  ];

  // Filtered data based on search query
  const filteredOrders = recentOrders.filter(order =>
    order.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProjects = projects.filter(project =>
    project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Status badge component with new colors
  const StatusBadge = ({ status }) => {
    const statusMap = {
      completed: { text: "Completed", class: "bg-emerald-100 text-emerald-700 border border-emerald-200" },
      progress: { text: "In Progress", class: "bg-blue-100 text-blue-700 border border-blue-200" },
      pending: { text: "Pending", class: "bg-purple-100 text-purple-700 border border-purple-200" },
      review: { text: "Review", class: "bg-indigo-100 text-indigo-700 border border-indigo-200" },
      planning: { text: "Planning", class: "bg-slate-100 text-slate-700 border border-slate-200" }
    };
    
    return (
      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusMap[status]?.class || statusMap.pending.class}`}>
        {statusMap[status]?.text || status}
      </span>
    );
  };

  // Mark notification as read
  const markAsRead = (notificationId) => {
    console.log(`Marking notification ${notificationId} as read`);
  };

  // Automation CRUD functions
  const handleCreateAutomation = () => {
    setEditingAutomation(null);
    setAutomationForm({
      name: '',
      type: '',
      status: 'active',
      triggers: [],
      actions: [],
      description: ''
    });
    setShowAutomationModal(true);
  };

  const handleEditAutomation = (automation) => {
    setEditingAutomation(automation);
    setAutomationForm({
      name: automation.name,
      type: automation.type,
      status: automation.status,
      triggers: automation.triggers,
      actions: automation.actions,
      description: automation.description
    });
    setShowAutomationModal(true);
  };

  const handleDeleteAutomation = (id) => {
    if (window.confirm('Are you sure you want to delete this automation?')) {
      setAutomations(automations.filter(auto => auto.id !== id));
    }
  };

  const handleToggleAutomationStatus = (id) => {
    setAutomations(automations.map(auto => 
      auto.id === id 
        ? { ...auto, status: auto.status === 'active' ? 'paused' : 'active' }
        : auto
    ));
  };

  const handleSaveAutomation = () => {
    if (!automationForm.name || !automationForm.type) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingAutomation) {
      // Update existing automation
      setAutomations(automations.map(auto => 
        auto.id === editingAutomation.id 
          ? { 
              ...auto, 
              ...automationForm,
              lastRun: new Date().toISOString().slice(0, 16).replace('T', ' ')
            }
          : auto
      ));
    } else {
      // Create new automation
      const newAutomation = {
        id: Math.max(...automations.map(a => a.id)) + 1,
        ...automationForm,
        createdDate: new Date().toISOString().slice(0, 10),
        lastRun: 'Never',
        runsToday: 0,
        successRate: 100
      };
      setAutomations([...automations, newAutomation]);
    }
    
    setShowAutomationModal(false);
  };

  const handleFormChange = (field, value) => {
    setAutomationForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayFieldChange = (field, value) => {
    setAutomationForm(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  // Filter automations based on search
  const filteredAutomations = automations.filter(auto =>
    auto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    auto.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    auto.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-sans">
      {/* Mobile sidebar backdrop */}
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 z-30 flex flex-col bg-white/80 backdrop-blur-xl shadow-xl border-r border-slate-200/50 transition-all duration-300
        ${sidebarOpen ? "w-64" : "w-20"} 
        ${mobileSidebarOpen ? "left-0" : "-left-64 lg:left-0"}`}>

        {/* Logo */}
        <div className={`flex items-center justify-between p-4 border-b border-slate-200/50
          ${sidebarOpen ? "px-6" : "px-3 justify-center"}`}>
          {sidebarOpen ? (
            <>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">AD</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AMIR</h1>
                  <p className="text-xs text-slate-500">Discoveries</p>
                </div>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </>
          ) : (
            <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Menu className="w-4 h-4 text-slate-500" />
            </button>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200
                    ${activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                    ${sidebarOpen ? "justify-start px-4" : "justify-center"}`}
                >
                  <Icon className="w-5 h-5" />
                  {sidebarOpen && <span className="font-medium">{item.label}</span>}
                </button>
              );
            })}
          </div>
        </nav>

        {/* User profile */}
        <div className={`p-4 border-t border-slate-200/50 ${sidebarOpen ? "px-6" : "px-3"}`}>
          <div className={`flex items-center ${sidebarOpen ? "space-x-3" : "justify-center"}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
              <img 
                src="/public/amiricon.png" 
                alt="Admin Icon" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/6366f1/ffffff?text=AD"; }}
              />
            </div>
            {sidebarOpen && (
              <div className="truncate">
                <p className="text-sm font-semibold text-slate-900 truncate">{adminName}</p>
                <p className="text-xs text-slate-500 truncate">Administrator</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50 sticky top-0 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setMobileSidebarOpen(true)}
                className="p-2 rounded-lg hover:bg-slate-100 lg:hidden transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent capitalize">
                {activeTab.replace("-", " ")}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search everything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80 bg-white/50 backdrop-blur-sm transition-all"
                />
              </div>
              
              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setNotificationDropdownOpen(!notificationDropdownOpen)}
                  className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all relative"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
                      {unreadCount}
                    </span>
                  )}
                </button>
                
                {notificationDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-96 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-200/50 py-2 z-20 max-h-96 overflow-y-auto">
                    <div className="px-4 py-3 border-b border-slate-200/50">
                      <h3 className="text-lg font-semibold text-slate-900">Notifications</h3>
                      <p className="text-sm text-slate-500">{unreadCount} unread notifications</p>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {notifications.map((notification) => {
                        const Icon = notification.icon;
                        return (
                          <div 
                            key={notification.id}
                            onClick={() => markAsRead(notification.id)}
                            className={`px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors ${notification.unread ? 'bg-blue-50/50' : ''}`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`p-2 rounded-lg ${notification.unread ? 'bg-white shadow-sm' : 'bg-slate-100'}`}>
                                <Icon className={`w-4 h-4 ${notification.color}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className={`text-sm font-medium ${notification.unread ? 'text-slate-900' : 'text-slate-700'}`}>
                                    {notification.title}
                                  </p>
                                  {notification.unread && (
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  )}
                                </div>
                                <p className="text-sm text-slate-600 mt-1">{notification.message}</p>
                                <p className="text-xs text-slate-500 mt-2">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="px-4 py-3 border-t border-slate-200/50">
                      <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium">
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* User dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center space-x-3 p-2 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                    <img 
                      src="/public/amiricon.png" 
                      alt="Admin Icon" 
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/32x32/6366f1/ffffff?text=AD"; }}
                    />
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${userDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-200/50 py-2 z-20">
                    <div className="px-4 py-3 border-b border-slate-200/50">
                      <p className="text-sm font-semibold text-slate-900">{adminName}</p>
                      <p className="text-xs text-slate-500">{adminEmail}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign out</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Content area */}
        <div className="p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* Stats cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                          <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
                          <p className={`text-sm mt-2 font-semibold ${stat.change.startsWith("+") ? "text-emerald-600" : "text-red-500"}`}>
                            {stat.change}
                          </p>
                        </div>
                        <div className={`p-4 rounded-xl ${stat.color} shadow-lg`}>
                          <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Recent activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent orders */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Recent Orders</h3>
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      View all
                    </button>
                  </div>
                  <div className="space-y-4">
                    {filteredOrders.length > 0 ? (
                      filteredOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                          <div>
                            <p className="font-semibold text-slate-900">{order.client}</p>
                            <p className="text-sm text-slate-600">{order.service}</p>
                            <p className="text-xs text-slate-500 mt-1">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-slate-900 text-lg">{order.amount}</p>
                            <StatusBadge status={order.status} />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-500 text-center py-8">No orders found matching your search.</p>
                    )}
                  </div>
                </div>

                {/* Project progress */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Project Progress</h3>
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      View all
                    </button>
                  </div>
                  <div className="space-y-4">
                    {filteredProjects.length > 0 ? (
                      filteredProjects.map((project) => (
                        <div key={project.id} className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <p className="font-semibold text-slate-900">{project.client}</p>
                            <StatusBadge status={project.status} />
                          </div>
                          <p className="text-sm text-slate-600 mb-3">{project.type}</p>
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-slate-500 font-medium">{project.progress}% Complete</span>
                            <span className="font-bold text-slate-900">{project.budget}</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-500 text-center py-8">No projects found matching your search.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs */}
          {activeTab === "automations" && (
            <div className="space-y-6">
              {/* Header with Create Button */}
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Automation Management
                  </h2>
                  <p className="text-slate-600 mt-2">Manage your automated workflows and processes</p>
                </div>
                <button
                  onClick={handleCreateAutomation}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Create Automation</span>
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Total Automations</p>
                      <p className="text-3xl font-bold text-slate-900 mt-2">{automations.length}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                      <Settings className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Active</p>
                      <p className="text-3xl font-bold text-slate-900 mt-2">
                        {automations.filter(a => a.status === 'active').length}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Runs Today</p>
                      <p className="text-3xl font-bold text-slate-900 mt-2">
                        {automations.reduce((sum, a) => sum + a.runsToday, 0)}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Avg Success Rate</p>
                      <p className="text-3xl font-bold text-slate-900 mt-2">
                        {(automations.reduce((sum, a) => sum + a.successRate, 0) / automations.length).toFixed(1)}%
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100">
                      <BarChart3 className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Automations Table */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50">
                <div className="p-6 border-b border-slate-200/50">
                  <h3 className="text-xl font-bold text-slate-900">Your Automations</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200/50">
                        <th className="text-left p-4 font-semibold text-slate-700">Name</th>
                        <th className="text-left p-4 font-semibold text-slate-700">Type</th>
                        <th className="text-left p-4 font-semibold text-slate-700">Status</th>
                        <th className="text-left p-4 font-semibold text-slate-700">Runs Today</th>
                        <th className="text-left p-4 font-semibold text-slate-700">Success Rate</th>
                        <th className="text-left p-4 font-semibold text-slate-700">Last Run</th>
                        <th className="text-left p-4 font-semibold text-slate-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAutomations.map((automation) => (
                        <tr key={automation.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                          <td className="p-4">
                            <div>
                              <p className="font-semibold text-slate-900">{automation.name}</p>
                              <p className="text-sm text-slate-600">{automation.description}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                              {automation.type}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              automation.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                              automation.status === 'paused' ? 'bg-amber-100 text-amber-700' :
                              'bg-slate-100 text-slate-700'
                            }`}>
                              {automation.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className="font-semibold text-slate-900">{automation.runsToday}</span>
                          </td>
                          <td className="p-4">
                            <span className="font-semibold text-slate-900">{automation.successRate}%</span>
                          </td>
                          <td className="p-4">
                            <span className="text-sm text-slate-600">{automation.lastRun}</span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handleToggleAutomationStatus(automation.id)}
                                className={`p-2 rounded-lg transition-colors ${
                                  automation.status === 'active' 
                                    ? 'text-amber-600 hover:bg-amber-50' 
                                    : 'text-emerald-600 hover:bg-emerald-50'
                                }`}
                                title={automation.status === 'active' ? 'Pause' : 'Activate'}
                              >
                                {automation.status === 'active' ? <Clock className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                              </button>
                              <button
                                onClick={() => handleEditAutomation(automation)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Edit"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteAutomation(automation.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab !== "dashboard" && activeTab !== "automations" && (
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/50">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 capitalize">
                {activeTab.replace("-", " ")}
              </h2>
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-slate-600 text-lg">This section is under development.</p>
                <p className="text-slate-500 mt-2">The {activeTab} functionality will be implemented soon.</p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Automation Modal */}
      {showAutomationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-slate-900">
                  {editingAutomation ? 'Edit Automation' : 'Create New Automation'}
                </h3>
                <button
                  onClick={() => setShowAutomationModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Automation Name *
                  </label>
                  <input
                    type="text"
                    value={automationForm.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter automation name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Type *
                  </label>
                  <select
                    value={automationForm.type}
                    onChange={(e) => handleFormChange('type', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select type</option>
                    {automationTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Description
                </label>
                <textarea
                  value={automationForm.description}
                  onChange={(e) => handleFormChange('description', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Describe what this automation does..."
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Status
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="status"
                      value="active"
                      checked={automationForm.status === 'active'}
                      onChange={(e) => handleFormChange('status', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm font-medium text-slate-700">Active</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="status"
                      value="paused"
                      checked={automationForm.status === 'paused'}
                      onChange={(e) => handleFormChange('status', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm font-medium text-slate-700">Paused</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="status"
                      value="inactive"
                      checked={automationForm.status === 'inactive'}
                      onChange={(e) => handleFormChange('status', e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm font-medium text-slate-700">Inactive</span>
                  </label>
                </div>
              </div>

              {/* Triggers */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Triggers
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {triggerOptions.map(trigger => (
                    <label key={trigger} className="flex items-center space-x-2 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={automationForm.triggers.includes(trigger)}
                        onChange={() => handleArrayFieldChange('triggers', trigger)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-sm text-slate-700">{trigger}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Actions
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {actionOptions.map(action => (
                    <label key={action} className="flex items-center space-x-2 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={automationForm.actions.includes(action)}
                        onChange={() => handleArrayFieldChange('actions', action)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-sm text-slate-700">{action}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-200 flex justify-end space-x-4">
              <button
                onClick={() => setShowAutomationModal(false)}
                className="px-6 py-3 text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveAutomation}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                {editingAutomation ? 'Update Automation' : 'Create Automation'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;