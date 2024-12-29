import { useEffect, useState } from "react"

const useDebounce = (value, delay)=>{

    useEffect(()=>{
        const handler = setTimeout(value, delay);

        return ()=> clearTimeout(handler);
    },[value, delay]);


    return value;
}

export default useDebounce;