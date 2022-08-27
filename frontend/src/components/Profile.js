// React Imports
import React from "react";
import { Fade } from "react-reveal";

// Component Imports
import Footer from "./Footer";
import Header from "./Headers/Header";
import ScrollToTop from "./ScrollToTop";

function Profile() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Fade bottom cascade>
        <div className="dashboard-wrapper dashboard-user-profile">
          <div className="media">
            <div className="pull-left text-center" href="#!">
              <img
                className="media-object user-img"
                src="images/avater.jpg"
                alt=""
              />
              <a href="#x" className="btn btn-transparent mt-20">
                Change Image
              </a>
            </div>
            <div className="media-body">
              <ul className="user-profile-list">
                <li>
                  <span>Full Name:</span>Jay Jain
                </li>
                <li>
                  <span>Country:</span>India
                </li>
                <li>
                  <span>Email:</span>jay4emails@gmail.com
                </li>
                <li>
                  <span>Phone:</span>+91 9867466628
                </li>
                <li>
                  <span>Address:</span>Mumbai, India
                </li>
                <li>
                  <span>Tokens:</span>200
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="dashboard-wrapper user-dashboard">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#451231</td>
                  <td>Mar 25, 2016</td>
                  <td>2</td>
                  <td>$99.00</td>
                  <td>
                    <span className="label label-primary">Processing</span>
                  </td>
                </tr>
                <tr>
                  <td>#451231</td>
                  <td>Mar 25, 2016</td>
                  <td>3</td>
                  <td>$150.00</td>
                  <td>
                    <span className="label label-success">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>#451231</td>
                  <td>Mar 25, 2016</td>
                  <td>3</td>
                  <td>$150.00</td>
                  <td>
                    <span className="label label-danger">Canceled</span>
                  </td>
                </tr>
                <tr>
                  <td>#451231</td>
                  <td>Mar 25, 2016</td>
                  <td>2</td>
                  <td>$99.00</td>
                  <td>
                    <span className="label label-info">On Hold</span>
                  </td>
                </tr>
                <tr>
                  <td>#451231</td>
                  <td>Mar 25, 2016</td>
                  <td>3</td>
                  <td>$150.00</td>
                  <td>
                    <span className="label label-warning">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="page-wrapper">
          <div className="cart shopping">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="block">
                    <div className="product-list">
                      <form method="post">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="">Item Name</th>
                              <th className="">Item Price</th>
                              <th className="">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="">
                              <td className="">
                                <div className="product-info">
                                  <img
                                    width="80"
                                    src="images/shop/cart/cart-1.jpg"
                                    alt=""
                                  />
                                  <a href="#!">Sunglass</a>
                                </div>
                              </td>
                              <td className="">$200.00</td>
                              <td className="">
                                <a className="product-remove" href="#!">
                                  Remove
                                </a>
                              </td>
                            </tr>
                            <tr className="">
                              <td className="">
                                <div className="product-info">
                                  <img
                                    width="80"
                                    src="images/shop/cart/cart-2.jpg"
                                    alt=""
                                  />
                                  <a href="#!">Airspace</a>
                                </div>
                              </td>
                              <td className="">$200.00</td>
                              <td className="">
                                <a className="product-remove" href="#!">
                                  Remove
                                </a>
                              </td>
                            </tr>
                            <tr className="">
                              <td className="">
                                <div className="product-info">
                                  <img
                                    width="80"
                                    src="images/shop/cart/cart-3.jpg"
                                    alt=""
                                  />
                                  <a href="#!">Bingo</a>
                                </div>
                              </td>
                              <td className="">$200.00</td>
                              <td className="">
                                <a className="product-remove" href="#!">
                                  Remove
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <a
                          href="checkout.html"
                          className="btn btn-main pull-right"
                        >
                          Checkout
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Footer />
    </div>
  );
}

export default Profile;
