import { useEffect, useRef, useState } from "react";


const App = () => {
  const btn = useRef()
  const [count, setCount] = useState(0)
  const valueAnterior = useRef()

   const contad = () => {
       setCount((prevCount) => prevCount + 1)
       
   }
   
   useEffect(() => {
     valueAnterior.current = count
     console.log(valueAnterior.current)
   }, [count])
  return (
   <div>
    <p>{count}</p>
    <p>{valueAnterior.current}</p>
    <button ref={btn} onClick={contad}>enviar</button>
   </div>
  );
}

export default App;
