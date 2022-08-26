import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <section className="signin-page account">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="block text-center">
                <h2 className="text-center">Create Your Account</h2>
                <form className="text-left clearfix" action="index.html">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
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
                      Sign In
                    </button>
                  </div>
                </form>
                <p className="mt-20">
                  Already hava an account ?<Link to="/login"> Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
