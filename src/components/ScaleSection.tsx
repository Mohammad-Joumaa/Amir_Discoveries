import { Button } from "@/components/ui/button";
import workspaceImg from "@/assets/workspace.jpg";

const ScaleSection = () => {
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
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Lets scale together
            </h2>
            
            <Button variant="cta" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="https://www.axeautomation.co/free-automation-consultation" target="_blank" rel="noopener noreferrer">
                Book a Free Call →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;