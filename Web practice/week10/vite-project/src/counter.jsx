import React, { useState } from 'react'

export default function counter() {
    const [value,setValue]=useState(0)
  return (
    <div>
    <button onClick={()=> {setValue(value+1);}}>+</button>{numeber} <button onClick={()=> {setValue(value-1);}}>-</button>
    </div>
  )
}
