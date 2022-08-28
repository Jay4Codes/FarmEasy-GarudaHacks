// React Imports
import React, { useEffect, useState } from "react";
import Fade from "react-reveal";

// Components Imports
import Footer from "../Footer";
import Header from "../Headers/Header";
import ScrollToTop from "../ScrollToTop";
import Modal from "./Modal";

function WasteStore() {
  const [wastes, setWastes] = useState();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [file, setFile] = useState();

  const [show, setShow] = React.useState(false);

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
  }, [show]);

  const purchaseProduct = async () => {
    const res = await fetch("http://localhost:5000/api/waste/buywaste", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: name, quantity: value }),
    });
    const json = await res.json();
  };

  const WasteItem = (props) => {
    // console.log(props);
    return (
      <div className="col-md-4">
        <div className="product-item">
          <div className="product-thumb">
            <span className="bage">Sale</span>
            <div
              className="product-img"
              style={{ width: "400px", height: "400px" }}
            >
              <img
                className="img-responsive"
                src={props.image}
                alt="product-img"
              />
            </div>
            <div className="preview-meta">
              <ul>
                <li>
                  <a href="https://garudahacks.com/">
                    <i className="tf-ion-ios-heart"></i>
                  </a>
                </li>
                <li>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setName(props.name);
                      setPrice(props.price);
                      setFile(props.image);
                      setShow(true);
                    }}
                  >
                    <i className="tf-ion-android-cart"></i>
                  </button>
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

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <Header />
        <ScrollToTop />
        <Fade bottom cascade>
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
                      image={waste.file}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </Fade>

        <Modal show={show} onClose={() => setShow(false)}>
          <div className="col-md-8 col-sm-6 col-xs-12">
            <div className="modal-image">
              <img
                className="img-responsive"
                style={{ width: "600px" }}
                src={file}
                alt="item"
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="product-short-details">
              <h2 className="product-title">{name}</h2>
              <p className="product-price">{price}</p>
              <input
                type="number"
                placeholder="Quantity"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <br />
              <button
                onClick={() => {
                  purchaseProduct();
                  setShow(false);
                }}
                className="btn btn-main"
              >
                Purchase
              </button>
            </div>
          </div>
        </Modal>
        <Footer />
      </div>
    );
  }
}

export default WasteStore;
