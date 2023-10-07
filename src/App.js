import React, { useState } from "react";
import GroupPad from "./GroupPad";
import Display from "./Display";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(true);
  const [isSecondAudio, setIsSecondAudio] = useState(false);
  const [nameAudio, setNameAudio] = useState("");
  const [volumen, setVolumen] = useState(40);

  return (
    <div id="drum-machine">
      <GroupPad
        isOn={isOn}
        isSecondAudio={isSecondAudio}
        setNameAudio={setNameAudio}
        volumen={volumen}
      />
      <Display
        isOn={isOn}
        setIsOn={setIsOn}
        isSecondAudio={isSecondAudio}
        setIsSecondAudio={setIsSecondAudio}
        setNameAudio={setNameAudio}
        nameAudio={nameAudio}
        setVolumen={setVolumen}
        volumen={volumen}
      />
    </div>
  );
}

export default App;
