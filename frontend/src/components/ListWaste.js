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
                      <div className="form-group">
                        <button type="submit" className="btn btn-main">
                          Submit
                        </button>
                      </div>
                    </form>
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
