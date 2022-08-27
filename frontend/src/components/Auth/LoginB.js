// React Imports
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Image Imports
import hori_logo from "../../assets/images/hori_logo.png";

function LoginB() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/buyer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/profile");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div>
      <section className="signin-page account">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="block text-center">
                <img src={hori_logo} alt="logo" />
                <h2 className="text-center">Welcome Back</h2>
                <form className="text-left clearfix">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={credentials.password}
                      onChange={onChange}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-main text-center"
                      onClick={login}
                    >
                      Login
                    </button>
                  </div>
                </form>
                <p className="mt-20">
                  New to this site ?
                  <Link to="/signupbuyer" className="link">
                    {" "}
                    Create New Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginB;
