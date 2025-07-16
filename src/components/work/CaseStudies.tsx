import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Clock, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Sparkles, 
  Rocket,
  BarChart3,
  Globe,
  ShoppingCart,
  Building,
  Heart,
  GraduationCap,
  Shield,
  ExternalLink,
  Award,
  Target,
  DollarSign,
  Home,
  Brain,
  Bot,
  Cpu,
  Check
} from 'lucide-react';

const CaseStudies = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

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
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'web-development', label: 'Web Development', count: 4 },
    { id: 'ai-automation', label: 'AI & Automation', count: 3 },
    { id: 'process-automation', label: 'Process Automation', count: 3 },
    { id: 'creative-content', label: 'Creative & Content', count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      category: 'web-development',
      title: "E-commerce Platform Transformation",
      client: "RetailMax Corp",
      industry: "E-commerce",
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      image: "/api/placeholder/600/400",
      challenge: "Outdated website with poor user experience leading to 68% cart abandonment rate",
      solution: "Complete platform redesign with modern UX/UI, mobile optimization, and integrated payment gateway",
      results: [
        { metric: "Cart Abandonment", before: "68%", after: "23%", improvement: "45% reduction" },
        { metric: "Conversion Rate", before: "1.2%", after: "4.8%", improvement: "300% increase" },
        { metric: "Page Load Time", before: "8.5s", after: "2.1s", improvement: "75% faster" },
        { metric: "Mobile Traffic", before: "34%", after: "67%", improvement: "97% increase" }
      ],
      testimonial: "The transformation exceeded our expectations. Our online sales have quadrupled within 6 months.",
      clientName: "Sarah Johnson",
      clientRole: "CEO, RetailMax Corp",
      duration: "3 months",
      roi: "400%"
    },
  {
      id: 2,
      category: 'ai-automation',
      title: "AI-Powered Customer Service Revolution",
      client: "TechSupport Pro",
      industry: "Technology",
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      image: "/api/placeholder/600/400",
      challenge: "Overwhelmed support team handling 500+ tickets daily with 24-hour response time",
      solution: "Intelligent chatbot with natural language processing and automated ticket routing system",
      results: [
        { metric: "Response Time", before: "24 hours", after: "2 minutes", improvement: "720x faster" },
        { metric: "Resolution Rate", before: "67%", after: "89%", improvement: "33% increase" },
        { metric: "Support Costs", before: "$45K/month", after: "$18K/month", improvement: "60% reduction" },
        { metric: "Customer Satisfaction", before: "3.2/5", after: "4.7/5", improvement: "47% increase" }
      ],
      testimonial: "Our customers love the instant responses, and our team can focus on complex issues.",
      clientName: "Michael Chen",
      clientRole: "CTO, TechSupport Pro",
      duration: "2 months",
      roi: "320%"
    },
    {
      id: 3,
      category: 'process-automation',
      title: "Healthcare Workflow Optimization",
      client: "MedCenter Alliance",
      industry: "Healthcare",
      icon: <Heart className="h-8 w-8 text-red-600" />,
      image: "/api/placeholder/600/400",
      challenge: "Manual patient scheduling and record management causing delays and errors",
      solution: "Automated appointment system with patient portal and integrated EHR management",
      results: [
        { metric: "Appointment Scheduling", before: "15 min/patient", after: "2 min/patient", improvement: "87% faster" },
        { metric: "Data Entry Errors", before: "12%", after: "1%", improvement: "92% reduction" },
        { metric: "Patient Satisfaction", before: "3.5/5", after: "4.8/5", improvement: "37% increase" },
        { metric: "Staff Productivity", before: "100%", after: "165%", improvement: "65% increase" }
      ],
      testimonial: "The automation has transformed how we serve our patients. Everything runs so smoothly now.",
      clientName: "Dr. Amanda Wilson",
      clientRole: "Director, MedCenter Alliance",
      duration: "4 months",
      roi: "275%"
    },
    {
      id: 4,
      category: 'web-development',
      title: "Financial Services Platform",
      client: "SecureFinance Ltd",
      industry: "Finance",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      image: "/api/placeholder/600/400",
      challenge: "Legacy system unable to handle growing client base and compliance requirements",
      solution: "Modern web application with advanced security, real-time analytics, and compliance automation",
      results: [
        { metric: "Client Capacity", before: "1,000", after: "10,000", improvement: "900% increase" },
        { metric: "Security Incidents", before: "5/month", after: "0/month", improvement: "100% reduction" },
        { metric: "Compliance Time", before: "40 hours", after: "2 hours", improvement: "95% faster" },
        { metric: "User Satisfaction", before: "2.8/5", after: "4.9/5", improvement: "75% increase" }
      ],
      testimonial: "The platform handles our growth seamlessly while keeping us compliant and secure.",
      clientName: "Robert Martinez",
      clientRole: "Managing Director, SecureFinance Ltd",
      duration: "5 months",
      roi: "450%"
    },
    {
      id: 5,
      category: 'creative-content',
      title: "Brand Identity & Digital Presence",
      client: "GreenTech Innovations",
      industry: "Technology",
      icon: <Sparkles className="h-8 w-8 text-emerald-600" />,
      image: "/api/placeholder/600/400",
      challenge: "Startup with no brand recognition struggling to establish market presence",
      solution: "Complete brand identity design, website development, and digital marketing strategy",
      results: [
        { metric: "Brand Awareness", before: "5%", after: "67%", improvement: "1,240% increase" },
        { metric: "Website Traffic", before: "200/month", after: "15,000/month", improvement: "7,400% increase" },
        { metric: "Lead Generation", before: "2/month", after: "150/month", improvement: "7,400% increase" },
        { metric: "Social Following", before: "50", after: "12,000", improvement: "23,900% increase" }
      ],
      testimonial: "They didn't just create a brand, they created our entire market presence.",
      clientName: "Lisa Thompson",
      clientRole: "Founder, GreenTech Innovations",
      duration: "6 months",
      roi: "680%"
    },
    {
      id: 6,
      category: 'process-automation',
      title: "Manufacturing Quality Control",
      client: "Precision Manufacturing",
      industry: "Manufacturing",
      icon: <Building className="h-8 w-8 text-orange-600" />,
      image: "/api/placeholder/600/400",
      challenge: "Manual quality inspections causing production delays and inconsistent standards",
      solution: "Automated quality control system with IoT sensors and machine learning algorithms",
      results: [
        { metric: "Inspection Time", before: "45 min/unit", after: "3 min/unit", improvement: "93% faster" },
        { metric: "Defect Rate", before: "8%", after: "0.5%", improvement: "94% reduction" },
        { metric: "Production Output", before: "100 units/day", after: "400 units/day", improvement: "300% increase" },
        { metric: "Quality Consistency", before: "78%", after: "99.5%", improvement: "28% increase" }
      ],
      testimonial: "The automation has revolutionized our production line. Quality and speed have never been better.",
      clientName: "David Kim",
      clientRole: "Operations Manager, Precision Manufacturing",
      duration: "3 months",
      roi: "390%"
    }
  ];

  const stats = [
    { number: "50+", label: "Successful Projects", icon: <Target className="h-6 w-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
    { number: "2.5M+", label: "ROI Generated", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "15+", label: "Industries Served", icon: <Award className="h-6 w-6" /> }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
        .case-study-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .result-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
      `}</style>

      {/* Header with EXACT button style from AIAndAutomation */}
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
                <span className="text-xs text-gray-500 font-medium">Case Studies</span>
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

      {/* Hero Section with EXACT button styles */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-shift" />
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-400 blur-xl animate-float" />
            <div className="absolute top-2/3 right-1/4 w-40 h-40 rounded-full bg-purple-400 blur-xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/3 right-1/3 w-28 h-28 rounded-full bg-pink-400 blur-xl animate-float" style={{ animationDelay: '4s' }} />
          </div>
        </div>
        
        <div className={`container mx-auto text-center relative z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="fade-in" style={{ animationDelay: '0.2s' }}>Success Stories &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 fade-in" style={{ animationDelay: '0.4s' }}>
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.6s' }}>
              Discover how we've helped businesses transform their operations, increase efficiency, and achieve remarkable growth through innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="w-full sm:w-[200px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
              <Button 
                size="lg" 
                className="w-full sm:w-[200px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Download Portfolio
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
                className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 fade-in"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
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

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-1 gap-12">
            {filteredCaseStudies.map((study, index) => (
              <div 
                key={study.id} 
                className="case-study-card rounded-3xl p-8 md:p-12 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center mb-4">
                      {study.icon}
                      <div className="ml-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{study.title}</h3>
                        <p className="text-blue-600 font-semibold">{study.client} • {study.industry}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{study.duration}</div>
                        <div className="text-sm text-gray-500">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{study.roi}</div>
                        <div className="text-sm text-gray-500">ROI</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 mb-6">
                      <p className="text-gray-700 italic">"{study.testimonial}"</p>
                      <div className="flex items-center mt-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {study.clientName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold text-gray-900">{study.clientName}</p>
                          <p className="text-sm text-gray-600">{study.clientRole}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="order-1 lg:order-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Key Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="result-card rounded-xl p-4 text-center">
                          <div className="text-sm text-gray-600 mb-1">{result.metric}</div>
                          <div className="text-xs text-gray-500 mb-2">
                            {result.before} → {result.after}
                          </div>
                          <div className="text-lg font-bold text-green-600">{result.improvement}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with EXACT button style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-blue-200 text-sm font-medium mb-6 fade-in">
              <Sparkles className="h-4 w-4 mr-2" />
              Ready to Be Our Next Success Story?
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
              Let's Create Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Success Story
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto fade-in">
              Join our growing list of satisfied clients who've transformed their businesses with our innovative solutions.
            </p>

            <div className="flex justify-center items-center mb-12 fade-in">
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

            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm fade-in">
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

export default CaseStudies;