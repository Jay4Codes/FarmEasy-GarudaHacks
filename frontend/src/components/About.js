// React Imports
import React from "react";
import { Fade } from "react-reveal";

// Component Imports
import Footer from "./Footer";
import Header from "./Headers/Header";
import ScrollToTop from "./ScrollToTop";

// Images Imports
import jay from "../assets/images/team/jay.png";
import about_gif from "../assets/gifs/recycle.gif";
import about_gif_2 from "../assets/gifs/ecommerce.gif";

function About() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Fade bottom cascade>
        <section className="about section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img className="img-responsive" src={about_gif} alt="" />
              </div>
              <div className="col-md-6">
                <h2 className="mt-40">What We Do?</h2>
                <p>
                  FarmEasy was created to help farners and industries. We act as
                  a raw material provider for the industries and also provide
                  pesticides, insecticides, fertilisers, etc. to the farmers in
                  return for the waste that they provide.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  qui vel cupiditate exercitationem, ea fuga est velit nulla
                  culpa modi quis iste tempora non, suscipit repellendus labore
                  voluptatem dicta amet?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  qui vel cupiditate exercitationem, ea fuga est velit nulla
                  culpa modi quis iste tempora non, suscipit repellendus labore
                  voluptatem dicta amet?
                </p>
                <a
                  href="https://garudahacks.com/"
                  className="btn btn-main mt-20"
                >
                  Watch Our Presentation
                </a>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade bottom cascade>
        <section className="about section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mt-40">How We Do It?</h2>
                <p>
                  We collect waste from farmers in and give tokens/credits in
                  return using which they buy products according to their
                  requirements. And this waste collected is given to the
                  industries according to whoever requires what and how much.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  qui vel cupiditate exercitationem, ea fuga est velit nulla
                  culpa modi quis iste tempora non, suscipit repellendus labore
                  voluptatem dicta amet?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  qui vel cupiditate exercitationem, ea fuga est velit nulla
                  culpa modi quis iste tempora non, suscipit repellendus labore
                  voluptatem dicta amet?
                </p>
              </div>
              <div className="col-md-6">
                <img className="img-responsive" src={about_gif_2} alt="" />
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade bottom cascade>
        <section className="team-members ">
          <div className="container">
            <div className="row">
              <div className="title">
                <h2>Team Members</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="team-member text-center">
                  <img
                    className="img-circle"
                    src="images/team/team-1.jpg"
                    alt=""
                  />
                  <h4>Hetvi Solanki</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="team-member text-center">
                  <img className="img-circle" src={jay} alt="" />
                  <h4>Jay Jain</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="team-member text-center">
                  <img
                    className="img-circle"
                    src="images/team/team-3.jpg"
                    alt=""
                  />
                  <h4>Jay Aslaliya</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="team-member text-center">
                  <img
                    className="img-circle"
                    src="images/team/team-1.jpg"
                    alt=""
                  />
                  <h4>Jainam Shah</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade bottom cascade>
        <div className="section video-testimonial bg-1 overly-white text-center mt-50">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Video presentation</h2>
                <a
                  className="play-icon"
                  href="https://garudahacks.com/"
                  data-toggle="lightbox"
                >
                  <i className="tf-ion-ios-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Footer />
    </div>
  );
}

export default About;
