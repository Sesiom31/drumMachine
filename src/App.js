import React, { useState } from 'react'
import GroupPad from './GroupPad'
import Display from './Display'
import './App.css'

function App() {
  const [audioOne, setAudioOne] = useState(true)
  const [nameAudio, setNameAudio] = useState('')


  const handleChangeAudio = (value)=>{
    setAudioOne(value)
  }

  return (
    <div id='drum-machine'>
      <GroupPad audioOne={audioOne} />
      <Display audioOne={audioOne} onChangeAudio ={handleChangeAudio} />
    </div>
  )
}

export default App