
import './app.css'
import './footer'
import './navbar'

export function App() {
  const [Add,setAdd] =useState(0);
  const [sub,setSub] = useState(0)

  return (
    <>
    
     <div>
     <P>Counter 1</P>
     <button onClick={(item)=> setAdd(item+1)}>+</button>
     <button onClick={(item) => setSub(item-1)}>-</button></div>
     <div>
     <P>Counter 2</P>
     <button onClick={(item)=> setAdd(item+1)}>+</button>
     <button onClick={(item) => setSub(item-1)}>-</button></div>

     
    </>
  )
}
