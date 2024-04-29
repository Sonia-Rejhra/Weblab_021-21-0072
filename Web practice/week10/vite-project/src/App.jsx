import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar';

function App(){
// myVar=[1,3,4,5,6]

  
    {/* {JSON.stringify(myVar)}
<Navbar title="Think-Reality!"/> */}
  const [count, setCount] = useState(0)
  return (
    <>
 
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )


   

}
export default App;
