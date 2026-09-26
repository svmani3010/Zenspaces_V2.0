import webIcon from "./assets/images/web-icon.png";

// 2. Assign the imported variable to your constant
const BROWSER_ICON_URL = webIcon;

export function StoreButtons({ playstoreImg, appstoreImg, webImg }) {
  return (
    <div className="store-buttons">
      {/* Standard App Store Buttons */}
      <a href="#" className="store-btn">
        <img src={playstoreImg} alt="Play Store" />
        <div className="store-btn-text">
          <span>Get it on</span>
          <span>Play Store</span>
        </div>
      </a>

      <a href="#" className="store-btn">
        <img src={appstoreImg} alt="App Store" />
        <div className="store-btn-text">
          <span>Get it on</span>
          <span>App Store</span>
        </div>
      </a>

      {/* --- THE FIX --- */}
      {/* Web Button with Background Image and Browser Icon */}
      <a
        href="#"
        className="store-btn-web"
        style={{ backgroundImage: `url(${webImg})` }}
      >
        {/* We wrap the icon and text in a span to center them together */}
        <span className="web-btn-content">
          <img src={BROWSER_ICON_URL} alt="Browser Icon" className="web-icon" />
          Start Now!
        </span>
      </a>
    </div>
  );
}
