import React from "react";
import { data } from "./data";
import Pad from "./Pad";

function GroupPad({ audioOne,onChangeNameAudio, isOn }) {
  const group = data.map((obj) => {
    return (
      <Pad
        value={obj.code}
        name={audioOne ? obj.nameFirst : obj.nameSecond}
        onChange = {onChangeNameAudio}
        audio={audioOne ? obj.urlFirst : obj.urlSecond}
        isOn={isOn}
        key={obj.id}
      />
    );
  });
  return <div className="group-pad">{group}</div>;
}

export default GroupPad;
