import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Rocket, Star, Award, Shield, ArrowRight, Brain, Zap, Bot, Cpu, TrendingUp, Sparkles } from "lucide-react";

const OurStory = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookCall = () => {
    setIsBooking(true);
    setTimeout(() => {
      window.location.href = "/booking-a-call";
    }, 1200);
  };

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Rocket className="h-6 w-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
    { number: "3+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="h-6 w-6" /> }
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
              <span className="fade-in" style={{ animationDelay: '0.4s' }}>Our Story</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 fade-in" style={{ animationDelay: '0.6s' }}>
                Journey of Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.8s' }}>
              From humble beginnings to revolutionizing industries - discover how we're shaping the future of business with AI and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '1s' }}>
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
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-[200px] border-purple-600 text-purple-600 hover:bg-purple-50 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Our Journey</h2>
              <p className="text-xl text-gray-600 fade-in">
                From vision to reality - how we're shaping the future of business automation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="fade-in">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Pioneering Intelligent Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Founded with a vision to democratize AI and automation, Amir Discoveries has grown from 
                  a small team of passionate developers to a leading force in intelligent business solutions.
                </p>
                <p className="text-gray-600 mb-6">
                  Our journey began with a simple belief: every business, regardless of size, should have 
                  access to the transformative power of artificial intelligence. Today, we've helped over 
                  50 companies streamline their operations and unlock new possibilities.
                </p>
                <p className="text-gray-600 mb-8">
                  We specialize in creating custom AI solutions that integrate seamlessly with existing 
                  workflows, from intelligent chatbots to complex automation systems. Our approach combines 
                  cutting-edge technology with deep industry expertise to deliver results that matter.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center px-4 py-2 bg-purple-50 rounded-full text-sm text-purple-600 font-medium">
                    <Check className="h-4 w-4 text-purple-600 mr-2" />
                    AI-First Approach
                  </div>
                  <div className="flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm text-blue-600 font-medium">
                    <Check className="h-4 w-4 text-blue-600 mr-2" />
                    Client-Centric
                  </div>
                  <div className="flex items-center px-4 py-2 bg-pink-50 rounded-full text-sm text-pink-600 font-medium">
                    <Check className="h-4 w-4 text-pink-600 mr-2" />
                    Continuous Innovation
                  </div>
                </div>
              </div>
              
              <div className="relative fade-in">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white shadow-xl">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-white mb-2">Our Impact</h4>
                    <p className="text-white/80">Transforming businesses through intelligent automation</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div 
                        key={index} 
                        className="text-center cursor-pointer transform transition-all duration-300 hover:scale-105"
                        onMouseEnter={() => setHoveredStat(index)}
                        onMouseLeave={() => setHoveredStat(null)}
                      >
                        <div className={`flex justify-center mb-2 transition-all duration-300 ${
                          hoveredStat === index ? 'text-white scale-110' : 'text-white/80'
                        }`}>
                          {stat.icon}
                        </div>
                        <div className={`text-3xl font-bold transition-all duration-300 ${
                          hoveredStat === index ? 'text-white scale-110' : 'text-white/95'
                        }`}>
                          {stat.number}
                        </div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-200 rounded-full opacity-60 blur-sm" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-200 rounded-full opacity-40 blur-sm" />
                <div className="absolute top-1/2 -right-2 w-8 h-8 bg-pink-200 rounded-full opacity-50 blur-sm" />
              </div>
            </div>
          </div>
          
          {/* Timeline Section */}
          <div className="max-w-5xl mx-auto mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 fade-in">Our Evolution</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2021</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">The Beginning</h4>
                <p className="text-gray-600 mb-4">Started with a vision to make AI accessible to all businesses</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Founded with 3 team members
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    First AI prototype developed
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Initial client projects
                  </li>
                </ul>
              </div>
              
              <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2023</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Growth Phase</h4>
                <p className="text-gray-600 mb-4">Expanded our team and delivered 30+ successful projects</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Team grew to 12 experts
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Developed proprietary AI models
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Expanded service offerings
                  </li>
                </ul>
              </div>
              
              <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2024</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
                <p className="text-gray-600 mb-4">Leading the market with cutting-edge AI solutions</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Recognized industry leader
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Advanced automation systems
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Global client base
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: "Innovation", 
                desc: "We constantly push boundaries to develop cutting-edge AI solutions that solve real business problems.", 
                icon: <Zap className="h-8 w-8 text-purple-600" />,
                color: "bg-purple-50 text-purple-600"
              },
              { 
                title: "Excellence", 
                desc: "We deliver only the highest quality solutions with meticulous attention to detail and performance.", 
                icon: <Star className="h-8 w-8 text-blue-600" />,
                color: "bg-blue-50 text-blue-600"
              },
              { 
                title: "Integrity", 
                desc: "We build trust through transparency, honesty, and ethical business practices in all we do.", 
                icon: <Shield className="h-8 w-8 text-green-600" />,
                color: "bg-green-50 text-green-600"
              },
              { 
                title: "Collaboration", 
                desc: "We work closely with clients to understand their unique needs and co-create optimal solutions.", 
                icon: <Brain className="h-8 w-8 text-pink-600" />,
                color: "bg-pink-50 text-pink-600"
              },
              { 
                title: "Impact", 
                desc: "We measure success by the tangible business results and transformation we enable for clients.", 
                icon: <TrendingUp className="h-8 w-8 text-yellow-600" />,
                color: "bg-yellow-50 text-yellow-600"
              },
              { 
                title: "Growth", 
                desc: "We foster continuous learning and improvement for our team and clients alike.", 
                icon: <Rocket className="h-8 w-8 text-indigo-600" />,
                color: "bg-indigo-50 text-indigo-600"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className={`w-12 h-12 ${value.color} rounded-full flex items-center justify-center mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative CTA Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-black opacity-20" />
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-blue-200 text-sm font-medium mb-6 fade-in">
                <Sparkles className="h-4 w-4 mr-2" />
                Join Our Growing Community
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
                Ready to Be Part of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Our Story?
                </span>
              </h2>
              
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto fade-in">
                Whether you're looking for AI solutions or want to join our team, we'd love to hear from you.
              </p>

              {/* CTA Buttons */}
              {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in">
  <Button 
    size="lg" 
    className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-105 group"
    onClick={handleBookCall}
    disabled={isBooking}
  >
    {isBooking ? (
      <div className="flex items-center">
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
        Booking Your Consultation...
      </div>
    ) : (
      <>
        <Brain className="mr-3 h-6 w-6" />
        Start Your Project
        <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
      </>
    )}
  </Button>
  <Button 
    size="lg" 
    variant="outline"
    className="text-lg px-8 py-4 border-white text-white hover:bg-white/10 flex items-center justify-center transition-all duration-300 transform hover:scale-105 group"
    onClick={() => window.location.href = "/careers"}
  >
    <Rocket className="mr-3 h-6 w-6" />
    Join Our Team
    <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
  </Button>
</div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm fade-in">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Diverse Team
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Flexible Work
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Continuous Learning
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Impactful Work
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-purple-500 to-transparent opacity-10 rounded-full transform translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500 to-transparent opacity-10 rounded-full transform -translate-x-32 translate-y-32" />
      </section>
    </div>
  );
};

export default OurStory;