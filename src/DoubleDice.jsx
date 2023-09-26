export default function DoubleDice() {
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    let isWinner = num1 === num2;
    let styles = { color: isWinner ? "green" : "red" }
    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {isWinner && <h3>You win!</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )
}




// export default function DoubleDice() {
//     let num1 = Math.floor(Math.random() * 3) + 1;
//     let num2 = Math.floor(Math.random() * 3) + 1;
//     let result = num1 === num2 ? "You Win!" : "You Lose :("
//     return (
//         <div>
//             <h2>{result}</h2>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     )
// }