export default function Carta({ id, idDoPar, imagem }){
    return(
        <button id={id} class="carta">
            <div class="cartaconteudo">
                <div class="cartafrente">
                    okokko
                </div>
                <div class="cartacostas">
                    <img
                        src={imagem}
                        alt={'Carta ${id}'} 
                        width={300} 
                    />
                </div>
            </div>
        </button>
    )
}