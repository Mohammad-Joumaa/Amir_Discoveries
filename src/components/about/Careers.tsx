import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Rocket, Zap, Sparkles, Star, Lock, Clock, Calendar } from "lucide-react";

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const potentialPositions = [
    {
      title: "AI Engineer",
      description: "Develop cutting-edge AI models and automation solutions",
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      comingSoon: true
    },
    {
      title: "Full Stack Developer",
      description: "Build beautiful, functional interfaces and robust APIs",
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      comingSoon: false
    },
    {
      title: "Automation Specialist",
      description: "Design and implement intelligent workflow automations",
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      comingSoon: true
    },
    {
      title: "UX/UI Designer",
      description: "Create intuitive experiences for our AI products",
      icon: <Sparkles className="h-8 w-8 text-pink-600" />,
      comingSoon: false
    }
  ];

  const stats = [
    { number: "Coming Soon", label: "Next Hiring Phase", icon: <Calendar className="h-6 w-6" /> },
    { number: "0", label: "Current Openings", icon: <Lock className="h-6 w-6" /> },
    { number: "100+", label: "Future Team Size", icon: <Star className="h-6 w-6" /> },
    { number: "Q1 2025", label: "Next Review", icon: <Clock className="h-6 w-6" /> }
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
        .position-card {
          transition: all 0.3s ease;
          transform-style: preserve-3d;
        }
        .position-card:hover {
          transform: translateY(-5px) rotateX(5deg);
        }
        .coming-soon-badge {
          position: absolute;
          top: -10px;
          right: -10px;
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          color: white;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          z-index: 10;
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
                <Rocket className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="fade-in" style={{ animationDelay: '0.4s' }}>Careers at</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 fade-in" style={{ animationDelay: '0.6s' }}>
                Amir Discoveries
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.8s' }}>
              While we're not currently hiring, we're always interested in connecting with exceptional talent for future opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Current Hiring Status</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              Our team is currently at full capacity, but we're planning for future growth
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105 fade-in"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto transition-all duration-300 ${
                  hoveredStat === index 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                    : 'bg-white text-purple-600 shadow-md'
                }`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 transition-all duration-300 ${
                  hoveredStat === index ? 'text-purple-600' : 'text-gray-900'
                }`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Positions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Potential Future Roles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              These are the types of positions we may open in the future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {potentialPositions.map((position, index) => (
              <div 
                key={index} 
                className={`position-card relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl fade-in ${position.comingSoon ? 'border-2 border-purple-500/20' : 'opacity-70'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {position.comingSoon && (
                  <div className="coming-soon-badge">
                    Coming Soon
                  </div>
                )}
                
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mb-4">
                    {position.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{position.description}</p>
                  
                  <div className={`w-full mt-4 py-2 px-4 rounded-lg text-center ${
                    position.comingSoon 
                      ? 'bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 border border-purple-200' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {position.comingSoon ? 'Notify Me When Open' : 'Not Currently Planned'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep In Touch Section */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-black opacity-20" />
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-blue-200 text-sm font-medium mb-6 fade-in">
              <Sparkles className="h-4 w-4 mr-2" />
              Future Opportunities
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
              Stay Connected
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                For Future Openings
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto fade-in">
              Join our talent network to be the first to know when we start hiring again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto fade-in">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-full bg-white bg-opacity-20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Join Talent Network
                <Rocket className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;