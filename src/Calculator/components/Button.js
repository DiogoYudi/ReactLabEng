export default function MyButton({n, onClick}){
    return (
        <>
            <div className="but">
                <button onClick={onClick}>
                    {n}
                </button>
            </div>
        </>
    );
}