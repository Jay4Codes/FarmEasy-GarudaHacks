import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function WasteStore() {
  return (
    <div>
      <Header />
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h1 className="page-name">Waste Store</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products section">
        <div className="container">
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
                    src="images/shop/products/product-2.jpg"
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
                    src="images/shop/products/product-3.jpg"
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Rem iusto nihil cum. Illo laborum numquam rem
                            aut officia dicta cumque.
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
      <Footer />
    </div>
  );
}

export default WasteStore;
