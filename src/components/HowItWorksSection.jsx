import React from "react";
import "./HowItWorksSection.css";
import { assets } from "./assets/images";

/* --- 1. DEFINE ICONS FIRST (So the array can see them) --- */
function ScanIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.3L12 18M12 6L12 2.7M21.3 12L18 12M6 12L2.7 12M18.7 18.7L16.4 16.4M7.6 16.4L5.3 18.7M18.7 5.3L16.4 7.6M7.6 7.6L5.3 5.3M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SuggestionsIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 15H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VisualizeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2V22M12 10.5L16.5 6M12 10.5L7.5 6M22 12H2M7 7V17H17V7H7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PurchaseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
        fill="currentColor"
      />
      <path
        d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
        fill="currentColor"
      />
      <path
        d="M1 1H5L7.68 14.39C7.7714 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.20707 16.0062 9.67 16H19.4C19.8629 16.0062 20.3168 15.8526 20.6824 15.5583C21.0481 15.264 21.2986 14.8504 21.39 14.39L23 6H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowButton() {
  return (
    <button className="how-it-works-arrow" aria-label="Next step">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 9H16.5M16.5 9L9.75 2.25M16.5 9L9.75 15.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/* --- 2. UPDATE STEPS ARRAY (Use the assets object) --- */
const steps = [
  {
    id: "01",
    title: "Scan Your Space",
    description:
      "Download the Zenspaces.ai app and use your smartphone camera to scan any room. Our AI patent pending technology will measure your space accurately in seconds.",
    // Change: Use the actual property from your assets import
    contextImage: assets.context_scan,
    overlayColor: "var(--card-overlay-1)",
    overlayOpacity: 0.8,
    icon: <ScanIcon />,
    showArrow: true,
  },
  {
    id: "02",
    title: "Tailored Suggestions",
    description:
      "Based on your room dimensions and style preferences, our AI will suggest tailored storage, organization, and decor products that fit perfectly in your space.",
    contextImage: assets.context_suggestions,
    overlayColor: "var(--card-overlay-2)",
    overlayOpacity: 0.8,
    icon: <SuggestionsIcon />,
    showArrow: true,
  },
  {
    id: "03",
    title: "Visualize in Real-Time",
    description:
      "See recommended products in your actual space through augmented reality. Rotate, move, and customize until everything looks perfect.",
    contextImage: assets.context_visualize,
    overlayColor: "var(--card-overlay-3)",
    overlayOpacity: 0.8,
    icon: <VisualizeIcon />,
    showArrow: true,
  },
  {
    id: "04",
    title: "One-Click Purchase",
    description:
      "Love what you see? Purchase directly through our platform with a single click. No more jumping between websites or visiting multiple stores.",
    contextImage: assets.context_purchase,
    overlayColor: "var(--card-overlay-4)",
    overlayOpacity: 0.8,
    icon: <PurchaseIcon />,
    showArrow: false,
  },
];

/* --- 3. MAIN COMPONENT --- */
function HowItWorksSection() {
  return (
    <section className="how-it-works-container">
      <h2 className="how-it-works-heading">
        How it <span className="gradient-works">Works</span>
      </h2>
      <div className="how-it-works-grid">
        {steps.map((step) => (
          <div
            key={step.id}
            className="how-it-works-card"
            style={{
              "--card-overlay-color": step.overlayColor,
              "--card-overlay-opacity": step.overlayOpacity,

              /* FIX: Use the imported image path directly in the url() */
              "--card-background-image": `url(${step.contextImage})`,

              "--card-number-color": step.overlayColor,
            }}
          >
            <div className="card-background-overlay"></div>

            <div className="card-content-wrapper">
              <div className="card-header">
                <span className="step-number">{step.id}</span>
                <h3 className="step-title">{step.title}</h3>
              </div>
              <p className="step-description">{step.description}</p>

              <div className="card-bottom-bar">
                <div className="step-icon">{step.icon}</div>
                {step.showArrow && <ArrowButton />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;
