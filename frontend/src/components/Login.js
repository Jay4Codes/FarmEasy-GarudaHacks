import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <section className="signin-page account">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="block text-center">
                <h2 className="text-center">Welcome Back</h2>
                <form className="text-left clearfix" action="index.html">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-main text-center">
                      Login
                    </button>
                  </div>
                </form>
                <p className="mt-20">
                  New to this site ?
                  <Link to="/signup"> Create New Account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
