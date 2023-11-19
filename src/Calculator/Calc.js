import Calculator from "./components/Calculator";
import './indexCalc.css';

export default function Calc(){
    return(
        <div className="calc">
            <h1>Calculadora</h1>
            <Calculator />
        </div>
    )
}