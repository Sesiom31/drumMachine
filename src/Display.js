import React, { useState } from "react";
import OnOf from "./OnOf";

function Display({ audioOne, onChangeAudio }) {
  const [volumen, setVolumen] = useState(30);

  const handleChange = (e) => {
    setVolumen(e.target.value);
    console.log("hola");
  };
  return (
    <div id="display">
      <OnOf />
      <div className="name">
        <h3>Piano</h3>
      </div>
      <input
        id="volumen"
        type="range"
        max={100}
        min={0}
        value={volumen}
        onChange={handleChange}
      />
      <OnOf />
    </div>
  );
}

export default Display;
