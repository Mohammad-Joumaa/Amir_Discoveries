import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  RefreshCcw,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import weeklyPrizeVideo from '../assets/Weekly Prize.mp4';
import imgThumbnail from '../assets/img.png'; // <-- your thumbnail image

const SkoolCommunity = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const skoolCommunityLink =
    'https://www.skool.com/amir-discoveries-in-ai-5346/about';

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Comprehensive Courses',
      description:
        'Master AI Agents & n8n automation with structured learning paths',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Community',
      description:
        'Connect with industry professionals and automation enthusiasts',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Exclusive Resources',
      description: 'Access premium tools, templates, and insider knowledge',
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden py-12 md:py-20 flex items-center justify-center">
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-[5%] w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse-light" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse-light" />
        <div className="absolute top-[60%] left-[30%] w-64 h-64 bg-indigo-500/8 rounded-full blur-3xl animate-float-subtle" />
      </div>

      <div
        className={`relative z-10 container mx-auto px-4 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Text */}
          <div className="order-2 md:order-1 text-center md:text-left fade-in delay-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full text-white text-sm mb-6">
              <Award className="w-4 h-4" />
              Exclusive Community Access
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Amir Discoveries
              </span>
              <br />
              <span className="text-blue-600">Skool Community</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Join thousands mastering AI
              <span className="relative inline-block text-indigo-600 font-extrabold mx-2 animate-sparkle-text">
                <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400" />
                and
                <Sparkles className="absolute -bottom-1 -left-1 w-3 h-3 text-yellow-400" />
              </span>
              n8n workflows in our exclusive ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start fade-in delay-3">
              <button
                onClick={() => window.open(skoolCommunityLink, '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 transform flex items-center gap-2"
              >
                Join Community
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open(skoolCommunityLink, '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 transform"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Video */}
          <div className="order-1 md:order-2 relative transform md:translate-x-8 fade-in delay-2">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-100 transform -rotate-3 hover:rotate-0 transition-transform">
              <div className="aspect-video relative">
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={imgThumbnail} // <-- updated thumbnail here
                  controls={true}
                  loop
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={weeklyPrizeVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay Buttons */}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
                    isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePlayPause}
                      className="bg-blue-600 hover:bg-blue-500 text-white rounded-full p-4 shadow-xl border-4 border-white/20"
                      aria-label="Play/Pause video"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6 ml-1" />
                      )}
                    </button>
                    <button
                      onClick={handleRestart}
                      className="bg-gray-600 hover:bg-gray-500 text-white rounded-full p-3 shadow-xl border-2 border-white/20"
                      aria-label="Restart video"
                    >
                      <RefreshCcw className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>

              {/* Video Stats */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-2 text-white">
                <div className="flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">2.5k+ Members</span>
                </div>
                <div className="flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">50+ Courses</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-xl bg-white/80 border border-gray-200 hover:shadow-lg hover:bg-white backdrop-blur-sm fade-in delay-${
                index + 5
              }`}
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkoolCommunity;