import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Loader2 } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | number | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
  {
    name: "Services",
    dropdown: [
      { name: "Services", href: null, isLabel: true }, // label
      { name: "Web Development", href: "/services/web-development" },
      { name: "AI & Automation", href: "/services/ai-automation" },
      { name: "Process Automation", href: "/services/process-automation" },
      { name: "Creative & Content", href: "/services/creative-content" },
    ],
  },
  {
    name: "Work",
    dropdown: [
      { name: "Work", href: null, isLabel: true }, // add label here!
      { name: "Case Studies", href: "/work/case-studies" },
      { name: "Testimonials", href: "/work/testimonials" },
      { name: "Before / After Gallery", href: "/work/before-after" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    name: "About",
    dropdown: [
      { name: "About", href: null, isLabel: true }, // label added here too
      { name: "Our Story", href: "/about/our-story" },
      { name: "Team", href: "/about/team" },
      { name: "Careers", href: "/about/careers" },
    ],
  },
  {
    name: "Resources",
    dropdown: [
      { name: "Resources", href: null, isLabel: true }, // label here as well
      { name: "Blog", href: "/blog" },
      { name: "Templates & Downloads", href: "/resources/templates-downloads" },
      { name: "Tutorial Index", href: "/resources/tutorial-index" },
    ],
  },
];

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 10) {
        document.querySelector("header")?.classList.add("scrolled");
      } else {
        document.querySelector("header")?.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = (index: string | number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleBookCall = () => {
    setIsBooking(true);
    setTimeout(() => {
      window.location.href = "/booking-a-call";
    }, 1200);
  };

  return (
    <>
      <style>{`
        header {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: rgba(255 255 255 / 0.95);
          backdrop-filter: saturate(180%) blur(20px);
          transition: box-shadow 0.3s ease;
          border-bottom: 1px solid #e5e7eb; /* light border */
        }
        header.scrolled {
          box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
        }
        nav > div > button {
          position: relative;
          min-height: 44px; /* thumb-friendly */
          font-weight: 600;
          color: #4b5563; /* muted foreground */
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
          color: #111827; /* foreground */
          outline: none;
        }
        nav > div > button::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #2563eb; /* primary blue */
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
          color: #2563eb; /* primary blue */
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
        /* Mobile styles */
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
            <nav
              className="hidden md:flex items-center space-x-8 relative"
              ref={dropdownRef}
            >
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
                variant="cta"
                size="sm"
                disabled={isBooking}
                onClick={handleBookCall}
                className="transition-all duration-300 hover:bg-green-600 hover:border-green-600 flex items-center gap-2 min-h-[44px]"
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
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                variant="cta"
                size="sm"
                disabled={isBooking}
                className="w-full mt-4 hover:bg-green-600 hover:border-green-600 flex items-center justify-center gap-2 min-h-[44px]"
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
    </>
  );
};

export default Header;
