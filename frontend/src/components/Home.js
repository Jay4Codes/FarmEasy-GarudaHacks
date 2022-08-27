import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
import land from "../assets/images/banner/land.png";
import waste from "../assets/images/banner/waste.png";
import { useState, useEffect } from "react";
import banner_sell from "../assets/images/farmwaste/banner_sell.png";
import banner_buy from "../assets/images/farmwaste/banner_buy.png";
import banner_buy_prod from "../assets/images/farmproducts/banner_buy_prod.png";
import cow_dung from "../assets/images/farmwaste/cow_dung.jpg";
import rice_straw from "../assets/images/farmwaste/rice_straw.png";
import pig_manure from "../assets/images/farmwaste/pig_manure.png";

function Home() {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    parrallaxFunc();
  }, [parallax]);

  function parrallaxFunc() {
    console.log("Inside Scroll");
    let text = document.getElementById("text");
    console.log(text);
    let bird1 = document.getElementById("bird1");
    let bird2 = document.getElementById("bird2");
    let rocks = document.getElementById("rocks");
    let forest = document.getElementById("forest");

    window.addEventListener("scroll", function () {
      console.log("Inside Event Scroll");
      let value = window.scrollY;

      text.style.top = 50 + value * -0.1 + "%";
      bird2.style.top = value * -1.5 + "px";
      bird2.style.left = value * 2 + "px";
      bird1.style.top = value * -1.5 + "px";
      bird1.style.left = value * -5 + "px";
      rocks.style.top = value * 0.08 + "px";
      forest.style.top = value * 0.25 + "px";
    });

    console.log("Done Scroll");
  }
  return (
    <div>
      <Header />
      <section className="parallax">
        <section>
          <h2 id="text">
            <span>Welcome to</span>
            <br />
            FarmEasy
          </h2>
          <img
            src="https://user-images.githubusercontent.com/65358991/170092504-132fa547-5ced-40e5-ab64-ded61518fac2.png"
            id="bird1"
          />
          <img
            src="https://user-images.githubusercontent.com/65358991/170092542-9747edcc-fb51-4e21-aaf5-a61119393618.png"
            id="bird2"
          />
          <img src={land} id="forest" />

          <img src={waste} id="rocks" />
        </section>
      </section>

      <div className="sec">
        <section className="product-category section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title text-center">
                  <h2>Our Stores</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="category-box">
                  <img src={banner_sell} alt="" />
                  <div className="content">
                    <h3>Sell Farm Waste</h3>
                    <p>To Industries/Buyers</p>
                  </div>
                </div>
                <div className="category-box">
                  <img src={banner_buy} alt="" />
                  <div className="content">
                    <h3>Buy Agricultural Waste</h3>
                    <p>From Trusted Farmers</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="category-box category-box-2">
                  <img src={banner_buy_prod} alt="" />
                  <div className="content">
                    <h3>Buy Farm Products</h3>
                    <p>From Tokens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="products section bg-gray">
          <div className="container">
            <div className="row">
              <div className="title text-center">
                <h2>Sell Your Agricultural Waste</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="product-item">
                  <div className="product-thumb">
                    <span className="bage">Sale</span>
                    <img
                      className="img-responsive"
                      src={rice_straw}
                      alt="product-img"
                    />
                    <div className="preview-meta">
                      <ul>
                        <li>
                          <a href="#!">
                            <i className="tf-ion-ios-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="tf-ion-android-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="product-single.html">Rice Straw</a>
                    </h4>
                    <p className="price">$200</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-item">
                  <div className="product-thumb">
                    <img
                      className="img-responsive"
                      src={pig_manure}
                      alt="product-img"
                    />
                    <div className="preview-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="tf-ion-ios-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="tf-ion-android-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="product-single.html">Pig Manure</a>
                    </h4>
                    <p className="price">$200</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-item">
                  <div className="product-thumb">
                    <img
                      className="img-responsive"
                      src={cow_dung}
                      alt="product-img"
                    />
                    <div className="preview-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="tf-ion-ios-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="tf-ion-android-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="product-single.html">Cow Dung Cakes</a>
                    </h4>
                    <p className="price">$230</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
