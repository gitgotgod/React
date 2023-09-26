export default function SlotMachine({ val1, val2, val3 }) {
    let isWinner = val1 === val2 && val1 === val3;
    return (
        <div className="slots">
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={{ color: isWinner ? "green" : "red" }}>{isWinner ? "You Win!" : "You Lose!"}</h2>
            {isWinner && <h3>Congrats!</h3>}
        </div >
    )
}