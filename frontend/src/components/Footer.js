// React Imports
import React from "react";
import { Link } from "react-router-dom";

// Image Imports
import hori_logo from "../assets/images/hori_logo.png";

function Footer() {
  return (
    <div>
      <footer className="footer section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={hori_logo} alt="logo" />
              <p className="copyright-text">
                Copyright &copy;2022, Designed &amp; Developed by Team MangoDB
              </p>
            </div>
            <div className="col-md-8">
              <ul className="footer-menu text-uppercase">
                <li>
                  <Link to="/" className="link">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/waste-store" className="link">
                    WASTE STORE
                  </Link>
                </li>
                <li>
                  <Link to="/product-store" className="link">
                    PRODUCT STORE
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="link">
                    CONTACT
                  </Link>
                </li>
              </ul>
              <br />
              <ul className="social-media">
                <li>
                  <a href="https://garudahacks.com/">
                    <i className="tf-ion-social-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://garudahacks.com/">
                    <i className="tf-ion-social-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://garudahacks.com/">
                    <i className="tf-ion-social-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://garudahacks.com/">
                    <i className="tf-ion-social-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
