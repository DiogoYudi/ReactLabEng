import Cards from "./components/Cards";
import "./indexGame.css";

export default function Game(){
    return(
        <div class="Game">
            <h1>Memory Game</h1>
            <Cards />
        </div>
    )
}