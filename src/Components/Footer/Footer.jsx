import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const quicklinks = ["Home", "About Us", "Services", "Contact Us"];
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-left">
              <h3 className="quick-links">Sultan MultiSpeciality Hospital and Research Center</h3>
              {quicklinks.map((link, index) => {
                const linkPath = link === "Home"
                  ? "/"
                  : link === "About Us"
                    ? "/about"
                    : link === "Services"
                      ? "/services"
                      : link === "Contact Us"
                        ? "/contact"
                        : "#";
                return (
                  <Link
                    to={linkPath}
                    key={index}
                    className="quicklinks-items"
                  >
                    {link}
                  </Link>
                );
              })}
            </div>
            <div className="footer-right">
              <h3 className="footer-contact-info">Contact Info</h3>
              <p className="footer-address">
                Moidhali pathar, Domal Road, <br /> Morigaon, Assam, 782105
              </p>
              <p className="footer-phone">+91 8822686715, +91 9435201000</p>
              <p className="footer-email">sultanhospital2017@gmail.com</p>
            </div>
          </div>
          <div className="footer2">
            <div className="line"></div>
            <h3 className="bottom-text">
              © Copyright, 2024 Sultan Hospital - All Rights Reserved |
              Developed by{" "}
              <a
                href="https://bytesizedsolutions.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: "inherit", textDecoration: "none"}}
              >
                ByteSizedSolutions 💖
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

