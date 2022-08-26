import React from "react";

function Header() {
  return (
    <div>
      <section className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="contact-number">
                <i className="tf-ion-ios-telephone"></i>
                <span>Dummy Text</span>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="logo text-center">
                <a href="index.html">
                  <img src="" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              <ul className="top-menu text-right list-inline">
                <li>Profile</li>
                <li className="dropdown search dropdown-slide">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    <i className="tf-ion-ios-search-strong"></i> Search
                  </a>
                  <ul className="dropdown-menu search-dropdown">
                    <li>
                      <form action="post">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search..."
                        />
                      </form>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
