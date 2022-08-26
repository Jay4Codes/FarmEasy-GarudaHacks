import React from "react";

function Header() {
  return (
    <div>
      <section class="top-header">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-xs-12 col-sm-4">
              <div class="contact-number">
                <i class="tf-ion-ios-telephone"></i>
                <span>Dummy Text</span>
              </div>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-4">
              <div class="logo text-center">
                <a href="index.html">
                  <img src="" alt="logo" />
                </a>
              </div>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-4">
              <ul class="top-menu text-right list-inline">
                <li>Profile</li>
                <li class="dropdown search dropdown-slide">
                  <a
                    href="#!"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    <i class="tf-ion-ios-search-strong"></i> Search
                  </a>
                  <ul class="dropdown-menu search-dropdown">
                    <li>
                      <form action="post">
                        <input
                          type="search"
                          class="form-control"
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
