// React Imports
import React from "react";
import { Fade } from "react-reveal";

// Components Imports
import Footer from "../Footer";
import Header from "../Headers/Header";
import ScrollToTop from "../ScrollToTop";
import insecticide_1 from '../../assets/images/farmproducts/insecticide_1.jpg'
import insecticide_2 from '../../assets/images/farmproducts/insecticide_1.jpg'

function ProductStore() {
  const buyProduct1 = async(e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/farmer/buyproduct/6309032ce569509e27fc70d8', {
      method: "PUT",
      headers: {
        'prod-id': '6308b3ece22ed5beda74b5d8',
      }
    })
    const json = await response.json()
    // console.log(json);
    alert('You have bought insecticide, and your Tokens are reduced by 150')
  }
  const buyProduct2 = async(e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/farmer/buyproduct/6309032ce569509e27fc70d8', {
      method: "PUT",
      headers: {
        'prod-id': '6308b3ece22ed5beda74b5d8',
      }
    })
    const json = await response.json()
    // console.log(json);
    alert('You have bought insecticide, and your Tokens are reduced by 200')
  }
  const buyProduct3 = async(e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/farmer/buyproduct/6309032ce569509e27fc70d8', {
      method: "PUT",
      headers: {
        'prod-id': '6308b3ece22ed5beda74b5d8',
      }
    })
    const json = await response.json()
    // console.log(json);
    alert('You have bought insecticide, and your Tokens are reduced by 250')
  }
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Fade bottom cascade>
        <section className="products section">
          <div className="container">
            <div className="row">
              <h1 className="page-title text-center">Product Store</h1>
              <br />
              <div className="col-md-4">
                <div className="product-item">
                  <div className="product-thumb">
                    <span className="bage">Sale</span>
                    <img
                      className="img-responsive"
                      src={insecticide_1}
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
                        <button onClick={buyProduct1}>
                          <a href="#!">
                            <i className="tf-ion-android-cart"></i>
                          </a>
                        </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="product-single.html">Reef Boardsport</a>
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
                      src={insecticide_2}
                      alt="product-img"
                    />
                    <div className="preview-meta">
                      <ul>
                        <li>
                          <a href="https://garudahacks.com/">
                            <i className="tf-ion-ios-heart"></i>
                          </a>
                        </li>
                        <li>
                        <button onClick={buyProduct2}>
                          <a href="#!">
                            <i className="tf-ion-android-cart"></i>
                          </a>
                        </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="product-single.html">Rainbow Shoes</a>
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
                      src={insecticide_1}
                      alt="product-img"
                    />
                    <div className="preview-meta">
                      <ul>
                        <li>
                          <a href="https://garudahacks.com/">
                            <i className="tf-ion-ios-heart"></i>
                          </a>
                        </li>
                        <li>
                        <button onClick={buyProduct3}>
                          <a href="#!">
                            <i className="tf-ion-android-cart"></i>
                          </a>
                        </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="product-single.html">Strayhorn SP</a>
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
      </Fade>
      <Footer />
    </div>
  );
}

export default ProductStore;
