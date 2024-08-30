import React from "react";
import "./ServiceCard.css";

const ServiceCard = () => {
  return (
    <>
      <section className="section">
        <div className="heading_service">Why Choose Us?</div>
        <div className="container">
          <main className="main_services">
            <div className="parents">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Whole Body Checkup</span>
                  <p className="card-content">
                    Special offers
                  </p>
                </div>
              </div>
            </div>
            <div className="parents">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Affordable Treatment</span>
                  <p className="card-content">Get Quick Report</p>
                </div>
              </div>
            </div>
            <div className="parents">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">24/7 Medical Support</span>
                  <p className="card-content">We are here anytime</p>
                </div>
              </div>
            </div>
            <div className="parents">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">Quality Professionals</span>
                  <p className="card-content">Consult with experts </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default ServiceCard;

