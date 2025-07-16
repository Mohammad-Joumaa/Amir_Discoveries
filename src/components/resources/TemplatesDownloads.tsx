import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Code, Palette, Zap, ArrowRight, Check, Star, Sparkles, Rocket, Search, Filter } from "lucide-react";

const TemplatesDownloads = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookCall = () => {
    setIsBooking(true);
    setTimeout(() => {
      window.location.href = "/booking-a-call";
    }, 1200);
  };

  const categories = [
    { id: "all", label: "All Templates", count: 45 },
    { id: "web", label: "Web Development", count: 15 },
    { id: "ai", label: "AI & Automation", count: 12 },
    { id: "design", label: "Design Resources", count: 10 },
    { id: "business", label: "Business Tools", count: 8 }
  ];

  const templates = [
    {
      id: 1,
      title: "React Dashboard Template",
      description: "Modern responsive dashboard with charts and analytics",
      category: "web",
      type: "Template",
      downloads: 1250,
      rating: 4.9,
      preview: "🚀",
      tags: ["React", "Dashboard", "Charts", "Analytics"],
      featured: true
    },
    {
      id: 2,
      title: "AI Chatbot Integration Kit",
      description: "Complete chatbot setup with OpenAI integration",
      category: "ai",
      type: "Code Kit",
      downloads: 890,
      rating: 4.8,
      preview: "🤖",
      tags: ["AI", "Chatbot", "OpenAI", "Integration"],
      featured: true
    },
    {
      id: 3,
      title: "Landing Page Builder",
      description: "Drag-and-drop landing page components",
      category: "web",
      type: "Template",
      downloads: 2100,
      rating: 4.9,
      preview: "🎨",
      tags: ["Landing Page", "Components", "Builder"],
      featured: false
    },
    {
      id: 4,
      title: "Business Process Automation",
      description: "Workflow templates for common business processes",
      category: "business",
      type: "Workflow",
      downloads: 650,
      rating: 4.7,
      preview: "⚡",
      tags: ["Automation", "Workflow", "Business"],
      featured: false
    },
    {
      id: 5,
      title: "Design System Components",
      description: "Complete UI component library with documentation",
      category: "design",
      type: "Design Kit",
      downloads: 1800,
      rating: 4.9,
      preview: "🎭",
      tags: ["Design System", "Components", "UI"],
      featured: true
    },
    {
      id: 6,
      title: "E-commerce Store Template",
      description: "Full-featured online store with payment integration",
      category: "web",
      type: "Template",
      downloads: 3200,
      rating: 4.8,
      preview: "🛍️",
      tags: ["E-commerce", "Store", "Payment"],
      featured: false
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesFilter = activeFilter === "all" || template.category === activeFilter;
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredTemplates = templates.filter(template => template.featured);

  const stats = [
    { number: "45+", label: "Templates", icon: <FileText className="h-6 w-6" /> },
    { number: "12K+", label: "Downloads", icon: <Download className="h-6 w-6" /> },
    { number: "4.8/5", label: "Rating", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", label: "Support", icon: <Sparkles className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient-shift {
          background-size: 300% 300%;
          animation: gradient-shift 12s ease infinite;
        }
        .fade-in { animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl rotate-45 shadow-lg" />
                <div className="absolute inset-1 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg rotate-12 opacity-80" />
                <div className="absolute inset-2 bg-white rounded-md flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Amir Discoveries</span>
                <span className="text-xs text-gray-500 font-medium">Intelligent Solutions</span>
              </div>
            </div>
            <Button 
              onClick={() => window.location.href = "/"} 
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 animate-gradient-shift" />
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-400 blur-xl animate-float" />
            <div className="absolute top-2/3 right-1/4 w-40 h-40 rounded-full bg-blue-400 blur-xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/3 right-1/3 w-28 h-28 rounded-full bg-pink-400 blur-xl animate-float" style={{ animationDelay: '4s' }} />
          </div>
        </div>
        
        <div className={`container mx-auto text-center relative z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg">
                <Download className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="fade-in" style={{ animationDelay: '0.4s' }}>Templates &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 fade-in" style={{ animationDelay: '0.6s' }}>
                Downloads
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.8s' }}>
              Access our collection of premium templates, code snippets, and resources 
              to accelerate your projects and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '1s' }}>
              <Button 
                size="lg" 
                className="w-full sm:w-[200px] bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Browse All Templates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                className="w-full sm:w-[200px] bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={handleBookCall}
                disabled={isBooking}
              >
                {isBooking ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Loading...
                  </div>
                ) : (
                  <>
                    Get Custom Template
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-gray-400 mr-2" />
                <select
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.label} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 fade-in">Featured Templates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTemplates.map((template, index) => (
              <div 
                key={template.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{template.preview}</div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{template.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{template.title}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{template.downloads} downloads</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Templates Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 fade-in">All Templates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template, index) => (
              <div 
                key={template.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 fade-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{template.preview}</div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{template.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{template.title}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{template.downloads} downloads</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 fade-in"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 ${
                    hoveredStat === index 
                      ? 'bg-white text-purple-600 shadow-lg' 
                      : 'bg-white bg-opacity-20 text-white'
                  }`}>
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold mb-2 transition-all duration-300 ${
                    hoveredStat === index ? 'text-white scale-110' : 'text-blue-200'
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
                Need a Custom Template?
              </h2>
              
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto fade-in">
                Can't find what you're looking for? We'll create a custom template tailored to your specific needs and requirements.
              </p>

              <div className="flex justify-center items-center mb-12 fade-in">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-12 py-6 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={handleBookCall}
                  disabled={isBooking}
                >
                  {isBooking ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Booking Consultation...
                    </div>
                  ) : (
                    <>
                      <Code className="mr-3 h-6 w-6" />
                      Request Custom Template
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplatesDownloads;