import React from "react";
import Carousel from "./Carousel";

function Featured() {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />

      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
    </div>
  );
}

export default Featured;
