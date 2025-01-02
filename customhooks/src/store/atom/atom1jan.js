import {atom, atomFamily, selector, selectorFamily} from "recoil"
import axios from "axios";
import { projects } from "./data";


// useLoadable.... cool
// fix the warnings...

// AtomFamily building and looking for more realworld cases ???


export const Userselector = selector({
    key : "userdata",      
    get : async ()=>{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");            
            return response.data;
    }
})


export const User = atom({
    key : "user",
    default: Userselector
})


export const Notifications = atom({
    key: "notifications",
    default : {
        network : 0,
        job : 0,
        messages : 0,
        notification: 0,
    }
});


export const TotalcountSelector= selector({
    key: "total",
    get : ({get})=>{ // get here will ensure all the dependicies....
        const notifications = get(Notifications);  // will only re-render depending upon the the above Atom's rendering.
        const network = notifications.network
        const job = notifications.job
        const messages = notifications.messages
        const notification = notifications.notification

        const TotalCount = job+messages+network+notification;

        return TotalCount;  
    }
})



    export const project = atom({
        key: 'unique',
        default: 0
    });


    export const data = selectorFamily({
        key: 'unique2',
        get: (id) => async () => {
        try {
            await new Promise(r=>setTimeout(r, 3000));
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
            const result = res.data;
            return result;
        } catch (error) {
            console.error("Error fetching project:", error);
            return null;
        }
        },
    })
