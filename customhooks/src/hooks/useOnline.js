import { useRef } from "react";

const useOnline = ()=>{
    const isOnline = useRef(navigator.onLine);
    
    return isOnline;
}

export default useOnline