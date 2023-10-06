import React from 'react'

function Pad({value}) {
  return (
    <button className='drum-pad' id={value} >{value}
    <audio controls='false' src='' className='clip' id={value}></audio>
    </button>
  )
}

export default Pad