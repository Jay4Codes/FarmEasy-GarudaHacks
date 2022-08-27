// React Imports
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

function ListWaste() {

  const [value, setValue] = useState({name : "", quantity : 0})

  const onChange = (e) =>{
    setValue({...value,[e.target.name]: e.target.value})
  }

  return (
    <div>
      <Fade bottom cascade>
        <div className="page-wrapper">
          <div className="checkout shopping">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="block billing-details">
                    <h4 className="widget-title">List Your Waste</h4>
                    <form className="checkout-form">
                      <div className="form-group">
                        <label for="product_name">Product Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="product_name"
                          placeholder="Product Name"
                          name="name"
                          value={value.name}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label for="quantity">Quantity</label>
                        <input
                          type="number"
                          className="form-control"
                          id="quantity"
                          placeholder="Quantity"
                          name="quantity"
                          value={value.quantity}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label for="image">Image</label>
                        <input
                          type="file"
                          className="form-control"
                          id="image"
                          placeholder="Upload Your Image"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="block">
                    <h4 className="widget-title">Payment Method</h4>
                    <p>Credit Cart Details (Secure payment)</p>
                    <div className="checkout-product-details">
                      <div className="payment">
                        <div className="card-details">
                          <form className="checkout-form">
                            <div className="form-group">
                              <label for="card-number">
                                Card Number <span className="required">*</span>
                              </label>
                              <input
                                id="card-number"
                                className="form-control"
                                type="tel"
                                placeholder="•••• •••• •••• ••••"
                              />
                            </div>
                            <div className="form-group half-width padding-right">
                              <label for="card-expiry">
                                Expiry (MM/YY){" "}
                                <span className="required">*</span>
                              </label>
                              <input
                                id="card-expiry"
                                className="form-control"
                                type="tel"
                                placeholder="MM / YY"
                              />
                            </div>
                            <div className="form-group half-width padding-left">
                              <label for="card-cvc">
                                Card Code <span className="required">*</span>
                              </label>
                              <input
                                id="card-cvc"
                                className="form-control"
                                type="tel"
                                maxlength="4"
                                placeholder="CVC"
                              />
                            </div>
                            <a
                              href="https://garudahacks.com/"
                              className="btn btn-main mt-20"
                            >
                              Place Order
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-checkout-details">
                    <div className="block">
                      <h4 className="widget-title">Order Summary</h4>
                      <div className="media product-card">
                        <a className="pull-left" href="product-single.html">
                          <img
                            className="media-object"
                            src="images/shop/cart/cart-1.jpg"
                            alt="cart-1"
                          />
                        </a>
                        <div className="media-body">
                          <h4 className="media-heading">
                            <a href="https://garudahacks.com/">
                              Ambassador Heritage 1921
                            </a>
                          </h4>
                          <p className="price">1 x $249</p>
                          <span className="remove">Remove</span>
                        </div>
                      </div>
                      <div className="discount-code">
                        <p>
                          Have a discount ?{" "}
                          <a
                            data-toggle="modal"
                            data-target="#coupon-modal"
                            href="https://garudahacks.com/"
                          >
                            enter it here
                          </a>
                        </p>
                      </div>
                      <ul className="summary-prices">
                        <li>
                          <span>Subtotal:</span>
                          <span className="price">$190</span>
                        </li>
                        <li>
                          <span>Shipping:</span>
                          <span>Free</span>
                        </li>
                      </ul>
                      <div className="summary-total">
                        <span>Total</span>
                        <span>$250</span>
                      </div>
                      <div className="verified-icon">
                        <img src="images/shop/verified.png" alt="verified" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ListWaste;
