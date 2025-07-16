import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Bot, Mail, Linkedin, Github, Crown, Rocket, Star, Zap, Sparkles } from "lucide-react";
import mohammadImage from "@/assets/mohammad.png";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Mohammad Joumaa",
      role: "Full Stack Developer",
      description: "Expert in modern web technologies with a passion for creating seamless digital experiences. Specializes in React, Node.js, and cloud architecture.",
      skills: ["React", "Node.js", "TypeScript", "Database Design", "Cloud Architecture", "API Development"],
      gradient: "from-purple-600 to-indigo-600",
      bgColor: "bg-purple-50",
      experience: "3+ Years",
      projects: "25+ Projects",
      avatar: (
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={mohammadImage} 
            alt="Mohammad Joumaa" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      )
    },
    {
      name: "Amir Ibrahim",
      role: "CEO & Senior AI Leader",
      description: "Visionary leader and founder of Amir Discoveries, driving innovation in AI automation and intelligent systems. With extensive experience in AI strategy and implementation, Amir leads our team to deliver cutting-edge solutions.",
      skills: ["AI Strategy", "Machine Learning", "Leadership", "Process Automation", "Neural Networks", "Business Development"],
      gradient: "from-purple-500 via-pink-500 to-red-500",
      bgColor: "bg-purple-50",
      experience: "5+ Years",
      projects: "50+ Projects",
      isLeader: true,
      avatar: (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full"></div>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-5 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-t-lg flex justify-center items-center">
            <div className="absolute -bottom-1 left-0 right-0 h-2 bg-yellow-400 rounded-b-sm"></div>
            <div className="absolute top-0 w-1 h-2 bg-yellow-500 rounded-full -left-1"></div>
            <div className="absolute top-0 w-1 h-2 bg-yellow-500 rounded-full -right-1"></div>
          </div>
          <div className="absolute top-6 left-5 w-2 h-2 bg-white rounded-full animate-blink"></div>
          <div className="absolute top-6 right-5 w-2 h-2 bg-white rounded-full animate-blink" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-12 h-4 border-2 border-white rounded-full"></div>
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white"></div>
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-purple-700 rounded-b-full"></div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white rounded-full"></div>
        </div>
      )
    },
    {
      name: "Mostafa Asaad",
      role: "Junior AI Agent Automation",
      description: "Rising talent in AI automation, bringing fresh perspectives to intelligent solutions. Focused on emerging AI technologies and innovative implementations.",
      skills: ["AI Development", "Automation Tools", "Data Analysis", "Innovation", "Python", "TensorFlow"],
      gradient: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50",
      experience: "2+ Years",
      projects: "15+ Projects",
      avatar: (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full"></div>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-5 bg-blue-800 rounded-t-full"></div>
          <div className="absolute top-6 left-4 w-2 h-2 bg-white rounded-full animate-blink"></div>
          <div className="absolute top-6 right-4 w-2 h-2 bg-white rounded-full animate-blink" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center">
            <div className="w-3 h-3 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const stats = [
    { number: "80+", label: "Combined Projects", icon: <Rocket className="h-6 w-6" /> },
    { number: "9+", label: "Years Experience", icon: <Star className="h-6 w-6" /> },
    { number: "15+", label: "Technologies", icon: <Zap className="h-6 w-6" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Sparkles className="h-6 w-6" /> }
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
        @keyframes blink {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.1); }
        }
        .animate-blink { animation: blink 3s ease-in-out infinite; }
      `}</style>

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
                <Brain className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="fade-in" style={{ animationDelay: '0.4s' }}>Meet Our</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 fade-in" style={{ animationDelay: '0.6s' }}>
                Leadership Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.8s' }}>
              The brilliant minds behind Amir Discoveries - passionate professionals dedicated to transforming businesses through AI
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Our Core Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              Experts in AI, development, and automation working together to deliver exceptional results
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
            {/* Mohammad - Left */}
            <div 
              className="w-full md:w-1/3 group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 fade-in cursor-pointer overflow-hidden"
              style={{ animationDelay: '0.2s' }}
              onMouseEnter={() => setHoveredMember(0)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${teamMembers[0].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className={`h-1 bg-gradient-to-r ${teamMembers[0].gradient}`} />
              <div className="relative z-10 p-8">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-6 ${teamMembers[0].bgColor} rounded-full mb-4 transform transition-all duration-300 ${
                    hoveredMember === 0 ? 'scale-110 animate-float' : ''
                  }`}>
                    <div className={`p-3 bg-gradient-to-r ${teamMembers[0].gradient} rounded-full shadow-lg`} style={{ width: '100px', height: '100px' }}>
                      {teamMembers[0].avatar}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{teamMembers[0].name}</h3>
                  <p className={`text-lg font-medium mb-2 bg-gradient-to-r ${teamMembers[0].gradient} bg-clip-text text-transparent`}>
                    {teamMembers[0].role}
                  </p>
                  
                  <div className="flex justify-center space-x-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900">{teamMembers[0].experience}</div>
                      <div className="text-xs text-gray-500">Experience</div>
                    </div>
                    <div className="w-px h-8 bg-gray-200" />
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900">{teamMembers[0].projects}</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {teamMembers[0].description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 text-center">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {teamMembers[0].skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-300 ${
                          hoveredMember === 0 
                            ? `bg-gradient-to-r ${teamMembers[0].gradient} text-white shadow-md` 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-center space-x-4">
                    <button className={`p-2 rounded-full transition-all duration-300 ${
                      hoveredMember === 0 
                        ? `bg-gradient-to-r ${teamMembers[0].gradient} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className={`p-2 rounded-full transition-all duration-300 ${
                      hoveredMember === 0 
                        ? `bg-gradient-to-r ${teamMembers[0].gradient} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className={`p-2 rounded-full transition-all duration-300 ${
                      hoveredMember === 0 
                        ? `bg-gradient-to-r ${teamMembers[0].gradient} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${teamMembers[0].gradient} rounded-full opacity-20`} />
              <div className={`absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r ${teamMembers[0].gradient} rounded-full opacity-10`} />
            </div>
            
            {/* Amir - Center */}
            <div 
              className="w-full md:w-1/3 group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 fade-in cursor-pointer overflow-hidden border-2 border-purple-500/20"
              style={{ animationDelay: '0.3s', transform: 'scale(1.05)' }}
              onMouseEnter={() => setHoveredMember(1)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="absolute top-4 right-4 z-10 flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                <Crown className="h-3 w-3 mr-1" />
                Founder & CEO
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-br ${teamMembers[1].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className={`h-1 bg-gradient-to-r ${teamMembers[1].gradient}`} />
              <div className="relative z-10 p-8">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-6 ${teamMembers[1].bgColor} rounded-full mb-4 transform transition-all duration-300 ${
                    hoveredMember === 1 ? 'scale-110 animate-float' : ''
                  }`}>
                    <div className={`p-3 bg-gradient-to-r ${teamMembers[1].gradient} rounded-full shadow-lg`} style={{ width: '100px', height: '100px' }}>
                      {teamMembers[1].avatar}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{teamMembers[1].name}</h3>
                  <p className={`text-lg font-medium mb-2 bg-gradient-to-r ${teamMembers[1].gradient} bg-clip-text text-transparent`}>
                    {teamMembers[1].role}
                  </p>
                  
                  <div className="flex justify-center space-x-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900">{teamMembers[1].experience}</div>
                      <div className="text-xs text-gray-500">Experience</div>
                    </div>
                    <div className="w-px h-8 bg-gray-200" />
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900">{teamMembers[1].projects}</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {teamMembers[1].description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 text-center">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {teamMembers[1].skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-300 ${
                          hoveredMember === 1 
                            ? `bg-gradient-to-r ${teamMembers[1].gradient} text-white shadow-md` 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-center space-x-4">
                    <button className={`p-2 rounded-full transition-all duration-300 ${
                      hoveredMember === 1 
                        ? `bg-gradient-to-r ${teamMembers[1].gradient} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className={`p-2 rounded-full transition-all duration-300 ${
                      hoveredMember === 1 
                        ? `bg-gradient-to-r ${teamMembers[1].gradient} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className={`p-2 rounded-full transition-all duration-300 ${
                      hoveredMember === 1 
                        ? `bg-gradient-to-r ${teamMembers[1].gradient} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${teamMembers[1].gradient} rounded-full opacity-20`} />
              <div className={`absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r ${teamMembers[1].gradient} rounded-full opacity-10`} />
            </div>
            
            {/* Mostafa - Right */}
            <div 
              className="w-full md:w-1/3 group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 fade-in cursor-pointer overflow-hidden"
              style={{ animationDelay: '0.4s' }}
              onMouseEnter={() => setHoveredMember(2)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${teamMembers[2].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className={`h-1 bg-gradient-to-r ${teamMembers[2].gradient}`} />
              <div className="relative z-10 p-8">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-6 ${teamMembers[2].bgColor} rounded-full mb-4 transform transition-all duration-300 ${
                    hoveredMember === 2 ? 'scale-110 animate-float' : ''
                  }`}>
                    <div className={`p-3 bg-gradient-to-r ${teamMembers[2].gradient} rounded-full shadow-lg`} style={{ width: '100px', height: '100px' }}>
                      {teamMembers[2].avatar}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{teamMembers[2].name}</h3>
                  <p className={`text-lg font-medium mb-2 bg-gradient-to-r ${teamMembers[2].gradient} bg-clip-text text-transparent`}>
                    {teamMembers[2].role}
                  </p>
                  
                  <div className="flex justify-center space-x-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900">{teamMembers[2].experience}</div>
                      <div className="text-xs text-gray-500">Experience</div>
                    </div>
                    <div className="w-px h-8 bg-gray-200" />
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900">{teamMembers[2].projects}</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {teamMembers[2].description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 text-center">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {teamMembers[2].skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-300 ${
                          hoveredMember === 2 
                            ? `bg-gradient-to-r ${teamMembers[2].gradient} text-white shadow-md` 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-center space-x-4">
                    <button className={`p-2 rounded-full transition-all duration-300 ${
                      hoveredMember === 2 
                        ? `bg-gradient-to-r ${teamMembers[2].gradient} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className={`p-2 rounded-full transition-all duration-300 ${
                      hoveredMember === 2 
                        ? `bg-gradient-to-r ${teamMembers[2].gradient} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className={`p-2 rounded-full transition-all duration-300 ${
                      hoveredMember === 2 
                        ? `bg-gradient-to-r ${teamMembers[2].gradient} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${teamMembers[2].gradient} rounded-full opacity-20`} />
              <div className={`absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r ${teamMembers[2].gradient} rounded-full opacity-10`} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Team Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              Our collective expertise delivers exceptional results for our clients
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

      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-blue-200 text-sm font-medium mb-6 fade-in">
              <Sparkles className="h-4 w-4 mr-2" />
              We're Hiring Talented Professionals
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
              Want to Join Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Innovative Team?
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto fade-in">
              We're always looking for passionate individuals who share our vision for AI-powered solutions.
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-12 py-6 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl fade-in"
              onClick={() => window.location.href = "/careers"}
            >
              <Brain className="mr-3 h-6 w-6" />
              View Open Positions
              <Rocket className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;