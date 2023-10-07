import React from "react";

function OnOf({onChange, isValue}) {

  const handleClick = ()=>{
    console.log('onof')
    onChange(!isValue)
  }
  return (
    <div>
      <h3>Text</h3>
      <div className="container-movil" onClick={handleClick}>
        <div className="movil" style={{float: isValue ? 'right' :'left'}} ></div>
      </div>
    </div>
  );
}

export default OnOf;
