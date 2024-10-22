import React from 'react';
import './styles/ProductCard.css';



const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        {/* Left section with images */}
        <div className="mission-images">
          <img src="https://www.atherenergy.com/_next/image?url=https%3A%2F%2Fmedia.atherenergy.com%2FAthercharger%2520photoshoot%25201.webp&w=1200&q=75" alt="about banner" className="w-100 img-1" width="380" height="382" loading="lazy" />
          <img src="https://t3.ftcdn.net/jpg/07/11/00/10/360_F_711001038_XKARLZu69GTLph2JWooy8X6bqGAWr2DP.jpg" alt="about bannner" className="w-100 img-2" width="347" height="349" loading="lazy" />
        </div>

        {/* Right section with mission statement */}
        <div className="mission-content">
          <h1 className="mission-title">WHAT WE DO!</h1>
          <h4 className="mission-main-title">Our mission is to put an electric vehicle charge</h4>
          <p className="mission-description">
            Charge your electric vehicle at home using one of our smart home charge solutions or gain access to over 3,000 public charging stations.
          </p>

          <div className="mission-features">
            <div className="feature-item">
              <span className="feature-icon">🛵</span> {/* Replace with appropriate icon */}
              <h5>Zero contact travel</h5>
              <p>We love our customers and we love the way they come.</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛂</span> {/* Replace with appropriate icon */}
              <h5>No Driving License</h5>
              <p>We love our customers and we love the way they come.</p>
            </div>
          </div>

          <ul className="mission-benefits">
            <li>✔ Detachable battery, take home and charge in 3 hours.</li>
            <li>✔ Enjoy a hassle-free ride by charging just for 3 hours.</li>
          </ul>

          <button className="read-more-btn">Read More →</button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
