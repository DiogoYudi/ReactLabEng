function Cup0({ guest }){
    return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet(){
    return(
        <>
            <Cup0 guest={1} />
            <Cup0 guest={2} />
            <Cup0 guest={3} />
        </>
    )
}