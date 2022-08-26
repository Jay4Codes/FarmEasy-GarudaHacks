import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Header />
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h1 className="page-name">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrapper">
        <div className="contact-section">
          <div className="container">
            <div className="row">
              <div className="contact-form col-md-6 ">
                <form id="contact-form" method="post" action="" role="form">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control"
                      name="name"
                      id="name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-control"
                      name="email"
                      id="email"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                      name="subject"
                      id="subject"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      rows="6"
                      placeholder="Message"
                      className="form-control"
                      name="message"
                      id="message"
                    ></textarea>
                  </div>

                  <div id="mail-success" className="success">
                    Thank you. The Mailman is on His Way :)
                  </div>

                  <div id="mail-fail" className="error">
                    Sorry, don't know what happened. Try later :(
                  </div>

                  <div id="cf-submit">
                    <input
                      type="submit"
                      id="contact-submit"
                      className="btn btn-transparent"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>

              <div className="contact-details col-md-6 ">
                <div className="google-map">
                  <div id="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.00603932987!2d72.83500021454307!3d19.107390987069845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1661528928036!5m2!1sen!2sin"
                      width="600"
                      height="300"
                      style={{ border: "0", borderRadius: "20px" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <ul className="contact-short-info">
                  <li>
                    <i className="tf-ion-ios-home"></i>
                    <span>
                      SVKM's Dwarkadas J. Sanghvi College of Engineering, Vile
                      Parle, Mumbai, India
                    </span>
                  </li>
                  <li>
                    <i className="tf-ion-android-mail"></i>
                    <span>Email: info@farmeasy.com</span>
                  </li>
                </ul>

                <div className="social-icon">
                  <ul>
                    <li>
                      <a className="fb-icon" href="#">
                        <i className="tf-ion-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="tf-ion-social-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="tf-ion-social-dribbble-outline"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="tf-ion-social-googleplus-outline"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="tf-ion-social-pinterest-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
