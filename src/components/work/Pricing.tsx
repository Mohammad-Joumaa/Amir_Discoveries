import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Crown, 
  Rocket,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Sparkles,
  TrendingUp,
  Brain,
  Bot,
  Cpu,
  Menu,
  ChevronDown,
  Loader2,
  Plus,
  Minus
} from "lucide-react";

const PricingPage = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookCall = () => {
    setIsBooking(true);
    setTimeout(() => {
      window.location.href = "/booking-a-call";
    }, 1200);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setTimeout(() => {
      setIsBooking(true);
      setTimeout(() => {
        window.location.href = "/booking-a-call";
      }, 1200);
    }, 500);
  };

  const navItems = [
    {
      name: "Services",
      dropdown: [
        { name: "Services", href: null, isLabel: true },
        { name: "Web Development", href: "/services/web-development" },
        { name: "AI & Automation", href: "/services/ai-automation" },
        { name: "Process Automation", href: "/services/process-automation" },
        { name: "Creative & Content", href: "/services/creative-content" },
      ],
    },
    {
      name: "Work",
      dropdown: [
        { name: "Work", href: null, isLabel: true },
        { name: "Case Studies", href: "/work/case-studies" },
        { name: "Testimonials", href: "/work/testimonials" },
        { name: "Before / After Gallery", href: "/work/before-after" },
        { name: "Pricing", href: "/pricing" },
      ],
    },
    {
      name: "About",
      dropdown: [
        { name: "About", href: null, isLabel: true },
        { name: "Our Story", href: "/about/our-story" },
        { name: "Team", href: "/about/team" },
        { name: "Careers", href: "/about/careers" },
      ],
    },
    {
      name: "Resources",
      dropdown: [
        { name: "Resources", href: null, isLabel: true },
        { name: "Blog", href: "/blog" },
        { name: "Templates & Downloads", href: "/resources/templates-downloads" },
        { name: "Tutorial Index", href: "/resources/tutorial-index" },
      ],
    },
  ];

  const plans = [
    {
      name: "Starter",
      icon: <Zap className="h-8 w-8" />,
      description: "Perfect for small businesses getting started",
      monthlyPrice: 497,
      yearlyPrice: 4970,
      popular: false,
      features: [
        "Basic Website Development",
        "Mobile Responsive Design",
        "SEO Optimization",
        "Contact Form Integration",
        "3 Months Support",
        "Basic Analytics Setup",
        "SSL Certificate",
        "Up to 5 Pages"
      ],
      notIncluded: [
        "AI Integration",
        "Advanced Automation",
        "Custom Development",
        "Priority Support"
      ],
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      name: "Professional",
      icon: <Crown className="h-8 w-8" />,
      description: "Most popular choice for growing businesses",
      monthlyPrice: 1497,
      yearlyPrice: 14970,
      popular: true,
      features: [
        "Everything in Starter",
        "AI Chatbot Integration",
        "Process Automation",
        "Custom Web Applications",
        "6 Months Support",
        "Advanced Analytics",
        "Payment Gateway Integration",
        "Up to 15 Pages",
        "CRM Integration",
        "Social Media Integration"
      ],
      notIncluded: [
        "Custom AI Models",
        "24/7 Priority Support",
        "Unlimited Revisions"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      name: "Enterprise",
      icon: <Rocket className="h-8 w-8" />,
      description: "Complete solution for large organizations",
      monthlyPrice: 2997,
      yearlyPrice: 29970,
      popular: false,
      features: [
        "Everything in Professional",
        "Custom AI Model Development",
        "Advanced Automation Workflows",
        "Dedicated Account Manager",
        "12 Months Support",
        "24/7 Priority Support",
        "Custom Integrations",
        "Unlimited Pages",
        "Advanced Security Features",
        "Custom Training Programs",
        "Unlimited Revisions",
        "Performance Optimization"
      ],
      notIncluded: [],
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50"
    }
  ];

  const addOns = [
    {
      name: "AI Consultation",
      description: "1-hour AI strategy session",
      price: 297,
      icon: <Brain className="h-6 w-6" />
    },
    {
      name: "Extra Revisions",
      description: "5 additional revision rounds",
      price: 197,
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      name: "Priority Support",
      description: "24/7 priority customer support",
      price: 97,
      icon: <Shield className="h-6 w-6" />
    },
    {
      name: "Rush Delivery",
      description: "50% faster project completion",
      price: 497,
      icon: <Clock className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: "What's included in the monthly support?",
      answer: "Our monthly support includes bug fixes, security updates, content updates, performance monitoring, and technical assistance. We also provide regular backups and uptime monitoring to ensure your website runs smoothly."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at your next billing cycle, and you'll retain access to current features until then."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Absolutely! While our packages cover most needs, we specialize in custom solutions. We can create bespoke AI models, unique automation workflows, and specialized integrations tailored to your specific requirements."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our work within the first 30 days, we'll provide a full refund. After 30 days, refunds are considered on a case-by-case basis."
    },
    {
      question: "How long does project delivery take?",
      answer: "Starter projects typically take 2-4 weeks, Professional projects 4-8 weeks, and Enterprise projects 8-16 weeks. Timeline depends on project complexity and your feedback response time. Rush delivery is available for an additional fee."
    },
    {
      question: "Do you provide training?",
      answer: "Yes! All plans include basic training on using your new system. Enterprise plans include comprehensive training programs. We also offer additional training sessions and documentation to ensure your team is comfortable with the technology."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "The AI automation saved us 15 hours per week. ROI was immediate!",
      rating: 5,
      plan: "Professional"
    },
    {
      name: "Michael Chen",
      company: "Global Solutions",
      text: "Their Enterprise solution transformed our entire workflow. Exceptional service!",
      rating: 5,
      plan: "Enterprise"
    },
    {
      name: "Emma Rodriguez",
      company: "Creative Studio",
      text: "Perfect starter package for our small business. Great value for money.",
      rating: 5,
      plan: "Starter"
    }
  ];

  const toggleDropdown = (index: string | number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); }
          50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.5); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient-shift {
          background-size: 300% 300%;
          animation: gradient-shift 12s ease infinite;
        }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .fade-in { animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        header {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: rgba(255 255 255 / 0.95);
          backdrop-filter: saturate(180%) blur(20px);
          transition: box-shadow 0.3s ease;
          border-bottom: 1px solid #e5e7eb;
        }
        header.scrolled {
          box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
        }
        nav > div > button {
          position: relative;
          min-height: 44px;
          font-weight: 600;
          color: #4b5563;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        nav > div > button:hover,
        nav > div > button:focus {
          color: #111827;
          outline: none;
        }
        nav > div > button::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #2563eb;
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        nav > div > button:hover::after,
        nav > div > button:focus::after,
        nav > div > button.active::after {
          width: 100%;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 6px;
          background: rgba(255 255 255 / 0.95);
          backdrop-filter: saturate(180%) blur(20px);
          border: 1px solid #d1d5db;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgb(0 0 0 / 0.1);
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease;
          z-index: 20;
        }
        .dropdown-menu.active {
          opacity: 1;
          visibility: visible;
        }
        .dropdown-menu .label {
          font-size: 0.75rem;
          font-weight: 700;
          color: #2563eb;
          padding: 8px 16px;
          border-bottom: 1px solid #e5e7eb;
          cursor: default;
          user-select: none;
        }
        .dropdown-menu a {
          display: block;
          padding: 10px 16px;
          font-size: 0.9rem;
          color: #4b5563;
          text-decoration: none;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .dropdown-menu a:hover,
        .dropdown-menu a:focus {
          background-color: #f3f4f6;
          color: #111827;
          outline: none;
        }
        @media (max-width: 767px) {
          nav {
            flex-direction: column;
          }
          .dropdown-menu {
            position: relative;
            transform: none !important;
            margin: 0;
            border: none;
            box-shadow: none;
            background: transparent;
            opacity: 1 !important;
            visibility: visible !important;
            min-width: auto;
          }
          .dropdown-menu a,
          .dropdown-menu .label {
            padding-left: 20px;
          }
          nav > div > button {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>

      {/* Header */}
      <header>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl rotate-45 shadow-lg" />
                <div className="absolute inset-1 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg rotate-12 opacity-80" />
                <div className="absolute inset-2 bg-white rounded-md flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Amir Discoveries</span>
                <span className="text-xs text-gray-500 font-medium">Intelligent Solutions</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 relative">
              {navItems.map((item, idx) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(idx)}
                    onMouseEnter={() => setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={activeDropdown === idx ? "active" : ""}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === idx}
                    type="button"
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 inline-block transition-transform ${
                        activeDropdown === idx ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <div
                    className={`dropdown-menu ${
                      activeDropdown === idx ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((link) =>
                      link.isLabel ? (
                        <div key={link.name} className="label">
                          {link.name}
                        </div>
                      ) : (
                        <a
                          key={link.name}
                          href={link.href ?? "#"}
                          onClick={() => setActiveDropdown(null)}
                          tabIndex={activeDropdown === idx ? 0 : -1}
                        >
                          {link.name}
                        </a>
                      )
                    )}
                  </div>
                </div>
              ))}
            </nav>

            {/* Book A Call Button Desktop */}
            <div className="hidden md:block">
              <Button
                size="sm"
                disabled={isBooking}
                onClick={handleBookCall}
                className="bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 transition-all duration-300 flex items-center gap-2 min-h-[44px]"
              >
                {isBooking ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4" />
                    Loading...
                  </>
                ) : (
                  "Book A Call"
                )}
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <nav className="md:hidden flex flex-col space-y-4 pt-4 border-t border-gray-200">
              {navItems.map((item, idx) => {
                const mobileIndex = `mobile-${idx}`;
                const isActive = activeDropdown === mobileIndex;
                return (
                  <div key={item.name} className="flex flex-col">
                    <button
                      className="flex justify-between items-center w-full text-left font-semibold text-gray-700 min-h-[44px]"
                      onClick={() =>
                        setActiveDropdown(isActive ? null : mobileIndex)
                      }
                      aria-expanded={isActive}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transition-transform ${
                          isActive ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {isActive && (
                      <div className="ml-4 flex flex-col space-y-1 mt-2">
                        {item.dropdown.map((link) =>
                          link.isLabel ? (
                            <div
                              key={link.name}
                              className="text-xs font-bold text-blue-600 cursor-default select-none"
                            >
                              {link.name}
                            </div>
                          ) : (
                            <a
                              key={link.name}
                              href={link.href ?? "#"}
                              className="block py-2 text-gray-600 hover:text-gray-900"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {link.name}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile Book a Call */}
              <Button
                size="sm"
                disabled={isBooking}
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 flex items-center justify-center gap-2 min-h-[44px]"
                onClick={() => {
                  handleBookCall();
                  setIsMenuOpen(false);
                }}
              >
                {isBooking ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4" />
                    Loading...
                  </>
                ) : (
                  "Book A Call"
                )}
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 animate-gradient-shift" />
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-400 blur-xl animate-float" />
            <div className="absolute top-2/3 right-1/4 w-40 h-40 rounded-full bg-blue-400 blur-xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/3 right-1/3 w-28 h-28 rounded-full bg-pink-400 blur-xl animate-float" style={{ animationDelay: '4s' }} />
          </div>
        </div>
        
        <div className={`container mx-auto text-center relative z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg">
                <Crown className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="fade-in" style={{ animationDelay: '0.4s' }}>Simple, Transparent</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 fade-in" style={{ animationDelay: '0.6s' }}>
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.8s' }}>
              Choose the perfect plan for your business needs. All plans include our core features with no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12 fade-in" style={{ animationDelay: '1s' }}>
              <div className="bg-white p-1 rounded-full shadow-lg border">
                <div className="flex items-center">
                  <button
                    onClick={() => setBillingPeriod('monthly')}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      billingPeriod === 'monthly' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingPeriod('yearly')}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 relative ${
                      billingPeriod === 'yearly' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Yearly
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Save 20%
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Pricing Plans */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {plans.map((plan, index) => (
        <div 
          key={plan.name}
          className={`relative bg-gradient-to-br ${plan.bgGradient} rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 fade-in ${
            plan.popular ? 'ring-2 ring-purple-500 animate-pulse-glow' : ''
          } ${selectedPlan === plan.name ? 'ring-2 ring-green-500' : ''}`}
          style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          onMouseEnter={() => setHoveredPlan(index)}
          onMouseLeave={() => setHoveredPlan(null)}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                <Star className="h-4 w-4 mr-1" />
                Most Popular
              </div>
            </div>
          )}
          
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.gradient} text-white mb-4 transition-all duration-300 ${hoveredPlan === index ? 'scale-110' : ''}`}>
              {plan.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">
                ${billingPeriod === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12)}
              </span>
              <span className="text-gray-600 ml-2">
                {billingPeriod === 'monthly' ? '/month' : '/month (billed yearly)'}
              </span>
            </div>
            {billingPeriod === 'yearly' && (
              <div className="text-sm text-green-600 font-semibold mb-4">
                Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} annually
              </div>
            )}
          </div>

          <div className="space-y-4 mb-8">
            {plan.features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
            {plan.notIncluded.map((feature, idx) => (
              <div key={idx} className="flex items-start opacity-50">
                <X className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-500">{feature}</span>
              </div>
            ))}
          </div>

          <Button 
            onClick={() => handleSelectPlan(plan.name)}
            disabled={isBooking || selectedPlan === plan.name}
            className={`w-full transition-all duration-300 ${
              plan.name === "Starter" 
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white hover:shadow-lg hover:scale-105"
                : plan.name === "Professional"
                ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white border-0 hover:scale-105`
                : "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white hover:shadow-lg hover:scale-105"
            }`}
          >
            {selectedPlan === plan.name ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                Processing...
              </div>
            ) : (
              <>
                Choose {plan.name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      ))}
    </div>
  </div>
</section>
          {/* Add-ons Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Enhance Your Plan</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
        Customize your package with these powerful add-ons
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {addOns.map((addOn, index) => (
        <div 
          key={addOn.name}
          className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in"
          style={{ animationDelay: `${0.2 + index * 0.1}s` }}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-4 mx-auto">
            {addOn.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{addOn.name}</h3>
          <p className="text-gray-600 mb-4 text-center">{addOn.description}</p>
          <div className="text-center mb-4">
            <span className="text-2xl font-bold text-gray-900">${addOn.price}</span>
            <span className="text-gray-600 ml-1">one-time</span>
          </div>
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-md transition-all duration-300"
            onClick={() => handleSelectPlan(addOn.name)}
          >
            Add to Plan
            <Plus className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {testimonial.plan}
                  </span>
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 fade-in">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
              Everything you need to know about our services and pricing
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <Minus className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 pt-0 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Final CTA Section */}
<section className="relative overflow-hidden">
  {/* Animated Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900">
    <div className="absolute inset-0 bg-black opacity-20" />
    {/* Floating Elements */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10 animate-pulse" />
    <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-5 animate-pulse" style={{ animationDelay: '2s' }} />
  </div>

  {/* Content */}
  <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      {/* Main CTA */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-blue-200 text-sm font-medium mb-6 fade-in">
          <Sparkles className="h-4 w-4 mr-2" />
          Ready to get started?
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
          Transform Your Business
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            With Our Solutions
          </span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto fade-in">
          Join hundreds of satisfied clients who've revolutionized their operations with our services.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-12 py-6 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={handleBookCall}
            disabled={isBooking}
          >
            {isBooking ? (
              <div className="flex items-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Processing...
              </div>
            ) : (
              <>
                Get Started Now
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </>
            )}
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-purple-900 font-bold px-12 py-6 rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Compare All Plans
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm mt-12 fade-in">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            No Setup Fees
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Money-Back Guarantee
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            24/7 Support
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Fast Implementation
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-30" />
  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-purple-500 to-transparent opacity-10 rounded-full transform translate-x-32 -translate-y-32" />
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500 to-transparent opacity-10 rounded-full transform -translate-x-32 translate-y-32" />
</section>
      
    </div>
  );
};

export default PricingPage;