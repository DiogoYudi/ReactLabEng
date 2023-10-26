import React, { useState } from "react";
import './Contador.css';
function Contador(){
    let [c, setCountH] = useState(0);
    let [c1, setCountM] = useState(0);
    let [c2, setCountT] = useState(0);

    function handleClickM(){
        setCountM(c1+1);
    }

    function handleClickH(){
        setCountH(c+1);
    }

    function handleClickT(){
        setCountT(c2+1);
    }
    return (
        <>
            <h3> Total </h3>
            <p>{c1+c}</p>
            <div class="mybutton">
                <MyButton count={c} s={"Man"} onClick={handleClickH}/>
                <MyButton count={c1} s={"Woman"} onClick={handleClickM}/>
            </div>
        </>
    );
}

function MyButton({count, s, onClick}){
    return (
        <>
            {s}
            <div class="button">
                <button onClick={onClick}>
                    Clicked {count} times
                </button>
            </div>
        </>
    );
}

export default Contador;