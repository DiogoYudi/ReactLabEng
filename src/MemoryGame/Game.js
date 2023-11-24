import Cards from "./components/Cards";
import "./indexGame.css";
import {Link} from "react-router-dom";

export default function Game(){
    return(
        <div className="Game">
            <h1>Memory Game</h1>
            <Cards />
            <Link to="/">Voltar</Link>
        </div>
    )
}