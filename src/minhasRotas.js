import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atividade01 from "./Atividade1/Atividade01"
import Atividade02 from "./Atividade2/Atividade02";
import Atividade03 from "./Atividade3/Atividade03";
import Game from "./MemoryGame/Game";
import Calc from "./Calculator/Calc";
import Gm from "./MemoryGame2/Gm";

export default function MinhasRotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Atividade1/Atividade01" element={<Atividade01 />}/>
                <Route path="/Atividade2/Atividade02" element={<Atividade02 />}/>
                <Route path="/Atividade3/Atividade03" element={<Atividade03 />}/>
                <Route path="/MemoryGame/Game" element={<Game />}/>
                <Route path="/Calculator/Calc" element={<Calc />}/>
                <Route path="/MemoryGame2/Gm" element={<Gm />}/>
            </Routes>
        </BrowserRouter>
    );
}