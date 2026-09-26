import React from "react";
import "./BlogContactFooter.css";
import { assets } from "./assets/images";
import "./BlogContactFooter.css";

const blogs = [
  {
    id: 1,
    image: assets.blog1, // Ensure blog1.jpg is in your assets
    date: "Aug 14, 2025",
    title: "Your Pantry Can Be Your Happy Place — Here's How",
    link: "https://www.amazon.com/s?k=pantry+organization",
  },
  {
    id: 2,
    image: assets.blog2, // Ensure blog2.jpg is in your assets
    date: "Sept 22, 2025",
    title: "How Spatial Intelligence is Transforming Home Design | Zenspaces",
    link: "https://www.amazon.com/s?k=smart+home+design",
  },
  {
    id: 3,
    image: assets.blog3, // Ensure blog3.jpg is in your assets
    date: "Sept 22, 2025",
    title:
      "Try Before You Buy: How Watch Face Preview is Changing Online Shopping",
    link: "https://www.amazon.com/s?k=smart+watches",
  },
];

export function BlogContactFooter() {
  return (
    <div className="main-wrapper">
      {/* LATEST BLOGS SECTION */}
      <section className="blogs-section">
        <h2 className="section-title">
          Latest <span className="highlight-purple">Blogs</span>
        </h2>
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                {blog.id === 1 && (
                  <div className="image-overlay-text">
                    Visualize.
                    <br />
                    Customize.
                    <br />
                    Click to Own!
                  </div>
                )}
              </div>
              <p className="blog-date">{blog.date}</p>
              <h3 className="blog-title">{blog.title}</h3>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section className="contact-section">
        <h2 className="section-title">
          Contact <span className="highlight-purple">Us</span>
        </h2>
        <div className="contact-grid">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Amazon+Headquarters+Seattle"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card office-card"
          >
            <span className="contact-label">Our Office</span>
            <span className="contact-value">Sacramento, CA 95823</span>
          </a>

          <a
            href="mailto:support@zenspaces.ai"
            className="contact-card email-card"
          >
            <span className="contact-label">Email</span>
            <span className="contact-value">support@zenspaces.ai</span>
          </a>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-logo-container">
            <img
              src={assets.footerLogo}
              alt="Zenspaces Logo"
              className="footer-logo"
            />
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              Zenspaces AI. © 2026 |<a href="/terms"> Terms of Use</a> |
              <a href="/privacy"> Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
