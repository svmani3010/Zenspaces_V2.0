import React from "react"; // Added React import for standard practice
import { StoreButtons } from "./StoreButtons";
import "./Hero.css";
// 1. Import your local image from the assets folder
import heroBg from "./assets/images/hero-background-before.png";

const IMG = {
  playstore:
    "https://static.codia.ai/s/image_70f41372-9b41-417b-8cb5-050d6241b873.png",
  appstore:
    "https://static.codia.ai/s/image_cdd4deb1-b9e3-4672-83aa-07c13839b650.png",
  webBtn:
    "https://static.codia.ai/s/image_981926af-3c0b-409c-a35c-35543ec2b0d5.png",
};

export function Hero() {
  return (
    <section
      className="hero"
      /* 2. Added the inline style for the background image */
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content">
        <div className="hero-content-1">
          <p className="hero-label"></p>
          <h1 className="hero-title">
            Home
            <br />
            shopping
            <br />
            that knows
            <br />
            your space.
          </h1>
          <p className="hero-subtitle">
            Your home's spatially intelligent shopping agent. Products sized,
            styled, and placed before you buy.
          </p>
        </div>
      </div>
      <div className="hero-cta-card">
        <div className="hero-cta-card-1">
          <div className="hero-cta-title">Try</div>
          <div className="hero-cta-brand">Zenspace.AI</div>
          <div className="hero-cta-sub">
            Spatial AI
            <br />
            <span style={{ fontSize: "11px", color: "#c0c0c0" }}>
              Patent Pending
            </span>
          </div>
        </div>
        <div className="hero-cta-card-1">
          <StoreButtons
            playstoreImg={IMG.playstore}
            appstoreImg={IMG.appstore}
            webImg={IMG.webBtn}
          />
        </div>
      </div>
    </section>
  );
}
