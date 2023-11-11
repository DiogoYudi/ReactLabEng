import Cards from "./components/Cards";
import "./indexGame.css";

export default function Game(){
    return(
        <div className="Game">
            <h1>Memory Game</h1>
            <Cards />
        </div>
    )
}