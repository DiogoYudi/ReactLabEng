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

    function reset(){
        setCountH(0);
        setCountM(0);
    }

    return (
        <>
            <div class="total">
                <div class="top">
                    <h3> Total </h3>
                    <MyButton count={c} s={"r"} onClick={reset}/>
                </div>
                <p>{c1+c}</p>
            </div>
            <div class="all">
                <div class="mybutton">
                    <img
                        className="Man"
                        src="https://i.imgur.com/YnYPpqu.png"
                        style={{
                            width: 90,
                            height: 90
                        }}
                    />
                    <div className="a">
                        <MyButton count={c} s={"+"} onClick={handleClickH}/>
                        <MyButton count={c} s={"-"} onClick={handleClickHM}/>
                    </div>
                    <h3>Homens</h3>
                    <p>{c}</p>
                </div>
                <div className="mybutton">
                    <img
                        className="Woman"
                        src="https://i.imgur.com/gJZm1fs.png"
                        style={{
                            width: 90,
                            height: 90
                        }}
                    />
                    <div className="a">
                        <MyButton count={c1} s={"+"} onClick={handleClickM}/>
                        <MyButton count={c1} s={"-"} onClick={handleClickMM}/>
                    </div>
                    <h3>Mulheres</h3>
                    <p>{c1}</p>
                </div>
            </div>
        </>
    );
}

function MyButton({count, s, onClick}){
    let cssbutton={
        width: 25,
        height: 25,
        border: 'none',
        backgroundColor: '#fff',
        borderRadius: 40,
    }
    if(s == "+"){
        return (
            <>
                <div className="button1">
                    <button style={cssbutton} onClick={onClick}>
                        +
                    </button>
                </div>
            </>
        );
    }
    if(s == "-"){
        return (
            <>
                <div class="button1">
                    <button style={cssbutton} onClick={onClick}>
                        -
                    </button>
                </div>
            </>
        );
    }
    if(s == "r"){
        return (
            <>
                <div class='reset'>
                    <button onClick={onClick}>
                        <img
                            className="return"
                            src="https://i.imgur.com/f6mMrWE.png"
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />
                    </button>
                </div>
            </>
        );
    }
}

export default Contador;