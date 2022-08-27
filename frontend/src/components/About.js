import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import about_gif from "../assets/images/recycle.gif";
import about_gif_2 from "../assets/images/ecommerce.gif";
import jay from "../assets/images/team/jay.png";

function About() {
  return (
    <div>
      <Header />
      <section className="about section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="img-responsive" src={about_gif} alt="" />
            </div>
            <div className="col-md-6">
              <h2 className="mt-40">What We Do?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                enim, accusantium repellat ex autem numquam iure officiis facere
                vitae itaque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                qui vel cupiditate exercitationem, ea fuga est velit nulla culpa
                modi quis iste tempora non, suscipit repellendus labore
                voluptatem dicta amet?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                qui vel cupiditate exercitationem, ea fuga est velit nulla culpa
                modi quis iste tempora non, suscipit repellendus labore
                voluptatem dicta amet?
              </p>
              <a href="#" className="btn btn-main mt-20">
                Watch Our Presentation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mt-40">How We Do It?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                enim, accusantium repellat ex autem numquam iure officiis facere
                vitae itaque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                qui vel cupiditate exercitationem, ea fuga est velit nulla culpa
                modi quis iste tempora non, suscipit repellendus labore
                voluptatem dicta amet?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                qui vel cupiditate exercitationem, ea fuga est velit nulla culpa
                modi quis iste tempora non, suscipit repellendus labore
                voluptatem dicta amet?
              </p>
            </div>
            <div className="col-md-6">
              <img className="img-responsive" src={about_gif_2} alt="" />
            </div>
          </div>
        </div>
      </section>

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

      <div className="section video-testimonial bg-1 overly-white text-center mt-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Video presentation</h2>
              <a className="play-icon" href="#" data-toggle="lightbox">
                <i className="tf-ion-ios-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
