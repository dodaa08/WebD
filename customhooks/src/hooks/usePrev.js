import { useEffect, useRef } from "react";

export const usePev = (value)=>{
    const prev = useRef();

    useEffect(()=>{
        prev.current = value;
    }, [value])

    return prev.current 
}