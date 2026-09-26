import React from "react";
import { assets } from "./assets/images";
import "./ActiveFeatures.css";
import "./ZenPhilosophy.css";

const IMG = {
  company_logo: assets.company_logo,
};

const activeFeaturesList = [
  {
    id: "organization",
    img: "https://static.codia.ai/s/image_efb0c02b-799e-4dc3-b7e2-cea9721f04b5.png",
    title: "Organization",
    desc: "Optimize your pantry with smart storage solutions.",
    tags: ["Containers", "Jars", "Canisters"],
  },
  {
    id: "wall-spaces",
    img: "https://static.codia.ai/s/image_2ee57b96-0d4c-494b-90fa-0aa37239a479.png",
    title: "Wall Spaces",
    desc: "Maximize your vertical space with stylish solutions.",
    tags: ["Television", "Wall Clocks", "Art", "Mirrors"],
  },
  {
    id: "wearables",
    img: "https://static.codia.ai/s/image_a7f44872-8625-43d7-bc78-db6b775895e8.png",
    title: "Wearables",
    desc: "Preview your watch on your wrist with realistic fitting.",
    tags: ["Digital", "Analog", "Mechanical"],
  },
];

export default function ActiveFeatures() {
  return (
    <section className="activefeatures-section">
      <div className="activefeatures-panel">
        {/* Nav bar */}
        <div className="activefeatures-nav">
          <div className="activefeatures-nav__logo">
            <img
              src={IMG.company_logo}
              alt="Zenspaces logo"
              className="activefeatures-nav__logo-img"
            />
          </div>
          <div className="activefeatures-nav__right">
            <span className="activefeatures-nav__download">
              Download our app
            </span>
            <a href="#" className="activefeatures-nav__store-btn">
              <img
                src="https://static.codia.ai/s/image_11ef3ade-5039-4220-bdcc-e349f8344693.png"
                alt="Google Play"
                className="activefeatures-nav__store-icon"
              />
              <span className="activefeatures-nav__store-label">
                <span className="activefeatures-nav__store-sub">
                  Get it from
                </span>
                PlayStore
              </span>
            </a>
            <a href="#" className="activefeatures-nav__store-btn">
              <img
                src="https://static.codia.ai/s/image_17adb9ce-3a3a-4e5b-9fe9-11b1654872d3.png"
                alt="App Store"
                className="activefeatures-nav__store-icon"
              />
              <span className="activefeatures-nav__store-label">
                <span className="activefeatures-nav__store-sub">Get it on</span>
                App Store
              </span>
            </a>
          </div>
        </div>

        <h3 className="activefeatures-title">Active Features</h3>

        <div className="activefeatures-grid">
          {activeFeaturesList.map((item) => (
            <div key={item.id} className="activefeature-card">
              <div className="activefeature-card__img-wrap">
                <img
                  src={item.img}
                  alt={item.title}
                  className="activefeature-card__img"
                />
              </div>
              <div className="activefeature-card__body">
                <h4 className="activefeature-card__name">{item.title}</h4>
                <p className="activefeature-card__desc">{item.desc}</p>
                <div className="activefeature-card__tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="activefeature-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="activefeature-card__btn">Try Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
