import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Clock, TrendingUp, Users, CheckCircle, ArrowRight, Cog, BarChart3, Shield, Lightbulb, Check, Star, Sparkles, Rocket } from 'lucide-react';
// Add these imports at the top of your file with other imports
import image1 from "@/assets/1.jpeg";
import image2 from "@/assets/2.jpeg";
import image3 from "@/assets/3.jpeg";
import image4 from "@/assets/4.jpeg";
import image5 from "@/assets/5.jpeg";
import image6 from "@/assets/6.jpeg";
import image7 from "@/assets/7.jpeg";
import image8 from "@/assets/8.jpeg";
const ProcessAutomation = () => {
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

  const benefits = [
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "Save Time",
      description: "Automate repetitive tasks and free up your team for strategic work"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-600" />,
      title: "Increase Efficiency",
      description: "Streamline workflows and eliminate bottlenecks in your operations"
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: "Reduce Errors",
      description: "Minimize human error with automated quality checks and validation"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-orange-600" />,
      title: "Real-time Insights",
      description: "Get instant visibility into your processes with automated reporting"
    }
  ];

  const services = [
    {
      icon: <Cog className="h-12 w-12 text-blue-600" />,
      title: "Workflow Automation",
      description: "Design and implement automated workflows that connect your tools and systems",
      features: ["Custom workflow design", "Integration with existing tools", "Conditional logic", "Error handling"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-purple-600" />,
      title: "Document Processing",
      description: "Automate document creation, processing, and management workflows",
      features: ["Automated document generation", "Data extraction", "Digital signatures", "Version control"]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-600" />,
      title: "Data Integration",
      description: "Connect disparate systems and automate data synchronization",
      features: ["API integrations", "Database synchronization", "Real-time updates", "Data validation"]
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-orange-600" />,
      title: "Approval Processes",
      description: "Streamline approval workflows with automated routing and notifications",
      features: ["Multi-level approvals", "Automated notifications", "Audit trails", "Escalation rules"]
    }
  ];

  const industries = [
  { name: "Healthcare & Medical", image: image6 },
  { name: "Finance & Banking", image: image7 },
  { name: "E-commerce & Retail", image: image2 },
  { name: "Manufacturing", image: image5 },
  { name: "Real Estate", image: image4 },
  { name: "Professional Services", image: image3 },
  { name: "Education", image: image1 },
  { name: "Non-profit Organizations", image: image8 }
];

  const stats = [
    { number: "200+", label: "Processes Automated", icon: <Rocket className="h-6 w-6" /> },
    { number: "95%", label: "Efficiency Gains", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Zap className="h-6 w-6" /> },
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
              <span className="fade-in" style={{ animationDelay: '0.2s' }}>Process Automation</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 fade-in" style={{ animationDelay: '0.4s' }}>
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.6s' }}>
              Transform your business operations with intelligent automation solutions that save time, reduce costs, and eliminate human error.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-105"
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
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-105 group"
              >
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Why Process Automation?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              Manual processes are costly, error-prone, and time-consuming. Our automation solutions help you work smarter, not harder.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in text-center"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Our Automation Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              From simple task automation to complex enterprise workflows, we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Our Automation Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              A proven methodology to ensure successful automation implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Analyze & Design", desc: "We analyze your current processes and design optimal automation workflows" },
              { step: "02", title: "Build & Test", desc: "We build and thoroughly test your automation solutions in a controlled environment" },
              { step: "03", title: "Deploy & Monitor", desc: "We deploy your automation and provide ongoing monitoring and support" }
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Industries We Serve</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
        Our automation solutions work across diverse industries and business types.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {industries.map((industry, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 fade-in overflow-hidden flex flex-col"
          style={{ animationDelay: `${0.2 + index * 0.05}s` }}
        >
          <h3 className="text-lg font-medium text-gray-800 mb-3">{industry.name}</h3>
          <div className="w-full h-32 rounded-lg overflow-hidden mt-auto">
            <img 
              src={industry.image} 
              alt={industry.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
          </div>
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
                Ready to Automate Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Business Processes?
                </span>
              </h2>
              
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto fade-in">
                Join 200+ satisfied clients who've transformed their operations with our automation solutions. Let's create your efficiency success story.
              </p>

              {/* Single CTA Button */}
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
      Start Automation Project
      <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
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
                  ROI Guarantee
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  24/7 Monitoring
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Fast Implementation
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

export default ProcessAutomation;