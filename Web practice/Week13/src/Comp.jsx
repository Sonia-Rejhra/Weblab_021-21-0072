import React from 'react'

const Comp = (Props) => {
  return (
    <div  style={{ display:'flex', justifyContent:'center',backgroundColor:Props.backgroundColor, width:Props.width, height:Props.height}}>{Props.name}</div>
  )
}

export default Comp