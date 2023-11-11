import { createContext, useState } from "react";

export default function Context(){
    let [qtdCartaVirada, setqtdCartaVirada] = useState(0);
    let [qtdPonto, setqtdPonto] = useState(0);

    let incrementarqtdCartaVirada = () => {
        setqtdCartaVirada((quantidade) => quantidade + 1);
    };
}