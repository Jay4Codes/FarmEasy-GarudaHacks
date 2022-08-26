import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="tf-ion-social-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="tf-ion-social-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="tf-ion-social-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="tf-ion-social-pinterest"></i>
                  </a>
                </li>
              </ul>
              <ul className="footer-menu text-uppercase">
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                  <Link to="/shop">SHOP</Link>
                </li>
                <li>
                  <Link to="/profile">PROFILE</Link>
                </li>
              </ul>
              <p className="copyright-text">
                Copyright &copy;2022, Designed &amp; Developed by Team MangoDB
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
