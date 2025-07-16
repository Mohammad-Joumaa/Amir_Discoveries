import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";

const Blog = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const blogPosts = [
   {
      title: "How to use MCP for smart automation",
      description: "Focus on what truly matters in your business, let MCP take care of the repetitive, time-consuming tasks, With MCP, you can streamline your core operations, eliminate the busywork, and unlock more time to innovate, grow, and lead with strategy.",
      videoUrl: "https://www.youtube.com/embed/W3w-6LjPbZw?si=4DkW-pbnqKnSPAvn",
      image: "/src/assets/read.jpg"
    },
    {
      title: "How to make AI respond using your documents, RAG explained", 
      description: "Focus on making smarter decisions—let RAG-powered AI handle the searching, reading, and responding. With RAG, your documents become intelligent, instantly accessible, and always ready to answer.",
      videoUrl: "https://www.youtube.com/embed/GC-EmeyjrZw?si=gKQzocrInWKJDKOb",
      image: "/src/assets/read.jpg"
    },
    {
      title: "How I automated blog posts, captions, and images using n8n!",
      description: "Focus on creating amazing content, let n8n handle the repetitive tasks of writing posts, crafting captions, and generating images. With n8n, you can automate your entire content workflow, unlock more energy to engage your audience, grow your brand.", 
      videoUrl: "https://www.youtube.com/embed/rRnTsQv5L2w?si=ku9-LK9H_KUg90Pf",
      image: "/src/assets/read.jpg"
    }
  ];

  const openVideoModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Read our <br />
              <span className="text-blue-600">automation blog</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.description}
                  </p>
                  <Button 
                    variant="default" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105"
                    onClick={() => openVideoModal(post.videoUrl)}
                  >
                    Play the video →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4 bg-white rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <X size={16} />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;