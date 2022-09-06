// React Imports
import React from "react";
import { Fade } from "react-reveal";

// Component Imports
import Footer from "./Footer";
import Header from "./Headers/Header";
import ScrollToTop from "./ScrollToTop";

// Images Imports
import jay from "../assets/images/team/jay.png";
import hetvi from "../assets/images/team/hetvi.png";
import jay_2 from "../assets/images/team/jay_2.png";
import jainam from "../assets/images/team/jainam.png";
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
                  Indonesia being a major producer of agricultural products
                  Farmers form the backbone of country. But they are the ones
                  who suffer a lot too due to many factors like not good income,
                  not getting paid as much they deserve and other things because
                  of which they are unable to buy good and enough pesticides,
                  insecticides, fertilisers etc.
                </p>
                <p>
                  FarmEasy was created to help farners and industries. We act as
                  a raw material provider for the industries and also provide
                  pesticides, insecticides, fertilisers, etc. to the farmers in
                  return for the waste that they provide.
                </p>
                <p>
                  Leading to poor crop quality. While on the other hand other
                  people were getting benefited. This disheartened us and
                  inspired us that we should do something for the farmers.
                </p>
                <a
                  href="https://youtu.be/JY1aubpagyU"
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
                  Want to make farming easier and profitable? Want to buy raw
                  materials for industry which is farm waste? Want to evolve
                  agriculture and the country? We have a one stop solution for
                  it. FarmEasy.
                </p>
                <p>
                  The waste and products both will be displayed in their
                  respective pages of waste store and product store. Now the
                  farmer can view these products and buy the ones whichever they
                  require using the tokens we gave them in return of waste. This
                  will help farmers improve their crop quality and yield without
                  spending too much extra money. Hence it will be profitable for
                  them as well as the industries as they are getting their raw
                  matrials.
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
                  <img className="img-circle" src={hetvi} alt="" />
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
                  <img className="img-circle" src={jay_2} alt="" />
                  <h4>Jay Aslaliya</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="team-member text-center">
                  <img className="img-circle" src={jainam} alt="" />
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
                  href="https://youtu.be/JY1aubpagyU"
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
