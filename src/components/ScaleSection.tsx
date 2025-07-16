import { Button } from "@/components/ui/button";
import workspaceImg from "@/assets/pics-02.jpg"; // Changed to pics-02.jpg
import { useNavigate } from "react-router-dom";

const ScaleSection = () => {
  const navigate = useNavigate();

  const handleBookCallClick = () => {
    navigate("/booking-a-call");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={workspaceImg} 
                alt="Professional business meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-primary/10 rounded-lg"></div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Let's scale together
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your business with intelligent automation? We'll help you identify the best opportunities, implement proven solutions, and scale your operations efficiently.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-brand-purple rounded-full flex-shrink-0"></div>
                <span className="text-foreground">Custom AI solutions tailored to your business needs</span>
              </div>
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-brand-purple rounded-full flex-shrink-0"></div>
                <span className="text-foreground">Seamless integration with your existing systems</span>
              </div>
              <div className="flex items-center space-x-3 text-left">
                <div className="w-2 h-2 bg-brand-purple rounded-full flex-shrink-0"></div>
                <span className="text-foreground">Proven results that save time and increase revenue</span>
              </div>
            </div>
            
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              onClick={handleBookCallClick}
            >
              Book a Free Call →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;