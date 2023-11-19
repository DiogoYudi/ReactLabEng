export default function MyButton({n, onClick}){
    return (
        <>
            <div class="button">
                <button onClick={onClick}>
                    {n}
                </button>
            </div>
        </>
    );
}