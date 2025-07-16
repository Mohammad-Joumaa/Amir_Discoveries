import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Search, Filter, BookOpen, TrendingUp, Star, Eye, Heart } from "lucide-react";
import Header from "../Header";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "ai", name: "AI & Machine Learning", count: 8 },
    { id: "automation", name: "Process Automation", count: 6 },
    { id: "web-dev", name: "Web Development", count: 5 },
    { id: "design", name: "Design & UX", count: 3 },
    { id: "business", name: "Business Growth", count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      excerpt: "Explore how artificial intelligence is revolutionizing business processes and creating new opportunities for growth.",
      image: "/api/placeholder/600/400",
      category: "ai",
      author: "Amir Discoveries",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 2400,
      likes: 156,
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "Learn the best practices for creating high-performance web applications that can handle millions of users.",
      image: "/api/placeholder/600/400",
      category: "web-dev",
      author: "Amir Discoveries",
      date: "2024-01-12",
      readTime: "12 min read",
      views: 1800,
      likes: 98,
      featured: true
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "10 Essential Tools for Process Automation",
      excerpt: "Discover the must-have tools that can streamline your business operations and increase efficiency.",
      image: "/api/placeholder/400/300",
      category: "automation",
      author: "Amir Discoveries",
      date: "2024-01-10",
      readTime: "6 min read",
      views: 1200,
      likes: 67
    },
    {
      id: 4,
      title: "Machine Learning Models That Transform Industries",
      excerpt: "An in-depth look at how ML models are disrupting traditional industries and creating new market opportunities.",
      image: "/api/placeholder/400/300",
      category: "ai",
      author: "Amir Discoveries",
      date: "2024-01-08",
      readTime: "10 min read",
      views: 1950,
      likes: 143
    },
    {
      id: 5,
      title: "UX Design Principles for Better User Engagement",
      excerpt: "Learn the fundamental design principles that create intuitive and engaging user experiences.",
      image: "/api/placeholder/400/300",
      category: "design",
      author: "Amir Discoveries",
      date: "2024-01-05",
      readTime: "7 min read",
      views: 890,
      likes: 52
    },
    {
      id: 6,
      title: "Scaling Your Business with Smart Automation",
      excerpt: "How to implement intelligent automation strategies that grow with your business needs.",
      image: "/api/placeholder/400/300",
      category: "business",
      author: "Amir Discoveries",
      date: "2024-01-03",
      readTime: "9 min read",
      views: 1340,
      likes: 89
    },
    {
      id: 7,
      title: "Advanced React Patterns for Enterprise Applications",
      excerpt: "Master complex React patterns and architectural decisions for large-scale applications.",
      image: "/api/placeholder/400/300",
      category: "web-dev",
      author: "Amir Discoveries",
      date: "2024-01-01",
      readTime: "15 min read",
      views: 2100,
      likes: 178
    },
    {
      id: 8,
      title: "Data-Driven Decision Making with AI Analytics",
      excerpt: "Transform your business intelligence with AI-powered analytics and predictive modeling.",
      image: "/api/placeholder/400/300",
      category: "ai",
      author: "Amir Discoveries",
      date: "2023-12-28",
      readTime: "11 min read",
      views: 1600,
      likes: 124
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { number: "50+", label: "Blog Posts", icon: <BookOpen className="h-6 w-6" /> },
    { number: "25K+", label: "Monthly Readers", icon: <Eye className="h-6 w-6" /> },
    { number: "4.8/5", label: "Reader Rating", icon: <Star className="h-6 w-6" /> },
    { number: "95%", label: "Engagement Rate", icon: <Heart className="h-6 w-6" /> }
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
        .blog-card {
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
        }
        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
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
                <BookOpen className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="fade-in" style={{ animationDelay: '0.4s' }}>Discover Insights &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 fade-in" style={{ animationDelay: '0.6s' }}>
                Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.8s' }}>
              Stay ahead of the curve with our latest thoughts on AI, automation, web development, and business transformation.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8 fade-in" style={{ animationDelay: '1s' }}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/60 text-gray-700 hover:bg-white/80 backdrop-blur-sm'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in">Featured Articles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in">
              Our most popular and impactful content, handpicked for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="blog-card rounded-2xl overflow-hidden shadow-lg fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white opacity-50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-purple-600 rounded-full">
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center space-x-4 text-white/80 text-sm">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                      <Calendar className="h-4 w-4 ml-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in">Latest Articles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in">
              Stay updated with our latest insights and tutorials
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="blog-card rounded-2xl overflow-hidden shadow-lg fade-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-white opacity-50" />
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center space-x-3 text-white/80 text-sm">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      Read
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 fade-in">
                Never Miss an Update
              </h2>
              <p className="text-xl text-blue-100 mb-8 fade-in">
                Join our newsletter and be the first to know about new articles, insights, and industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto fade-in">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-4 fade-in">
                Join 25,000+ readers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;