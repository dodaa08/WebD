import { atom } from "recoil"
import Fetch from "../selector/Fetch";

const Data = atom({
    key : "data",
    default :   Fetch
});


export default Data;

