import {Link} from "react-router-dom";
import Relogio from "./Atividade1/Relogio";
import Letreiro from "./Atividade1/Letreiro";

export default function Atividade01(){
    return(
        <>
            <h1> Atividade 1 </h1>
            <Relogio/>
            <Letreiro/>
            <Link to="/">Voltar</Link>
        </>
    )
}