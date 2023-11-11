import React, { useState } from "react";
import { createContext } from "react";
import Card from "./Card";
import "../indexGame.css";

export default function Cards(){
    let [items, setItems] = useState([
        { id: 1, img: 'https://i.imgur.com/fbnHQJI.png', stat: ""},
        { id: 1, img: 'https://i.imgur.com/fbnHQJI.png', stat: ""},
        { id: 2, img: 'https://i.imgur.com/qQj2956.png', stat: ""},
        { id: 2, img: 'https://i.imgur.com/qQj2956.png', stat: ""},
        { id: 3, img: 'https://i.imgur.com/FmebIx9.png', stat: ""},
        { id: 3, img: 'https://i.imgur.com/FmebIx9.png', stat: ""},
        { id: 4, img: 'https://i.imgur.com/C2IBfJO.png', stat: ""},
        { id: 4, img: 'https://i.imgur.com/C2IBfJO.png', stat: ""},
        { id: 5, img: 'https://i.imgur.com/k7Fcn8p.png', stat: ""},
        { id: 5, img: 'https://i.imgur.com/k7Fcn8p.png', stat: ""},
        { id: 6, img: 'https://i.imgur.com/UCpiMC9.png', stat: ""},
        { id: 6, img: 'https://i.imgur.com/UCpiMC9.png', stat: ""},
        { id: 7, img: 'https://i.imgur.com/SNnb4UA.png', stat: ""},
        { id: 7, img: 'https://i.imgur.com/SNnb4UA.png', stat: ""},
        { id: 8, img: 'https://i.imgur.com/3OyQkJZ.png', stat: ""},
        { id: 8, img: 'https://i.imgur.com/3OyQkJZ.png', stat: ""}
    ].sort(() => Math.random() - 0.5))

    let [prev, setPrev] = useState(-1);
    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct";
            items[prev].stat = "correct";
            setPrev(-1);
        }
        else{
            items[current].stat = "wrong";
            items[prev].stat = "wrong";
            setItems([...items]);
            setTimeout(() => {
                items[current].stat = "";
                items[prev].stat = "";
                setItems([...items]);
                setPrev(-1);
            }, 1000);
        }
    }

    function handleClick(id){
        if(items[id].stat=="active" || items[id].stat=="correct")
            return;
        if(prev === -1){
            items[id].stat = "active";
            setItems([...items])
            setPrev(id);
        }
        else{
            check(id);
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    );
}