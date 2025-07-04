import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "./hero.css";
// At the top of your file, outside the component
const AUTOMATION_CATEGORIES = [
  "Email Automation",
  "Data Processing",
  "Report Generation",
  "CRM Integration",
  "Social Media Management",
  "Invoice Processing",
  "Lead Management",
  "Workflow Optimization",
] as const;

const CTA = () => {
  return (
    <section id="consultation" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Ready to systematize and automate your business?
          </h2>

          <Button variant="cta" size="lg" className="text-lg px-8 py-4" asChild>
            <a
              href="https://www.axeautomation.co/free-automation-consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Call →
            </a>
          </Button>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-8">
            Not sure if your business is ready to automate yet?
          </p>

          <h3 className="text-2xl font-bold text-foreground mb-8">
            Check our Automation Business Assessment below
          </h3>

          <Button
            variant="outline"
            size="lg"
            className="hover:bg-primary hover:text-white transition-colors"
            asChild
          >
            <a
              href="https://form.typeform.com/to/CFon11Mc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Take Automation Quiz →
            </a>
          </Button>
        </div>

        {/* Automation Assessment Cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 opacity-60">
          {AUTOMATION_CATEGORIES.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-md transition-all duration-300 hover:border-blue-400 to-primary"
              id="changecolor"
            >
              <CardContent className="p-4 text-center">
                <div
                  className="text-xs text-primary-foreground"
                  id="changecolor"
                >
                  {category}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;