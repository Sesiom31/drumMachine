import React, { useState } from "react";
import OnOf from "./OnOf";

function Display({ audioOne, onChangeAudio , nameAudio, onChangeIsOn, isOn}) {
  const [volumen, setVolumen] = useState(70);

  const handleChange = (e) => {
    setVolumen(e.target.value);
    console.log("hola");
  };
  return (
    <div id="display">

      <OnOf  onChange={onChangeIsOn} isValue={isOn} />

      <div className="name">
        <h3>{nameAudio}</h3>
      </div>
      <input
        id="volumen"
        type="range"
        max={100}
        min={0}
        value={volumen}
        onChange={handleChange}
      />
      <OnOf onChange={onChangeAudio} isValue={audioOne} />
    </div>
  );
}

export default Display;
