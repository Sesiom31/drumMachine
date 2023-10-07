import React, { useEffect, useState, useCallback, useRef } from "react";

function Pad({ value, name, isOn, setNameAudio, srcAudio, volumen }) {
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef(null);

  const setConfig = useCallback(() => {
    setIsActive(true);
    setNameAudio(name);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    audioRef.current.volume = volumen / 100;

    setTimeout(() => {
      setIsActive(false);
    }, 120);
  }, [setNameAudio, name, volumen]);

  useEffect(() => {
    console.log('hola')
    const handleKeyDown = (e) => {
      if (isOn && e.key.toUpperCase() === value) {
        setConfig();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setConfig, value, isOn]);

  const handleClick = () => {
    console.log("btn");
    if (isOn) {
      setConfig();
    }
  };

  return (
    <button
      className={`drum-pad ${isActive && "isActive"} `}
      id={name}
      onClick={handleClick}
    >
      {value}
      <audio ref={audioRef} src={srcAudio} className="clip" id={value}></audio>
    </button>
  );
}

export default Pad;
