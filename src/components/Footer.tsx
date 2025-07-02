import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-purple to-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-foreground">Axe Automation</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              We integrate your apps, install AI and automate your processes to end busywork and skyrocket productivity across your entire company.
            </p>
            <Button variant="cta" asChild>
              <a href="https://www.axeautomation.co/free-automation-consultation" target="_blank" rel="noopener noreferrer">
                Get Started Today →
              </a>
            </Button>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#automations" className="hover:text-foreground transition-colors">Workflow Automation</a></li>
              <li><a href="#automations" className="hover:text-foreground transition-colors">AI Integration</a></li>
              <li><a href="#automations" className="hover:text-foreground transition-colors">CRM Automation</a></li>
              <li><a href="#automations" className="hover:text-foreground transition-colors">Sales Pipeline</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="https://form.typeform.com/to/CFon11Mc" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Assessment</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Axe Automation. All rights reserved. Built for automation enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;