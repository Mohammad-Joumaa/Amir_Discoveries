import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ArrowLeft, 
  Eye, 
  TrendingUp, 
  Zap, 
  Users, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Home,
  Rocket,
  Sparkles,
  Star,
  Target,
  Award
} from "lucide-react";

const BeforeAfterGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBooking, setIsBooking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookCall = () => {
    setIsBooking(true);
    setTimeout(() => {
      window.location.href = "/booking-a-call";
      setIsBooking(false);
    }, 1200);
  };

  const handleBackToHome = () => {
    window.location.href = "/";
  };

  const categories = [
    { id: "all", label: "All Projects", count: 12 },
    { id: "web", label: "Web Development", count: 4 },
    { id: "ai", label: "AI & Automation", count: 3 },
    { id: "process", label: "Process Automation", count: 3 },
    { id: "creative", label: "Creative & Content", count: 2 }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      category: "web",
      client: "TechFlow Solutions",
      timeline: "6 weeks",
      beforeImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: {
        conversion: "+300%",
        traffic: "+150%",
        revenue: "$2.5M",
        satisfaction: "95%"
      },
      description: "Complete redesign of outdated e-commerce platform with modern UI/UX and performance optimization.",
      metrics: [
        { label: "Page Load Time", before: "8.2s", after: "1.4s" },
        { label: "Conversion Rate", before: "2.1%", after: "8.4%" },
        { label: "Monthly Revenue", before: "$150K", after: "$450K" }
      ]
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      category: "ai",
      client: "DataVision Corp",
      timeline: "8 weeks",
      beforeImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: {
        efficiency: "+400%",
        accuracy: "99.2%",
        savings: "$500K",
        time: "80% faster"
      },
      description: "Implemented AI-driven analytics system replacing manual reporting processes.",
      metrics: [
        { label: "Report Generation", before: "8 hours", after: "15 minutes" },
        { label: "Data Accuracy", before: "85%", after: "99.2%" },
        { label: "Cost Savings", before: "$0", after: "$500K/year" }
      ]
    },
    {
      id: 3,
      title: "Automated Customer Service",
      category: "process",
      client: "ServiceHub Inc",
      timeline: "4 weeks",
      beforeImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: {
        response: "24/7",
        satisfaction: "+85%",
        cost: "-60%",
        resolution: "90%"
      },
      description: "Deployed intelligent chatbot system handling 90% of customer inquiries automatically.",
      metrics: [
        { label: "Response Time", before: "4 hours", after: "Instant" },
        { label: "Customer Satisfaction", before: "72%", after: "94%" },
        { label: "Support Costs", before: "$50K/month", after: "$20K/month" }
      ]
    },
    {
      id: 4,
      title: "Brand Identity & Marketing",
      category: "creative",
      client: "Creative Studios Plus",
      timeline: "5 weeks",
      beforeImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: {
        brand: "+200%",
        engagement: "+350%",
        leads: "+180%",
        recognition: "Top 10"
      },
      description: "Complete brand overhaul with new identity, website, and marketing automation.",
      metrics: [
        { label: "Brand Recognition", before: "15%", after: "78%" },
        { label: "Social Engagement", before: "500/month", after: "2,250/month" },
        { label: "Quality Leads", before: "12/month", after: "45/month" }
      ]
    },
    {
      id: 5,
      title: "Inventory Management System",
      category: "process",
      client: "Warehouse Solutions",
      timeline: "7 weeks",
      beforeImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: {
        accuracy: "99.8%",
        efficiency: "+250%",
        costs: "-40%",
        errors: "-95%"
      },
      description: "Automated inventory tracking and management system with real-time analytics.",
      metrics: [
        { label: "Inventory Accuracy", before: "78%", after: "99.8%" },
        { label: "Order Processing", before: "45 min", after: "8 min" },
        { label: "Error Rate", before: "12%", after: "0.5%" }
      ]
    },
    {
      id: 6,
      title: "Healthcare Management Portal",
      category: "web",
      client: "MedTech Solutions",
      timeline: "10 weeks",
      beforeImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: {
        efficiency: "+300%",
        satisfaction: "96%",
        time: "75% faster",
        compliance: "100%"
      },
      description: "Comprehensive patient management system with appointment scheduling and records.",
      metrics: [
        { label: "Appointment Scheduling", before: "20 min", after: "3 min" },
        { label: "Patient Satisfaction", before: "81%", after: "96%" },
        { label: "Administrative Time", before: "6 hours/day", after: "1.5 hours/day" }
      ]
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
    { number: "$25M+", label: "Revenue Generated", icon: <DollarSign className="h-6 w-6" /> },
    { number: "50+", label: "Industries Served", icon: <Award className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
                <span className="text-xs text-gray-500 font-medium">Before & After Gallery</span>
              </div>
            </div>
            <Button 
              onClick={handleBackToHome}
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-400 blur-xl" />
            <div className="absolute top-2/3 right-1/4 w-40 h-40 rounded-full bg-purple-400 blur-xl" />
            <div className="absolute top-1/3 right-1/3 w-28 h-28 rounded-full bg-pink-400 blur-xl" />
          </div>
        </div>
        
        <div className={`container mx-auto text-center relative z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Before & After</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Transformation Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See the dramatic improvements we've delivered for our clients through our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button 
                size="lg" 
                className="w-full sm:w-[200px] text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-105"
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
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
              <Button 
                size="lg" 
                className="w-full sm:w-[200px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 ${
                  hoveredStat === index 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600'
                }`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 transition-all duration-300 ${
                  hoveredStat === index ? 'text-blue-600 scale-110' : 'text-gray-900'
                }`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/20"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={project.beforeImage} 
                    alt="Before" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category === 'web' ? 'Web' : 
                     project.category === 'ai' ? 'AI' : 
                     project.category === 'process' ? 'Process' : 'Creative'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">{project.client}</span>
                    <span className="text-sm text-blue-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {project.timeline}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(project.results).slice(0,4).map(([key, value]) => (
                      <div key={key} className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-2 text-center">
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                        <div className="font-bold text-blue-600">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-10 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-5 animate-pulse" />
        </div>

        <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-blue-200 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Ready for Your Transformation?
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Create Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Success Story
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join our growing list of satisfied clients who've transformed their businesses with our innovative solutions.
            </p>

            <div className="flex justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="group text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-105"
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
                    Start Your Project Today
                    <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Free Consultation
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Custom Solutions
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Proven Results
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Ongoing Support
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeforeAfterGallery;