import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Alan = () => {
  const navigate = useNavigate();
  function NavToRoom() {
    navigate(`/waste-store`);
  }
  function NavToMap() {
    navigate(`/product-store`);
  }

  function click(e) {
    e.preventDefault();
    navigate("/home");
    // console.log("Hello");
    alanBtn({
      key: "fe09ae6cf11e08a1aa9627559b5e5a7b2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        console.log("out here");
        if (commandData.command === "navigateToWaste") {
          NavToRoom();
        }
        if (commandData.command === "navigateToProd") {
          console.log("here");
          NavToMap();
        }
      },
    });
  }

  return (
    <div
      style={{
        position: "relative",
        zIndex: "20",
        bottom: "-420px",
        left: "20px",
        right: "1.25rem",
      }}
    >
      <button onClick={click} className="btn btn-main">Voice Assistant</button>
    </div>
  );
};

export default Alan;
