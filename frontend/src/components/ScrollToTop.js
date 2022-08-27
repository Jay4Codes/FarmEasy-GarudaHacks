// React Imports
import React from "react";

// CSS Imports
import "./ScrollToTop.css";

function ScrollToTop() {
  return (
    <div>
      <button
        className="scroll-to-top btn btn-main"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <i className="tf-ion-ios-arrow-up"></i>
      </button>
    </div>
  );
}

export default ScrollToTop;
