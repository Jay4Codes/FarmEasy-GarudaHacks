// React Imports
import React, { useEffect, useState } from "react";
import Fade from "react-reveal";

// Components Imports
import Footer from "../Footer";
import Header from "../Headers/Header";
import ScrollToTop from "../ScrollToTop";

function WasteStore() {

  const [wastes, setWastes] = useState()
  const [loading, setLoading] = useState(true)

  const [modal, setModal] = useState(false)

  useEffect(() => {
    const getWaste = async () =>{
      const res = await fetch("http://localhost:5000/api/waste/getwaste",{
        method : 'GET',
        headers: {
          "Content-type": "application/json",
        }
      })
      const json = await res.json()
      setWastes(json);
      setLoading(false)
    } 
    getWaste()
  }, [modal])

  const purchaseProduct = async ()=>{
    const res = await fetch ("http://localhost:5000/api/waste/buywaste",{
      method : 'PATCH',
      headers : {
        "Content-type": "application/json",
      },
      // body : JSON.stringify({name : name, quantity : quantity})
    })
    const json = await res.json()

  }

  const WasteItem = (props) =>{
    console.log(props);
    return(
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
                <a onClick={()=>{
                  setModal(true)
                  }}>
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
    )
  }
  
  if(loading){
    return(
      <div>Loading</div>
    )
  }else{
    console.log(wastes);
    return (
      <div>
        <Header />
        <ScrollToTop />
        <Fade bottom cascade>
      {modal ? <>
        <div style={{position : "fixed", heigth : "200px", width : "200px", backgroundColor : "red", top:"200px"}}>
          asdads
        </div>
      </>: <></>}
          <section className="products section">
            <div className="container">
              <div className="row">
                <h1 className="page-title text-center">Waste Store</h1>
                <br />
                {wastes.map((waste)=>{
                  return(<WasteItem name={waste.name} price ={waste.price} quantity={waste.quantity}/>)
                })}
                {/* <div className="col-md-4">
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
                            <a href="https://garudahacks.com/">
                              <i className="tf-ion-ios-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://garudahacks.com/">
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
                            <a href="https://garudahacks.com/">
                              <i className="tf-ion-ios-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://garudahacks.com/">
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
                            </div> */}
                          {/* </div> */}
                        {/* </div> */}
                      {/* </div> */}
                    {/* </div> */}
                  {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </section>
        </Fade>
        <Footer />
      </div>
    );
  }

  
}

export default WasteStore;
