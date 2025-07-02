import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import automationBadge from "@/assets/automation-badge.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated Lines Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--brand-purple))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
          <path d="M0 200 Q300 100 600 200 T1200 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M0 400 Q400 300 800 400 T1200 400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M0 600 Q250 500 500 600 T1200 600" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src={automationBadge} 
                alt="Automation Badge" 
                className="w-24 h-24 rounded-full shadow-lg animate-pulse"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-purple/20 to-primary/20 animate-spin-slow"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-foreground">We automate</span>
            <span className="block text-foreground">your workflows</span>
            <span className="block text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-normal italic mt-4">
              for highly profitable scale,
            </span>
            <span className="block text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-normal italic">
              custom and done-for-you.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We integrate your apps, install AI and automate your processes to end busywork and skyrocket productivity across your entire company.
          </p>

          {/* Award Badges */}
          <div className="flex justify-center items-center space-x-4 mb-8 opacity-60">
            <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">Top Clutch.co RPA 2024</div>
            <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">Marketing Automation 2024</div>
            <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">Bot Development 2024</div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="#consultation">Learn More About Us →</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;