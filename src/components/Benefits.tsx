import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import workspaceImg from "@/assets/pics-01.jpg";

const Benefits = () => {
  const benefits = [
    "Automate client communication and workflows",
    "Get insights instantly, without digging through files", 
    "Free up your team to focus on high-impact work"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
             ⚡️Work Smarter, Not Harder with AI Systems
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              You're not in the business of logging data, chasing follow-ups, answering the same messages, or wasting hours on admin tasks.
            </p>
            
            <p className="text-lg font-semibold text-foreground mb-8">
             Your time is better spent on closing deals and growing your business.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="#consultation">Book a Free Call →</a>
            </Button>
          </div>

          <div className="relative w-full max-w-2xl mx-auto lg:mx-0 lg:ml-8"> {/* Reduced lg:ml-16 to lg:ml-8 */}
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <img 
                  src={workspaceImg} 
                  alt="Modern workspace with automation tools" 
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-primary/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;