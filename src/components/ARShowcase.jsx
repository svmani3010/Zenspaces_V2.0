import React from "react";
import { assets } from "./assets/images";
import { StepThree, StepFour } from "./assets/images/StepIcons"; // Import the step icons
import "./ARShowcase.css";
import "./ZenPhilosophy.css";

export default function ARShowcase() {
  return (
    <section className="ar-showcase">
      {/* Left card - blue */}
      <div className="ar-card ar-card--blue">
        {/* Step Icon Container positioned to the top right */}
        <div className="step-icon-corner">
          <StepThree />
        </div>

        <h2 className="ar-card__title ar-card__title--blue">
          Fit your favorite from the catalog.
        </h2>
        <p className="ar-card__desc">
          AI places recommended products from the catalog into your actual space
          &mdash; to scale, before you buy
        </p>
        <p className="ar-card__tagline">What fits here, fits at home.</p>
        <div className="ar-card__phone-wrap">
          <img
            src={assets.arFittingPhone_1}
            alt="AR catalog fitting"
            className="ar-card__phone"
          />
        </div>
      </div>

      {/* Right card - yellow */}
      <div className="ar-card ar-card--yellow">
        {/* Step Icon Container positioned to the top right */}
        <div className="step-icon-corner">
          <StepFour />
        </div>

        <h2 className="ar-card__title ar-card__title--orange">
          Seamlessly checkout
        </h2>
        <p className="ar-card__desc ar-card__desc--yellow">
          You&apos;ve seen it in your room. Now own it in one click, no
          second-guessing.
        </p>
        <p className="ar-card__tagline ar-card__tagline--yellow">
          From visualised to yours.
        </p>
        <div className="ar-card__phone-wrap">
          <img
            src={assets.arFittingPhone_2}
            alt="AR checkout"
            className="ar-card__phone"
          />
        </div>
      </div>
    </section>
  );
}
