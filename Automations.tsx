import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";
import projectManagementAutomation from "../assets/project-management-automation.jpg"; // adjust if image is elsewhere

const Automations = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const automations = [
    {
      title: "Automating downloads of posts, blogs & images using n8n",
      videoId: "rRnTsQv5L2w"
    },
    {
      title: "Building a profitable monthly automation system",
      videoId: "ScjCeSj9keQ"
    },
    {
      title: "Leverage AI with n8n Before You Miss the Trainn",
      videoId: "adacGZ14ncM"
    },
    {
      title: "From Product Image to Viral 3D Video with n8n, OpenAI & RunwayML",
      videoId: "H_XdWTM8zC0"
    },
    {
      title: "Turn WhatsApp into a Personal Assistant with n8n",
      videoId: "Aa07zYbU1gY"
    },
    {
      title: "Auto Face-Free Videos from Telegram with n8n",
      videoId: "4kKamIUh3vw"
    },
    {
      title: "Turn Any Invoice into Structured Data with AI & n8n",
      videoId: "svoV5GfgN8Q"
    },
    {
      title: "n8n Automation: Handling Customer Voice Requests",
      videoId: "p-EjFXUyAmk"
    },
    {
      title: "AI That Plans a Complete Trip for Customers!",
      videoId: "nacMYVXslu4"
    },
    {
      title: "Turn Telegram into Your Personal Pomodoro Coach with n8n!",
      videoId: "exoaA1TB7Fk"
    },
  ];

  const handleCardClick = (videoId: string, title: string) => {
    setSelectedVideo(videoId);
    setSelectedTitle(title);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setSelectedTitle("");
  };

  return (
    <section id="processes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-brand-purple">Our Automations:</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {automations.map((automation, index) => (
            <Card
              key={automation.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleCardClick(automation.videoId, automation.title)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-brand-purple mb-2">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  <img
                    src={projectManagementAutomation}
                    alt={`${automation.title} Image`}
                    className="w-full h-20 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-sm font-medium text-foreground">
                  {automation.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <a
            href="https://www.youtube.com/@AmirDiscoveries"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Card className="inline-block group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-brand-purple group-hover:text-purple-700 transition-colors">
                  And so much more!
                </h3>
              </CardContent>
            </Card>
          </a>
        </div>

        <div className="text-center">
          <Link
            to="/booking-a-call"
            className="inline-block bg-brand-purple text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Book a Call
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {selectedTitle}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Automations;