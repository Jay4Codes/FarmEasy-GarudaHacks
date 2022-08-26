import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="social-media">
                <li>
                  <a href="">
                    <i className="tf-ion-social-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="tf-ion-social-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="tf-ion-social-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="tf-ion-social-pinterest"></i>
                  </a>
                </li>
              </ul>
              <ul className="footer-menu text-uppercase">
                <li>
                  <a href="contact.html">CONTACT</a>
                </li>
                <li>
                  <a href="shop.html">SHOP</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="contact.html">PRIVACY POLICY</a>
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
