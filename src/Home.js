import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atividade1/Atividade01">Atividade 1 - Relógio e Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atividade2/Atividade02">Atividade 2 - Contador</Link>
                    </li>
                    <li>
                        <Link to="/Atividade3/Atividade03">Atividade 3 - Componentes</Link>
                    </li>
                    <li>
                        <Link to="/MemoryGame/Game">Memory Game</Link>
                    </li>
                    <li>
                        <Link to="/Calculator/Calc">Calculadora</Link>
                    </li>
                    <li>
                        <Link to="/MemoryGame2/Gm">Teste MemoryGame</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;