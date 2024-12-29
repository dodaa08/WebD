import useOnline from "../hooks/useOnline"

export default function UseOnline(){
    const isOnline = useOnline();
    return(
        <>
        <h1>{isOnline ? "Online !" : "offline... !"}</h1>        
        </>
    )
}