// React Imports
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import FileBase from 'react-file-base64';

function ListWaste() {

  const [value, setValue] = useState({name : "", quantity : 0, file : ""})

  const onChange = (e) =>{
    setValue({...value,[e.target.name]: e.target.value})
  }

  const submitData = async()=>{
    const res = await fetch ("http://localhost:5000/api/waste/postwaste",{
      method : "POST",
      headers: {
        "Content-type" : "application/json",
        'auth-token' : localStorage.getItem('token')
      },
      body : JSON.stringify({name : value.name, quantity : value.quantity, price : 100, file : value.file})
    }
    )
    const json = await res.json()
    console.log(json);
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
                    <h1 className="widget-title">List Your Waste</h1>
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
                        <FileBase type="file" className="form-control" multiple={false} onDone={({ base64 }) => setValue({ ...value, file: base64 })} />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-main" onClick={submitData}>
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
