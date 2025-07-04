import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const Footer = () => {
  const [isBooking, setIsBooking] = useState(false);

  const handleBookCall = () => {
    setIsBooking(true);
    setTimeout(() => {
      window.location.href = "/booking-a-call";
    }, 1200);
  };

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl rotate-45 shadow-lg" />
                <div className="absolute inset-1 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg rotate-12 opacity-80" />
                <div className="absolute inset-2 bg-white rounded-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Amir Discoveries</span>
                <span className="text-xs text-muted-foreground font-medium">Intelligent Solutions</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              We integrate your apps, install AI and automate your processes to end busywork and skyrocket productivity across your entire company.
            </p>
            <Button
              variant="cta"
              disabled={isBooking}
              onClick={handleBookCall}
              className="transition-all duration-300 hover:bg-green-500 hover:border-green-500 flex items-center gap-2"
            >
              {isBooking ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4" />
                  Loading...
                </>
              ) : (
                "Get Started Today →"
              )}
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
              <li><a href="#contact" className="hover:text-foreground transition-colors">Submit-A-Ticket</a></li>
              <li><a href="https://form.typeform.com/to/CFon11Mc" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Assessment</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 MJ. All rights reserved. Crafted with precision for automation-driven growth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
