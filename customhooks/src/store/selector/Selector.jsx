import { selector } from "recoil";
import { Atom } from "../atom/counter";

const Selector = selector({
    key : "isOdd",
    get : ({get})=>{
        const value = get(Atom);
        const result = value % 2 ==1;
        return result;  // either true or false...
    }  
});

export default Selector;

