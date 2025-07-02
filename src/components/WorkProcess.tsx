import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const WorkProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Driven by strategy",
      description: "We start with understanding your business goals and identify key automation opportunities."
    },
    {
      number: "02", 
      title: "Part of your team",
      description: "We integrate seamlessly with your existing team and processes to ensure smooth implementation."
    },
    {
      number: "03",
      title: "Innovators to the core", 
      description: "We leverage cutting-edge automation technologies and AI to transform your workflows."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Take a look <br />
            <span className="text-brand-purple">into how we work</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-brand-purple">
                      {step.number}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <ChevronDown className="w-6 h-6 text-brand-purple" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;