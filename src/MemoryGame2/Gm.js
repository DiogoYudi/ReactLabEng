import MemoryGame from "./components/MemoryGame";
import {Link} from "react-router-dom";

export default function Game(){
    return(
        <div className="Game">
            <h1>Memory Game</h1>
            <MemoryGame />
            <Link to="/">Voltar</Link>
        </div>
    )
}