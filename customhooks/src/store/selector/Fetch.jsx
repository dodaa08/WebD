import { selector } from "recoil"

const Fetch = selector({
    key : "fetchData",
    get : async ()=>{
        try{
            const response = await(fetch("https://jsonplaceholder.typicode.com/posts/1"));
            const json = await response.json();
        
            return json;
        }
        catch(Error){
            throw Error;
        }
    }
})

export default Fetch