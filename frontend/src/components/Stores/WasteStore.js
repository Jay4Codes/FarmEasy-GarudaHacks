// React Imports
import React, { useEffect, useState } from "react";
import Fade from "react-reveal";

// Components Imports
import Footer from "../Footer";
import Header from "../Headers/Header";
import ScrollToTop from "../ScrollToTop";

function WasteStore() {
  const [wastes, setWastes] = useState();
  const [loading, setLoading] = useState(true);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getWaste = async () => {
      const res = await fetch("http://localhost:5000/api/waste/getwaste", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await res.json();
      setWastes(json);
      setLoading(false);
    };
    getWaste();
  }, [modal]);

  const WasteItem = (props) => {
    console.log(props);
    return (
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
                  <a href="https://garudahacks.com/">
                    <i className="tf-ion-ios-heart"></i>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setModal(true);
                    }}
                  >
                    <i className="tf-ion-android-cart"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <h4>
              <a href="product-single.html">{props.name}</a>
            </h4>
            <p className="price">{props.price} Points</p>
            <p className="price">Available Quantity : {props.quantity}kg</p>
          </div>
        </div>
      </div>
    );
  };

  const itemModal = (props) => {
    console.log(props);
    return (
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
                    <img className="img-responsive" src="" alt="item" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="product-short-details">
                    <h2 className="product-title">{props.name}</h2>
                    <p className="product-price">{props.price}</p>
                    <input type="number" placeholder="Quantity" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div>Loading</div>;
  } else {
    console.log(wastes);
    return (
      <div>
        <Header />
        <ScrollToTop />
        <Fade bottom cascade>
          {modal ? (
            <>
              <div
                style={{
                  position: "fixed",
                  heigth: "200px",
                  width: "200px",
                  backgroundColor: "red",
                  top: "200px",
                }}
              >
                asdads
              </div>
            </>
          ) : (
            <></>
          )}
          <section className="products section">
            <div className="container">
              <div className="row">
                <h1 className="page-title text-center">Waste Store</h1>
                <br />
                {wastes.map((waste) => {
                  return (
                    <WasteItem
                      name={waste.name}
                      price={waste.price}
                      quantity={waste.quantity}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </Fade>

        <itemModal name={waste.name} price={waste.price} />
        <Footer />
      </div>
    );
  }
}

export default WasteStore;
