import { useEffect, useState } from "react";
import  useDebounce  from "../hooks/useDebounce"

export default function UseDebounce(){
    const [inputValue, setInputValue] = useState('');
    const debounce = useDebounce(inputValue, 200);

    const DO = (e)=>{
        setInputValue(e.target.value);
    }

    useEffect(()=>{
        console.log("Expensive operation...");
    },[debounce]);

    return(
        <>
        <div className="flex justify-center py-10">
            <div className="flex flex-col">
        <input type="text" placeholder="Search" className="border-2 py-2 px-5 rounded-xl" onChange={DO}/>
            </div>
        </div>
        </>
    )
}



// Assignment :-  explore :- useHooks.com and SWR, react query...

