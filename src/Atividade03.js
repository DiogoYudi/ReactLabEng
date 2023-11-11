import {Link} from "react-router-dom";
import Gallery from "./Atividade3/Gallery";
import {Profile} from "./Atividade3/Gallery"
import Avatar from "./Atividade3/Avatar";
import Card from "./Atividade3/utils";
import PackingList from "./Atividade3/PackingList";
import List from "./Atividade3/List";
import Cup0 from "./Atividade3/Cup0";
import Cup from "./Atividade3/Cup";

export default function Atividade03(){
    return(
        <>
            <h1> Atividade 3 </h1>
            <Profile />
            <Gallery />
            <Card />
            <PackingList />
            <List />
            <h3>Cup TeaSet</h3>
            <Cup0 />
            <h3>Cup TeaGathering</h3>
            <Cup />
            <Link to="/">Voltar</Link>
        </>
    )
}