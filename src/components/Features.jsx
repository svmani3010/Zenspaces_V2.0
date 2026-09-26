import React from "react";
import { assets } from "./assets/images";
import "./Features.css";
// 1. Importing the background images
import backgroundFeatures from "./assets/images/background_pink.png";
import btnBg from "./assets/images/web-icon-bg.png";

const IMG = {
  navLogo: assets.company_logo,
  featuresPhone: assets.featuresPhone,
  featuresPlaystore: assets.playstore,
  featuresAppstore: assets.appstore,
  webIcon: assets.browserIcon,
  sectionBg: backgroundFeatures,
  webBtnBg: btnBg,
};

export function Features() {
  return (
    <section
      className="features-section-1"
      style={{
        backgroundImage: `url(${IMG.sectionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* --- Left Content --- */}
      <div className="features-left">
        <div className="feature-block">
          <div className="feature-name">ZenMeasure</div>
          <div className="feature-tagline">Scan once. Know everything.</div>
          <p className="feature-desc">
            ZenMeasure captures your room's true dimensions in seconds. No tape,
            no estimations, no margin for error.
          </p>
        </div>
        <div className="feature-block">
          <div className="feature-name">ZenFit</div>
          <div className="feature-tagline">See it before you own it.</div>
          <p className="feature-desc">
            ZenFit places true-to-scale products in your actual space through
            AI. What looks right here, is right here.
          </p>
        </div>
      </div>

      {/* --- Center Phone --- */}
      <div className="features-phone-center">
        <img src={IMG.featuresPhone} alt="App Screenshot" />
      </div>

      {/* --- Right Content --- */}
      <div className="features-right">
        <div className="try-label-container">
          <span className="try-label">Try </span>
          <span className="try-brand">Zenspaces</span>
        </div>
        <p className="try-sub">Scan, style, organize, and shop</p>

        <div className="features-store-btns">
          <a href="#" className="features-store-btn">
            <img src={IMG.featuresPlaystore} alt="Play Store" />
          </a>

          <a href="#" className="features-store-btn">
            <img src={IMG.featuresAppstore} alt="App Store" />
          </a>

          {/* Corrected the Web Button Structure here */}
          <a
            href="#"
            className="features-web-btn"
            style={{
              backgroundImage: `url(${IMG.webBtnBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              textDecoration: "none",
            }}
          >
            <span className="web-btn-content">
              <img src={IMG.webIcon} alt="Browser icon" className="web-icon" />
              Start Now!
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
