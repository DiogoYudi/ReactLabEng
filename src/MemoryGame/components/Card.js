import "../indexGame.css";

export default function Card({item, id, handleClick}){
    let itemClass = item.stat ? " active " + item.stat : ""
    return(
        <div className={"carda" + itemClass} onClick={() => handleClick(id)}>
            <img
                src={item.img}
                alt="" 
            />
        </div>
    )
}