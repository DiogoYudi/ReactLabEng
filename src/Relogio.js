//import './Relogio.css';
import React, { useState } from "react";

function Relogio(){
    let time = new Date().toLocaleTimeString();
    let [t, newTime] = useState(time)
    function Time(){
        time = new Date().toLocaleTimeString();
        newTime(time);
    }
    setTimeout(Time, 1000);
    return(
        <h1>{t}</h1>
    );
}

export default Relogio;