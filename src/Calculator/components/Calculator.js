import React, { useState } from "react";
import MyButton from "./Button";

export default function Calculator(){
    let [n, setN] = useState('');
    let [n1, setN1] = useState(0);
    let [aux, setAux] = useState(0);
    let [operator, setOp] = useState(false);

    function addDigits(d){
        setN1('');
        if((d=="+" || d=="-" || d=="*" || d=="/" || d=="%")&&operator){
            setOp(false);
            setN(n1+d);
            return;
        }
        if(operator){
            setN(d);
            setAux(d);
            setOp(false);
            return;
        }
        let n2=n+d;
        setN(n2);
    }

    function Clean(){
        setN(n.replace(/\d$/, ''));
        setOp(false);
        setN1("");
        return;
    }

    function Delete(){
        setN('');
        setN1(0);
        setAux(0);
        setOp(false);
    }

    function Operator(){
        try{
            let r = eval(n);
            setAux(r);
            setN1("="+r);
            setOp(true);
        } catch{
            setN('Error');
        }
    }

    function PlusMinus(){
        setN(n*-1);
    }

    function Percent(){
        let p = parseFloat(n);
        setN((p/100).toString());
    }

    return(
        <div className="tela">
            <div className="result">
                <div class="n">
                    {n}
                    {n1}
                </div> 
            </div>
            <div className="teclado">
                <div className="gray">
                    <MyButton n={"AC"} onClick={() => Clean()}/>
                </div>
                <div className="gray">
                    <MyButton n={"C"} onClick={() => Delete()}/>
                </div>
                <div className="gray">
                    <MyButton n={"%"} onClick={() => Percent("%")}/>
                </div>
                <div className="orange">
                    <MyButton n={"/"} onClick={() => addDigits("/")}/>
                </div>
                <MyButton n={"7"} onClick={() => addDigits("7")}/>
                <MyButton n={"8"} onClick={() => addDigits("8")}/>
                <MyButton n={"9"} onClick={() => addDigits("9")}/>
                <div className="orange">
                    <MyButton n={"*"} onClick={() => addDigits("*")}/>
                </div>
                <MyButton n={"4"} onClick={() => addDigits("4")}/>
                <MyButton n={"5"} onClick={() => addDigits("5")}/>
                <MyButton n={"6"} onClick={() => addDigits("6")}/>
                <div className="orange">
                <MyButton n={"-"} onClick={() => addDigits("-")}/>
                </div>
                <MyButton n={"1"} onClick={() => addDigits("1")}/>
                <MyButton n={"2"} onClick={() => addDigits("2")}/>
                <MyButton n={"3"} onClick={() => addDigits("3")}/>
                <div className="orange">
                <MyButton n={"+"} onClick={() => addDigits("+")}/>
                </div>
                <MyButton n={"+/-"} onClick={() => PlusMinus()}/>
                <MyButton n={"0"} onClick={() => addDigits("0")}/>
                <MyButton n={","} onClick={() => addDigits(".")}/>
                <div className="orange">
                <MyButton n={"="} onClick={() => Operator()}/>
                </div>
            </div>
        </div>
    );
}