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
  },
  {
    number: "04",
    title: "Data-driven decisions",
    description: "We continuously analyze performance data to refine workflows and maximize efficiency gains."
  },
  {
    number: "05",
    title: "Scalable by design",
    description: "Our solutions are built to grow with your business, adapting easily to future challenges and opportunities."
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

        <div className="max-w-2xl mx-auto space-y-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-brand-purple">
                        {step.number}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                    <div className="text-brand-purple">
                      <ChevronDown className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
                    </div>
                  </div>
                </CardHeader>
                
                <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-32">
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed pl-12 pb-4">
                      {step.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;