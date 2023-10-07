import React from "react";
import { data } from "./data";
import Pad from "./Pad";

function GroupPad({ isOn, isSecondAudio, setNameAudio, volumen }) {
  const group = data.map((obj) => {
    return (
      <Pad
        key={obj.id}
        value={obj.code}
        name={isSecondAudio ? obj.nameSecond : obj.nameFirst}
        isOn={isOn}
        setNameAudio={setNameAudio}
        srcAudio={isSecondAudio ? obj.urlSecond : obj.urlFirst}
        isSecondAudio={isSecondAudio}
        volumen={volumen}
      />
    );
  });
  return <div className="group-pad">{group}</div>;
}

export default GroupPad;
