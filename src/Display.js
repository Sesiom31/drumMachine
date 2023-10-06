import React from "react";
import OnOf from "./OnOf";

function Display() {
  return (
    <div id="display">
      <OnOf />
      <div>
        {" "}
        <h3></h3>
      </div>
      <input type="range" />
      <OnOf />
    </div>
  );
}

export default Display;
