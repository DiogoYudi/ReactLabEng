import Calculator from "./components/Calculator";
import './indexCalc.css';
import {Link} from "react-router-dom";

export default function Calc(){
    return(
        <div className="calc">
            <h1>Calculadora</h1>
            <Calculator />
            <Link to="/">Voltar</Link>
        </div>
    )
}