import Resultado from "../../MemoryGame/components/Resultado";
import Carta from "./Carta";
import Placar from "./Placar";
import { paresDeCartas } from "./cartas";

export default function JogoDaMemoria(){
    return(
        <div class="jogomemoria">
            <div class="content">
                <h1>Jogo da Memória</h1>
                <Placar />
                <div class="jogomemoriacartas">
                    {paresDeCartas.map((carta) => (<Carta key={carta.id} {...carta} />
                    ))}
                </div>
            </div>
            <Resultado />
        </div>
    )
}