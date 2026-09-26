import React from "react";
import { assets } from "./assets/images";
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
} from "./assets/images/StepIcons";
import "./Journey.css";

const JOURNEY_DATA = [
  {
    title: "Shoot your space.",
    desc: "Point your phone at any room and capture it in seconds.",
    note: "No setup. Just shoot.",
    img: assets.journeyPhone1,
    cardClass: "journey-card-yellow",
    Icon: StepOne,
  },
  {
    title: "Identify & Measure.",
    desc: "AI reads your exact dimensions automatically.",
    note: "No tape. No estimates.",
    img: assets.journeyPhone2,
    cardClass: "journey-card-blue",
    Icon: StepTwo,
  },
  {
    title: "Customize Design.",
    desc: "Swap materials and layouts in real-time.",
    note: "Infinite possibilities.",
    img: assets.journeyPhone1,
    cardClass: "journey-card-blue",
    Icon: StepThree,
  },
  {
    title: "Visualize in AR.",
    desc: "See the final result in your room before you buy.",
    note: "Shop with confidence.",
    img: assets.journeyPhone2,
    cardClass: "journey-card-yellow",
    Icon: StepFour,
  },
];

function JourneyCard({ title, desc, note, img, cardClass, IconComponent }) {
  return (
    <div className={`journey-card ${cardClass}`}>
      <div className="journey-step-icon-wrapper">
        <IconComponent />
      </div>
      <div className="journey-card-content">
        <h3 className="journey-step-title">{title}</h3>
        <p className="journey-step-desc">{desc}</p>
        <p className="journey-step-note">{note}</p>
      </div>
      <div className="journey-phone-wrapper">
        <img src={img} alt="phone screenshot" className="journey-phone-img" />
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <section className="journey-section">
      <div className="journey-title">
        <span>Smart </span>
        <span className="journey-accent">Design </span>
        <span>Journey</span>
      </div>

      <div className="journey-cards">
        {JOURNEY_DATA.map((step, index) => (
          <JourneyCard key={index} {...step} IconComponent={step.Icon} />
        ))}
      </div>
    </section>
  );
}
