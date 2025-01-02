// useRecoilValue, useSetRecoilState, useRecoilState 
// 1. Give access to the variable/value.
// 2. give access to just the function not any other thing...
// 3. give access to both...

import { useRecoilValueLoadable} from "recoil"
import { project, data } from "./atom/atom1jan";

const Test = ()=>{
    return(
        <>
       
        <Todos id={1} />
       
        </>
    )
}

// useRecoilLoadable and useRecoilStateLoadable...


// almost same useRecoilStateLoadable with let's a state variable type defined structure : const [] = useRecoilStateLoadable.


const Todos = ({ id }) => {

  const userdata = useRecoilValueLoadable(data(id));

  console.log(userdata);

  // if (!) return <div>Loading...</div>;

  if(userdata.state == "loading"){
    return <div>
      loading...
    </div>
  }
  if(userdata.state == "hasError"){
    return <div>
      Error
    </div>
  }
  if(userdata.state == "hasValue"){
    return (
      <div className="py-20">
      <h1 className="text-center text-black">{userdata.contents.title}</h1>
    </div>
  );
}  
return null;

};



export default Test;

// Different from context API:- performance optimizations,  Also will help you in rendering only the variables sunscribed to the Atom.
