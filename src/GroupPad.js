import React from 'react'
import { data } from './data'
import Pad from './Pad'

function GroupPad() {
  const group = data.map(obj =>{
    return <Pad value={obj.code} key={obj.id} />
  })
  return (
    <div>{group}</div>
  )
}

export default GroupPad