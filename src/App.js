import React, { useState } from "react";
import GroupPad from "./GroupPad";
import Display from "./Display";
import "./App.css";

function App() {
  const [audioOne, setAudioOne] = useState(false);
  const [nameAudio, setNameAudio] = useState("");

  const [isOn, setIsOn] = useState(true);

  const handleChangeAudio = (value) => {
    setAudioOne(value);
  };
  const handleNameAudio =(value) =>{
    setNameAudio(value)
  }

  const handleIsOn = (value) => {
    setIsOn(value);
  };

  return (
    <div id="drum-machine">
      <GroupPad audioOne={audioOne} isOn={isOn} onChangeNameAudio = {handleNameAudio} />
      <Display
        audioOne={audioOne}
        onChangeAudio={handleChangeAudio}
        nameAudio= {nameAudio}

        onChangeIsOn={handleIsOn}
        isOn={isOn}
      />
    </div>
  );
}

export default App;
