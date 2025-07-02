import { Card, CardContent } from "@/components/ui/card";

const Automations = () => {
  const automations = [
    "Client Onboarding",
    "Sales Pipeline", 
    "Proposal Creation",
    "Employee Onboarding",
    "Project Management",
    "CRM",
    "Client Reporting",
    "Client Communications",
    "Payment & Contracts",
    "Operations"
  ];

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
            <Card key={automation} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-brand-purple mb-2">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-sm text-muted-foreground mb-2">/</div>
                <h3 className="text-sm font-medium text-foreground">{automation}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-brand-purple">And so much more!</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Automations;