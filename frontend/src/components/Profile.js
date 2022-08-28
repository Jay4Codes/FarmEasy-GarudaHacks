// React Imports
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

// Image Imports
import jay from "../assets/images/team/jay.png";

// Component Imports
import Footer from "./Footer";
import Header from "./Headers/Header";
import ListWaste from "./ListWaste";
import ScrollToTop from "./ScrollToTop";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "http://localhost:5000/api/farmer/getfarmerdetails",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const json = await res.json();
      console.log("json", json);
      setData(json);
      setLoading(false);
    };
    getData();
  }, []);

  setTimeout(() => {
    console.log(data);
  }, 3000);

  return (
    <div>
      <Header />
      <ScrollToTop />
      <Fade bottom cascade>
        <div className="dashboard-wrapper dashboard-user-profile">
          <div className="media">
            <div className="pull-left text-center" href="#!">
              <img className="media-object user-img" src={jay} alt="profile" />
              <a href="#x" className="btn btn-transparent mt-20">
                Change Image
              </a>
            </div>
            {loading ? (
              <div className="media-body">
                <ul className="user-profile-list">
                  <li>
                    <span>Full Name:</span>
                  </li>
                  <li>
                    <span>Country:</span>
                  </li>
                  <li>
                    <span>Email:</span>
                  </li>
                  <li>
                    <span>Phone:</span>
                  </li>
                  <li>
                    <span>Address:</span>
                  </li>
                  <li>
                    <span>Tokens:</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="media-body">
                <ul className="user-profile-list">
                  <li>
                    <span>Full Name:</span>
                    {data.name}
                  </li>
                  <li>
                    <span>Country:</span>Phillipines
                  </li>
                  <li>
                    <span>Email:</span>
                    {data.email}
                  </li>
                  <li>
                    <span>Phone:</span>
                    {data.phone}
                  </li>
                  <li>
                    <span>Address:</span>
                    {data.address}
                  </li>
                  <li>
                    <span>Tokens:</span>
                    {data.token}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <ListWaste />
      </Fade>

      <Fade bottom cascade>
        <div className="page-wrapper">
          <div className="cart shopping">
            <div className="container">
              <div className="row">
                <h1 className="widget-title">Products Listed On Our Store</h1>
                <div className="block">
                  <div className="product-list">
                    <form method="post">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="">Item Name</th>
                            <th className="">Item Price</th>
                            <th className="">Quantity</th>
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
                                <a href="#!">Cow Dung</a>
                              </div>
                            </td>
                            <td className="">100 Tokens</td>
                            <td className="">
                              <a className="product-remove" href="#!">
                                20kg
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
                                <a href="#!">Coconut Fibre</a>
                              </div>
                            </td>
                            <td className="">100 Tokens</td>
                            <td className="">
                              <a className="product-remove" href="#!">
                                30kg
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
                                <a href="#!">Coconut Husk</a>
                              </div>
                            </td>
                            <td className="">100 Tokens</td>
                            <td className="">
                              <a className="product-remove" href="#!">
                                13kg
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div
          className="dashboard-wrapper user-dashboard"
          style={{ margin: "0px 160px", border: "none" }}
        >
          <h1 className="widget-title">Your Previous Orders</h1>
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
                  <td>Aug 28, 2022</td>
                  <td>2</td>
                  <td>100 Tokens</td>
                  <td>
                    <span className="label label-primary">Processing</span>
                  </td>
                </tr>
                <tr>
                  <td>#451231</td>
                  <td>Aug 25, 2022</td>
                  <td>1</td>
                  <td>150 Tokens</td>
                  <td>
                    <span className="label label-success">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>#451231</td>
                  <td>July 28, 2022</td>
                  <td>3</td>
                  <td>150 Tokens</td>
                  <td>
                    <span className="label label-danger">Canceled</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Fade>

      <Footer />
    </div>
  );
}

export default Profile;
