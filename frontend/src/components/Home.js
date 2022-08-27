import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
import land from "../assets/images/banner/land.png";
import waste from "../assets/images/banner/waste.png";
import { useState, useEffect } from "react";

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
                  <h2>Product Category</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="category-box">
                  <a href="#!">
                    <img src="images/shop/category/category-1.jpg" alt="" />
                    <div className="content">
                      <h3>Insecticide Sales</h3>
                      <p>Organic</p>
                    </div>
                  </a>
                </div>
                <div className="category-box">
                  <a href="#!">
                    <img src="images/shop/category/category-2.jpg" alt="" />
                    <div className="content">
                      <h3>Rice Straw Sale</h3>
                      <p>Organic</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="category-box category-box-2">
                  <a href="#!">
                    <img src="images/shop/category/category-3.jpg" alt="" />
                    <div className="content">
                      <h3>Manure</h3>
                      <p>Discount</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="products section bg-gray">
          <div className="container">
            <div className="row">
              <div className="title text-center">
                <h2>Trendy Products</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="product-item">
                  <div className="product-thumb">
                    <span className="bage">Sale</span>
                    <img
                      className="img-responsive"
                      src="images/shop/products/product-1.jpg"
                      alt="product-img"
                    />
                    <div className="preview-meta">
                      <ul>
                        <li>
                          <span
                            data-toggle="modal"
                            data-target="#product-modal"
                          >
                            <i className="tf-ion-ios-search-strong"></i>
                          </span>
                        </li>
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
                      src="images/shop/products/product-2.jpg"
                      alt="product-img"
                    />
                    <div className="preview-meta">
                      <ul>
                        <li>
                          <span
                            data-toggle="modal"
                            data-target="#product-modal"
                          >
                            <i className="tf-ion-ios-search-strong"></i>
                          </span>
                        </li>
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
                      src="images/shop/products/product-3.jpg"
                      alt="product-img"
                    />
                    <div className="preview-meta">
                      <ul>
                        <li>
                          <span
                            data-toggle="modal"
                            data-target="#product-modal"
                          >
                            <i className="tf-ion-ios-search-strong"></i>
                          </span>
                        </li>
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
                      <a href="product-single.html">Cow Dung</a>
                    </h4>
                    <p className="price">$230</p>
                  </div>
                </div>
              </div>

              <div className="modal product-modal fade" id="product-modal">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="tf-ion-close"></i>
                </button>
                <div className="modal-dialog " role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                          <div className="modal-image">
                            <img
                              className="img-responsive"
                              src="images/shop/products/modal-product.jpg"
                              alt="product-img"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                          <div className="product-short-details">
                            <h2 className="product-title">
                              GM Pendant, Basalt Grey
                            </h2>
                            <p className="product-price">$200</p>
                            <p className="product-short-description">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Rem iusto nihil cum. Illo
                              laborum numquam rem aut officia dicta cumque.
                            </p>
                            <a href="cart.html" className="btn btn-main">
                              Add To Cart
                            </a>
                            <a
                              href="product-single.html"
                              className="btn btn-transparent"
                            >
                              View Product Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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
