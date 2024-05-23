import React from 'react'
import { useState } from 'react';
import Comp from './Comp';
import './App.css'



const App = () => {

  const [var1,setVar1] = useState(0)
  const [var2,setVar2] = useState(0)

  return (
    <>
    
   
    <Comp name='Navbar' backgroundColor='red' height='20px' width='100%'></Comp> 

    <p style={{marginLeft:'48%'}}>Counter 1</p>
    <div className='container1' style={{display:'flex',justifyContent:'center'}}>
      <div className='button-holder' style={{display:'flex',justifyContent:'center'}}>
      <button onClick={()=>
        { 
          if(var1 == 9)
            alert("Can't be increased")
          else
          setVar1(var1+1)

        }}>+</button>
        <p>{var1}</p>
      <button onClick={()=>{ 
          if(var1 == 0)
            alert("Can't be decreased")
          else
          setVar1(var1-1)
        }}>-</button>
      </div>


      </div>


      <p style={{marginLeft:'48%'}}>Counter 2</p>
      <div className='container2' style={{display:'flex',justifyContent:'center'}}>
      <div className='button-holder' style={{display:'flex',justifyContent:'center'}}>
      <button onClick={()=>
        { 
          if(var2 == 9)
            alert("Can't be increased")
          else
          setVar2(var2+1)

        }}>+</button>
      <p>{var2}</p>
      <button onClick={()=>{ 
          if(var2 == 0)
            alert("Can't be decreased")
          else
          setVar2(var2-1)
        }}>-</button>
      </div>

    </div>
    <Comp name='footer' backgroundColor='blue' height='20px' width='100%'></Comp> 
    


    </>
    
  )
}

export default App;