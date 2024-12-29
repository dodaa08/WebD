import { useRef } from "react";

export const usePev = (value, initial)=>{
    const prev = useRef({target : value, previous : initial});
    
    if(prev.current.target != value){ // every re-render the value won't be same.
        prev.current.previous = prev.current.target;  // keep updating the cuurent value on 
        prev.current.target = value;   // keep the current target equal 
    }

    return prev.current.previous;
}   