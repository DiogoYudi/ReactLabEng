import {Link} from "react-router-dom";
import Gallery from "./Gallery";
import { Profile } from "./Gallery";
import Avatar from "./Avatar";
import Card from "./utils";
import PackingList from "./PackingList";

export default function Atividade03(){
    return(
        <>
            <h1> Atividade 3 </h1>
            <Profile />
            <Gallery />
            <Card />
            <PackingList />
            <Link to="/">Voltar</Link>
        </>
    )
}