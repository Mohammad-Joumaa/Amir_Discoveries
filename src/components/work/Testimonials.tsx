import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowLeft, ArrowRight, Play, Award, TrendingUp, Users, CheckCircle } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isBooking, setIsBooking] = useState(false);
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      position: "CEO",
      rating: 5,
      text: "Working with Amir Discoveries transformed our business completely. Their AI automation reduced our processing time by 80% and increased our revenue by 300% in just 6 months.",
      image: "/api/placeholder/80/80",
      results: "300% Revenue Increase",
      industry: "SaaS"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "DataVision Corp",
      position: "CTO",
      rating: 5,
      text: "The web development and automation solutions provided by Amir Discoveries exceeded all our expectations. Their attention to detail and technical expertise is unmatched.",
      image: "/api/placeholder/80/80",
      results: "50% Cost Reduction",
      industry: "Data Analytics"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Studios Plus",
      position: "Marketing Director",
      rating: 5,
      text: "From concept to execution, Amir Discoveries delivered exceptional results. Our new website and automated workflows have streamlined our entire operation.",
      image: "/api/placeholder/80/80",
      results: "200% Lead Generation",
      industry: "Creative Agency"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "E-commerce Dynamics",
      position: "Founder",
      rating: 5,
      text: "The AI-powered solutions implemented by Amir Discoveries have revolutionized our customer experience. We've seen a 400% increase in customer satisfaction.",
      image: "/api/placeholder/80/80",
      results: "400% Customer Satisfaction",
      industry: "E-commerce"
    },
    {
      id: 5,
      name: "Lisa Park",
      company: "Healthcare Innovation",
      position: "Operations Manager",
      rating: 5,
      text: "Professional, efficient, and incredibly skilled. Amir Discoveries helped us automate our patient management system, saving us 20 hours per week.",
      image: "/api/placeholder/80/80",
      results: "20 Hours Saved Weekly",
      industry: "Healthcare"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "Alex Martinez",
      company: "Global Enterprises",
      position: "CEO",
      thumbnail: "/api/placeholder/300/200",
      duration: "2:45",
      title: "How AI Automation Transformed Our Business"
    },
    {
      id: 2,
      name: "Jennifer Wu",
      company: "StartupHub",
      position: "Founder",
      thumbnail: "/api/placeholder/300/200",
      duration: "1:30",
      title: "From Idea to Success Story"
    },
    {
      id: 3,
      name: "Robert Kim",
      company: "TechGrowth Inc",
      position: "CTO",
      thumbnail: "/api/placeholder/300/200",
      duration: "3:15",
      title: "The Power of Process Automation"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "98%", label: "Success Rate", icon: <Award className="h-6 w-6" /> },
    { number: "250%", label: "Avg ROI", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "4.9/5", label: "Client Rating", icon: <Star className="h-6 w-6" /> }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
                <Quote className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="fade-in" style={{ animationDelay: '0.4s' }}>Client Success</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 fade-in" style={{ animationDelay: '0.6s' }}>
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.8s' }}>
              Discover how we've helped businesses transform their operations and achieve remarkable results through our innovative solutions.
            </p>
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
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Testimonial Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              Real stories from real clients who've transformed their businesses with our solutions
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full translate-y-12 -translate-x-12 opacity-50" />
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Quote className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">
                        {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].position}
                      </div>
                      <div className="text-blue-600 font-medium">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-8 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {testimonials[currentTestimonial].results}
                      </div>
                      <div className="text-sm text-gray-500">Result Achieved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-700">
                        {testimonials[currentTestimonial].industry}
                      </div>
                      <div className="text-sm text-gray-500">Industry</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-6 w-6 text-gray-600" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentTestimonial
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Video Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              Hear directly from our clients about their transformation journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div 
                key={video.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200">
                      <Play className="h-8 w-8 text-purple-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-1">{video.name}</p>
                  <p className="text-sm text-blue-600">{video.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in">Trusted by Industry Leaders</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 opacity-60">
            {[
              "TechFlow", "DataVision", "Creative+", "E-commerce", "Healthcare", "Global Ent"
            ].map((company, index) => (
              <div 
                key={index} 
                className="text-center p-4 fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="h-12 w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">{company}</span>
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
          <div className="container mx-auto text-center max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-blue-200 text-sm font-medium mb-6 fade-in">
              <CheckCircle className="h-4 w-4 mr-2" />
              Join 500+ Satisfied Clients
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
              Ready to Be Our Next
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Success Story?
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto fade-in">
              Let's create a transformation story that you'll be proud to share. Start your journey with us today.
            </p>

            <div className="flex justify-center items-center fade-in">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-12 py-6 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={handleBookCall}
                disabled={isBooking}
              >
                {isBooking ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Booking Your Call...
                  </div>
                ) : (
                  <>
                    <Quote className="mr-3 h-6 w-6" />
                    Share Your Success Story
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;