import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import automationFlowImg from "@/assets/automation-flow.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "How to automate digital marketing agency",
      description: "Focus on what matters most to your business and let the boring, repetitive tasks run on autopilot.",
      image: automationFlowImg
    },
    {
      title: "How to automate digital marketing agency", 
      description: "A social media ads tool that helps you achieve your best business goals and spread it to the worlds audience",
      image: automationFlowImg
    },
    {
      title: "How to automate digital marketing agency",
      description: "A social media ads tool that helps you achieve your best business goals and spread it to the worlds audience", 
      image: automationFlowImg
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Read our <br />
            <span className="text-brand-purple">automation blog</span>
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
                <CardTitle className="text-lg mb-3 group-hover:text-brand-purple transition-colors duration-200">
                  {post.title}
                </CardTitle>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {post.description}
                </p>
                <Button variant="link" className="p-0 h-auto text-brand-purple" asChild>
                  <a href="#blog">Get Started →</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;