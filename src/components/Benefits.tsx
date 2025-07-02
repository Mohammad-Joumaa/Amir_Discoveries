import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import workspaceImg from "@/assets/workspace.jpg";

const Benefits = () => {
  const benefits = [
    "More focus on strategic work vs. manual work",
    "No more bottlenecks or delays", 
    "Higher output per employee"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Put repetitive tasks on autopilot
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              You're not in the business of preparing documents, filling spreadsheets, copying data, or writing the same emails every day.
            </p>
            
            <p className="text-lg font-semibold text-foreground mb-8">
              You are in the business of delivering results to your clients.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg" asChild>
              <a href="#consultation">Book a Free Call →</a>
            </Button>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <img 
                  src={workspaceImg} 
                  alt="Modern workspace with automation tools" 
                  className="w-full h-full object-cover"
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