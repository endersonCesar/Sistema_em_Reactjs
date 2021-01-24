import React, {useState} from "react";

export default (props) =>{
    const [valor, setValor ]= useState("Incial");
    
    return(
        <div>
           <h2>{valor}</h2>
           <input value={valor} onChange={(e)=>setValor(e.target.value)}></input> 
           <input value={valor} readOnly></input> 
           <input value={undefined} readOnly></input> 
        </div>
    );
}