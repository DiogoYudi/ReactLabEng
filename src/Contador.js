import React, { useState } from "react";
import './Contador.css';
function Contador(){
    let [c, setCountH] = useState(0);
    let [c1, setCountM] = useState(0);

    function handleClickM(){
        setCountM(c1+1);
    }

    function handleClickMM(){
        setCountM(c1-1);
    }

    function handleClickH(){
        setCountH(c+1);
    }

    function handleClickHM(){
        setCountH(c-1);
    }

    return (
        <>
            <div class="total">
                <h3> Total </h3>
                <p>{c1+c}</p>
            </div>
            <div class="all">
                <div class="mybutton">
                    <div class="a">
                        <MyButton count={c} s={"+"} onClick={handleClickH}/>
                        <MyButton count={c} s={"-"} onClick={handleClickHM}/>
                    </div>
                    <p>{c}</p>
                </div>
                <div class="mybutton">
                    <div class="a">
                        <MyButton count={c1} s={"+"} onClick={handleClickM}/>
                        <MyButton count={c1} s={"-"} onClick={handleClickMM}/>
                    </div>
                    <p>{c1}</p>
                </div>
            </div>
        </>
    );
}

function MyButton({count, s, onClick}){
    if(s == "+"){
        return (
            <>
                <div class="button">
                    <button onClick={onClick}>
                        +
                    </button>
                </div>
            </>
        );
    }
    if(s == "-"){
        return (
            <>
                <div class="button">
                    <button onClick={onClick}>
                        -
                    </button>
                </div>
            </>
        );
    }
}

export default Contador;