import React from "react";

function Pad({ value, name, audio }) {
  return (
    <button className="drum-pad" id={name}>
      {value}
      <audio  src={audio} className="clip" id={value}></audio>
    </button>
  );
}

export default Pad;
