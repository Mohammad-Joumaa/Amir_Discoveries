import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle, BookOpen, Clock, Users, Star, Trophy, ArrowRight, Check, Zap, Brain, Code, Sparkles, Rocket } from "lucide-react";

const TutorialIndex = () => {
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
    { id: "all", label: "All Tutorials", count: 85 },
    { id: "beginner", label: "Beginner", count: 25 },
    { id: "intermediate", label: "Intermediate", count: 35 },
    { id: "advanced", label: "Advanced", count: 25 },
    { id: "premium", label: "Premium", count: 15 }
  ];

  const tutorialSeries = [
    {
      id: 1,
      title: "Complete React Development",
      description: "Master React from basics to advanced concepts with real-world projects",
      level: "beginner",
      duration: "12 hours",
      lessons: 24,
      students: 2500,
      rating: 4.9,
      thumbnail: "⚛️",
      tags: ["React", "JavaScript", "Frontend"],
      premium: false,
      progress: 85
    },
    {
      id: 2,
      title: "AI & Machine Learning Fundamentals",
      description: "Learn AI/ML concepts and build intelligent applications",
      level: "intermediate",
      duration: "18 hours",
      lessons: 32,
      students: 1800,
      rating: 4.8,
      thumbnail: "🤖",
      tags: ["AI", "Machine Learning", "Python"],
      premium: true,
      progress: 60
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      description: "Build complete web applications from frontend to backend",
      level: "intermediate",
      duration: "25 hours",
      lessons: 45,
      students: 3200,
      rating: 4.9,
      thumbnail: "🌐",
      tags: ["Full Stack", "Node.js", "MongoDB"],
      premium: false,
      progress: 40
    },
    {
      id: 4,
      title: "Advanced TypeScript Patterns",
      description: "Master advanced TypeScript features and design patterns",
      level: "advanced",
      duration: "8 hours",
      lessons: 16,
      students: 950,
      rating: 4.7,
      thumbnail: "📘",
      tags: ["TypeScript", "Advanced", "Patterns"],
      premium: true,
      progress: 0
    },
    {
      id: 5,
      title: "Cloud Architecture & DevOps",
      description: "Learn cloud deployment, CI/CD, and infrastructure management",
      level: "advanced",
      duration: "20 hours",
      lessons: 38,
      students: 1400,
      rating: 4.8,
      thumbnail: "☁️",
      tags: ["Cloud", "DevOps", "AWS"],
      premium: true,
      progress: 25
    },
    {
      id: 6,
      title: "Mobile App Development",
      description: "Create cross-platform mobile apps with React Native",
      level: "intermediate",
      duration: "15 hours",
      lessons: 28,
      students: 2100,
      rating: 4.6,
      thumbnail: "📱",
      tags: ["Mobile", "React Native", "iOS", "Android"],
      premium: false,
      progress: 70
    }
  ];

  const filteredTutorials = tutorialSeries.filter(tutorial => {
    const matchesFilter = activeFilter === "all" || tutorial.level === activeFilter || 
                         (activeFilter === "premium" && tutorial.premium);
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const stats = [
    { number: "85+", label: "Tutorials", icon: <BookOpen className="h-6 w-6" /> },
    { number: "12K+", label: "Students", icon: <Users className="h-6 w-6" /> },
    { number: "150+", label: "Hours Content", icon: <Clock className="h-6 w-6" /> },
    { number: "4.8/5", label: "Rating", icon: <Star className="h-6 w-6" /> }
  ];

  const achievements = [
    { icon: <Trophy className="h-6 w-6 text-yellow-500" />, title: "Complete Beginner", desc: "Finish 5 beginner tutorials" },
    { icon: <Brain className="h-6 w-6 text-purple-600" />, title: "AI Explorer", desc: "Complete AI fundamentals course" },
    { icon: <Code className="h-6 w-6 text-blue-600" />, title: "Full Stack Master", desc: "Build 3 full-stack projects" },
    { icon: <Zap className="h-6 w-6 text-green-600" />, title: "Speed Learner", desc: "Complete 10 tutorials in 30 days" }
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
                <span className="text-xl font-bold text-gray-900">DevTutorials</span>
                <span className="text-xs text-gray-500 font-medium">Learn. Build. Master.</span>
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
                <Code className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="fade-in" style={{ animationDelay: '0.4s' }}>Master Development</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 fade-in" style={{ animationDelay: '0.6s' }}>
                With Our Tutorials
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.8s' }}>
              Join thousands of developers learning through comprehensive tutorials, hands-on projects, and expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '1s' }}>
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
                Browse Tutorials
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
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-purple-600'
                }`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 transition-all duration-300 ${
                  hoveredStat === index ? 'text-purple-600 scale-110' : 'text-gray-900'
                }`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Featured Tutorials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              Comprehensive learning paths to master development skills
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12 fade-in">
            <div className="relative mb-6">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <BookOpen className="h-5 w-5" />
              </div>
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 placeholder-gray-500"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial, index) => (
              <div 
                key={tutorial.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                    <span className="text-6xl">{tutorial.thumbnail}</span>
                  </div>
                  {tutorial.premium && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      PREMIUM
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                    {tutorial.level.charAt(0).toUpperCase() + tutorial.level.slice(1)}
                  </div>
                  {tutorial.progress > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200">
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000"
                        style={{ width: `${tutorial.progress}%` }}
                      />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{tutorial.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{tutorial.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutorial.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{tutorial.students.toLocaleString()} students</span>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 group"
                    >
                      {tutorial.progress > 0 ? 'Continue' : 'Start'}
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Unlock Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              Track your progress and earn badges as you master new skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            {/* Main CTA */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-blue-200 text-sm font-medium mb-6 fade-in">
                <Sparkles className="h-4 w-4 mr-2" />
                Limited Time Offer - Free Learning Plan
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
                Ready to Advance Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Development Skills?
                </span>
              </h2>
              
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto fade-in">
                Join 12,000+ developers who've accelerated their careers with our tutorials. Start your learning journey today.
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
                      <Code className="mr-3 h-6 w-6" />
                      Start Learning Now
                      <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                    </>
                  )}
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm fade-in">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  No Credit Card Required
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  7-Day Free Trial
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Hands-on Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorialIndex;