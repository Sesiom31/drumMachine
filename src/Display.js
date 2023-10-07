import React from "react";
import OnOf from "./OnOf";

function Display({
  isOn,
  setIsOn,
  isSecondAudio,
  setIsSecondAudio,
  nameAudio,
  setNameAudio,
  setVolumen,
  volumen,
}) {
  const handleChange = (e) => {
    setVolumen(e.target.value);
    setNameAudio(`Volumen: ${e.target.value}`);
    setTimeout(() => {
      setNameAudio(" ");
    }, 1000);
  };

  return (
    <div id="display">
      <OnOf isValue={isOn} setValue={setIsOn} />

      <div className="name">
        <h3>{!isOn ? "" : nameAudio.replace("-", " ")}</h3>
      </div>
      <input
        id="volumen"
        type="range"
        max={100}
        min={0}
        step={1}
        value={volumen}
        onChange={handleChange}
      />
      <OnOf isValue={isSecondAudio} setValue={setIsSecondAudio} />
    </div>
  );
}

export default Display;
