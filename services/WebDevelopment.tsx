import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Palette, Smartphone, Globe, ArrowRight, Check, Star, Sparkles, Zap, Rocket } from "lucide-react";

const WebDevelopment = () => {
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

  // Services data
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "Custom Web Applications",
      description: "Build scalable, modern web applications tailored to your business needs using cutting-edge technologies.",
      features: ["React/Next.js", "Node.js Backend", "Database Integration", "API Development"]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-purple-600" />,
      title: "Responsive Design",
      description: "Create beautiful, mobile-first designs that work perfectly across all devices and screen sizes.",
      features: ["Mobile-First Approach", "Cross-Browser Compatible", "Performance Optimized", "SEO Friendly"]
    },
    {
      icon: <Code className="h-12 w-12 text-green-600" />,
      title: "E-commerce Solutions",
      description: "Develop powerful online stores with secure payment processing and inventory management.",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Customer Analytics"]
    },
    {
      icon: <Palette className="h-12 w-12 text-orange-600" />,
      title: "UI/UX Design",
      description: "Design intuitive user interfaces that provide exceptional user experiences and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    }
  ];

  // Stats data
  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Rocket className="h-6 w-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Zap className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Sparkles className="h-6 w-6" /> }
  ];

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
              <span className="fade-in" style={{ animationDelay: '0.2s' }}>Web Development</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 fade-in" style={{ animationDelay: '0.4s' }}>
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.6s' }}>
              Transform your digital presence with custom web applications that drive results. 
              We build modern, scalable solutions that grow with your business.
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
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
              <Button 
                size="lg" 
                className="w-full sm:w-[200px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              Comprehensive web development solutions to meet all your digital needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              A proven methodology that delivers exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
              { step: "02", title: "Design", desc: "Creating wireframes and visual designs" },
              { step: "03", title: "Development", desc: "Building your application with modern tech" },
              { step: "04", title: "Launch", desc: "Deployment and ongoing support" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 transition-all duration-300 hover:scale-110">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative CTA Section */}
<section className="relative overflow-hidden">
  {/* Animated Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
    <div className="absolute inset-0 bg-black opacity-20" />
    {/* Floating Elements */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse" />
    <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '2s' }} />
  </div>

  {/* Content */}
  <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      {/* Stats Section */}
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

      {/* Main CTA */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-blue-200 text-sm font-medium mb-6 fade-in">
          <Sparkles className="h-4 w-4 mr-2" />
          Limited Time Offer - Free Consultation
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
          Ready to Build Something
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Extraordinary?
          </span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto fade-in">
          Join 150+ satisfied clients who've transformed their digital presence with our cutting-edge web solutions. Let's create your success story together.
        </p>

        {/* Single CTA Button */}
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
                Booking Your Consultation...
              </div>
            ) : (
              <>
                <Rocket className="mr-3 h-6 w-6" />
                Start New Project
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </>
            )}
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm fade-in">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            No Setup Fees
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Money-Back Guarantee
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            24/7 Support
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Fast Delivery
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

export default WebDevelopment;