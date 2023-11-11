export default function Resultado(){
    let cn = classNames("resultado", {"resultadoaberto": false})
    return(
        <div class="resultado resultadoaberto">
            <div class="resultadobox">
                <p>Seu nível de memória é:</p>
                <h1>Bom</h1>
                <img 
                    src="" 
                    alt="Image referente ao nível de memória" 
                    height={150}
                />
                <p>
                    <strong>Taxa de acertos: </strong>
                    <span>60%</span>
                </p>
                <button class="button">
                    Nova Partida
                </button>
                <p>
                    <small>
                        * Essa análise é ilustrativo e não possui base cientifico
                    </small>
                </p>
            </div>
        </div>
    )
}