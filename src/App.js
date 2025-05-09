import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css"; // Import the CSS you created

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">NXTGEN</h1>
          <div className="navbar-links">
            <a href="#main">Home</a>
            <a href="#features">Features</a>
            <a href="#video">Demo</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section id="main" className="main-section offset-top">
        <h1 className="main-title">World's First Smart Notebook</h1>
        <h2 className="main-subtitle">NXTGEN SMART NOTEBOOKS</h2>
        <p className="main-description">
          Scan. Upload. View. Powered by unique QR on every page. Revolutionizing student learning.
        </p>
        <a href="/downloads/nxtgen-app.apk" download className="download-button">
          Download App
        </a>
      </section>


      {/* Carousel Section */}
      <section id="features" className="carousel-section">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src="/images/feature1.png" alt="Feature 1" />
            <p className="legend">Upload your notes instantly</p>
          </div>
          <div>
            <img src="/images/feature2.png" alt="Feature 2" />
            <p className="legend">Organized by Book & Page</p>
          </div>
          <div>
            <img src="/images/feature3.png" alt="Feature 3" />
            <p className="legend">Access anytime, anywhere</p>
          </div>
        </Carousel>
      </section>

      {/* Video Section */}
      <section id="video" className="video-section">
        <h3>See it in Action</h3>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="NXTGEN Demo"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h4>Credits</h4>
        <p>Developed by Team NXTGEN</p>
        <h4>Contact Us</h4>
        <p>Email: <a href="mailto:nxtgennotebooks@gmail.com">nxtgennotebooks@gmail.com</a></p>
        <p>Instagram: <a href="https://instagram.com/nxtgensmart">@nxtgensmart</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} NXTGEN Smart Notebooks. All rights reserved.</p>
        <p className="mt-2">Disclaimer: This is a student innovation prototype and not a certified medical product.</p>
      </footer>
    </div>
  );
};

export default App;
