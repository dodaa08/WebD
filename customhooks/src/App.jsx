import { useState } from "react"
import { usePev } from "./hooks/usePrev";

export default function App(){
  const [counetr, setCounter] = useState(0);
  const [anything , setanything] = useState(false);
  const prev = usePev(counetr, 0);


  return(
    <>
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1>{counetr}</h1>
        <button onClick={()=>setCounter(counetr+1)}>InC</button>  
        <button onClick={()=>setanything(!anything)}>Any</button>     
      </div>
      <div className="bg-black text-white">
        <h1>{prev}</h1>
      </div>
      
    </div>  
    </>
  )
}

 // fix the flashing that happens in the UI every 10 seconds..
  
  // usePrev, useDebounce, useOnline !!! 
  