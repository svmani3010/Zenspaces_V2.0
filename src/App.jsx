import "./App.css";

// Part 1 Imports
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Journey } from "./components/Journey";

// Part 2 Imports
import ARShowcase from "./components/ARShowcase";
import ActiveFeatures from "./components/ActiveFeatures";
import HowItWorksSection from "./components/HowItWorksSection";
import TransformationsSection from "./components/TransformationsSection";
import ZenPhilosophy from "./components/ZenPhilosophy";
import { BlogContactFooter } from "./components/BlogContactFooter";
import "./tagline.css";

// Local Tagline Component (Optional: You can move this to its own file too)
function Tagline() {
  return (
    <div className="tagline-section">
      <span className="tagline-brand">Zenspaces</span>
      <span className="tagline">
        , where spatial intelligence meets confident checkouts.
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div data-codia-role="app_shell">
      <div data-codia-role="scroll_content">
        <div className="page">
          {/* --- PART 1 COMPONENTS --- */}
          <Navbar />
          <Hero />
          <Tagline />
          <Features />
          <Journey />

          {/* Tagline row from Part 2 */}
          <div className="tagline-row">
            <span className="tagline-row__try">Try </span>
            <span className="tagline-row__brand">Zenspaces.</span>
            <span className="tagline-row__sub"> See it Live</span>
          </div>

          <ActiveFeatures />
          <HowItWorksSection />
          <TransformationsSection />
          <ZenPhilosophy />
          <BlogContactFooter />
        </div>
      </div>
      <div data-codia-role="fixed_chrome" />
    </div>
  );
}
