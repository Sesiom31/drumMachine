import React, { useEffect, useState } from "react";

function Pad({ value, name, audio, onChange, isOn }) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    console.log("hola");
    const handleKeypress = (e) => {
      if (isOn && e.key.toUpperCase() === value) {
        setIsActive(true);
        onChange(name);

        setTimeout(() => {
          setIsActive(false);
        }, 120);
      }
    };
    window.addEventListener("keydown", handleKeypress);
    return () => window.removeEventListener("keydown", handleKeypress);
  }, [value, isOn,name,onChange]);

  const handleClick = (e) => {
    console.log("btn");
    if (isOn) {
      setIsActive(true);
      onChange(name);
      setTimeout(() => {
        setIsActive(false);
      }, 120);
    }
  };

  return (
    <button
      className={`drum-pad ${isActive && "isActive"}`}
      id={name}
      onClick={handleClick}
    >
      {value}
      <audio src={audio} className="clip" id={value}></audio>
    </button>
  );
}

export default Pad;
