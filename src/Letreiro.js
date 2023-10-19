//import './Relogio.css';
import React, { useState } from "react";

let txt = "Conheça a Fatec";
function Letreiro(){
    let [t, newText] = useState(0)
    if(t<=txt.length)
        setTimeout(() => newText(t+1), 1000);
    else
        newText(0);
    return(
        <h1>{txt.slice(0, t)}</h1>
    )
}

export default Letreiro;