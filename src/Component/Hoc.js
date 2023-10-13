import { useState } from "react";

function Hoc(){
  const [add, setAdd] = useState(0)
   return(
    <>
    <h1>Show Addition Result : {add}</h1>
    <button onClick={()=> setAdd(add+2)}>Add Number</button>
    
    
    </>
   ) 
}
export default Hoc;