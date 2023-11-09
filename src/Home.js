import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atividade01">Atividade 1 - Relógio e Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atividade02">Atividade 2 - Contador</Link>
                    </li>
                    <li>
                        <Link to="/Atividade03">Atividade 3 - Componentes</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;