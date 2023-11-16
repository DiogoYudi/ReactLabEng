import React, { useState } from "react";

export default function Calculator(){
    let [n, setN] = useState(0);
    let [n1, setN1] = useState(0);
    let [t, setT] = useState("+");

    function Math(n1, t){
        let result;
        setN1(n1);
        setT(t);
        if(t=="+"){
            result=n+n1;
            setN(result);
        }
        if(t=="-"){
            result=n-n1;
            setN(result);
        }
        if(t=="="){
            result = n;
            setN(result);
        }
    }
    return(
        <div className="tela">
            <div className="result">
                <h3 id="res">{n}</h3>
            </div>
            <div className="teclas">
                <MyButton n={n} n1={1} t={t} onClick={() => Math(1, t)}/>
                <MyButton n={n} n1={2} t={t} onClick={() => Math(2, t)}/>
                <MyButton n={n} n1={"-"} t={"-"} onClick={() => Math(0, "-")}/>
                <MyButton n={n} n1={"="} t={"="} onClick={() => Math(0, "=")}/>
            </div>
        </div>
    );
}

function MyButton({n1, t, onClick}){
    if(t == "+" || t=="-" || t=="*" || t=="/"){
        return (
            <>
                <div class="button">
                    <button onClick={onClick}>
                        {n1}
                    </button>
                </div>
            </>
        );
    }
    if(t == "-"){
        return (
            <>
                <div class="button">
                    <button onClick={onClick}>
                        {n1}
                    </button>
                </div>
            </>
        );
    }
    if(t == "="){
        return (
            <>
                <div class="button">
                    <button onClick={onClick}>
                        {n1}
                    </button>
                </div>
            </>
        );
    }
}