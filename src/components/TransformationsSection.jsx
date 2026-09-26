import React, { useState } from "react";
import "./TransformationsSection.css";
import { assets } from "./assets/images";

const transData = [
  {
    id: "1",
    title: "Living Room Wall - TV Transformation",
    before: assets.trans_before_1,
    after: assets.trans_after_1,
  },
  {
    id: "2",
    title: "Kitchen - Pantry Organization",
    before: assets.trans_before_2,
    after: assets.trans_after_2,
  },
  {
    id: "3",
    title: "Living Room - Wall Clock Transformation",
    before: assets.trans_before_3,
    after: assets.trans_after_3,
  },
  {
    id: "4",
    title: "Watchfaces",
    before: assets.trans_before_4,
    after: assets.trans_after_4,
  },
];

function TransformationCard({ item }) {
  const [position, setPosition] = useState(0);

  return (
    <div className="trans-card">
      <div className="trans-image-wrapper">
        {/* BOTTOM LAYER: AFTER */}
        <div
          className="image-layer after-layer"
          style={{ backgroundImage: `url(${item.after})` }}
        >
          <div className="label after-label">AFTER</div>
        </div>

        {/* TOP LAYER: BEFORE */}
        <div
          className="image-layer before-layer"
          style={{
            backgroundImage: `url(${item.before})`,
            clipPath: `inset(0 0 0 ${position}%)`,
          }}
        >
          <div className="label before-label">BEFORE</div>
        </div>

        {/* INTERACTIVE AREA */}
        <div className="slider-container">
          {/* The line follows the exact percentage */}
          <div
            className="vertical-divider"
            style={{ left: `${position}%` }}
          ></div>

          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="glider-input"
          />
        </div>
      </div>
      <p className="trans-caption">{item.title}</p>
    </div>
  );
}

export function TransformationsSection() {
  return (
    <section className="transformations-wrapper">
      <h2 className="trans-main-title">Transformations</h2>
      <div className="trans-grid">
        {transData.map((item) => (
          <TransformationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default TransformationsSection;
