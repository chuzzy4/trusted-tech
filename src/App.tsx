import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Solutions from "./pages/Solutions";
import WhoWeServe from "./pages/WhoWeServe";
import Contact from "./pages/Contact";
import "./App.css";
import MeetOurTeam from "./pages/MeetOurTeam";
import ScrollToTop from "./components/ScrollToTop";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-tta" element={<About />} />
            <Route path="/our-team" element={<MeetOurTeam />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/who-we-serve" element={<WhoWeServe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
