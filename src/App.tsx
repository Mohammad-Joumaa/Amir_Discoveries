import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookingACall from "./components/booking-a-call";
import ChatbotWidget from "./components/ui/ChatbotWidget";

// Services Pages
import WebDevelopment from "./components/services/WebDevelopment";
import AIAndAutomation from "./components/services/AIAndAutomation";
import ProcessAutomation from "./components/services/ProcessAutomation";
import CreativeContent from "./components/services/CreativeContent";
import CaseStudies from "./components/work/CaseStudies";
import Testimonials from "./components/work/Testimonials";
import BeforeAfterGallery from "./components/work/BeforeAfterGallery";
import Pricing from "./components/work/Pricing";
import OurStory from "./components/about/OurStory";
import Team from "./components/about/Team";
import Careers from "./components/about/Careers";
import AdminPanel from "./pages/AdminPanel";
// NEW: Import the LoginPage component
import LoginPage from "./pages/LoginPage"; // Assuming you place LoginPage.tsx in the 'pages' directory

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* NEW: Route for the Login Page */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Admin Panel Route */}
          <Route path="/admin-panel" element={<AdminPanel />} />
          

          {/* Services Routes */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ai-automation" element={<AIAndAutomation />} />
          <Route path="/services/process-automation" element={<ProcessAutomation />} />
          <Route path="/services/creative-content" element={<CreativeContent />} />
          <Route path="/work/case-studies" element={<CaseStudies />} />
          <Route path="/work/testimonials" element={<Testimonials />} />
          <Route path="/work/before-after" element={<BeforeAfterGallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/careers" element={<Careers />} />
          
          {/* UPDATED ROUTE FOR BLOG: */}
          

          
          {/* Booking Route */}
          <Route path="/booking-a-call" element={<BookingACall />} />
          
          {/* Catch-all route for 404 - MUST BE LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Chatbot Widget - will appear on all pages */}
        <ChatbotWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;