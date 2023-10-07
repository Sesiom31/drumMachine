import React from "react";

function OnOf({ isValue, setValue }) {
  const handleToggle = () => {
    setValue(!isValue);
  };

  return (
    <div>
      <h3>Text</h3>
      <div className="container-movil" onClick={handleToggle}>
        <div
          className="movil"
          style={{ float: isValue ? "left" : "right" }}
        ></div>
      </div>
    </div>
  );
}

export default OnOf;
