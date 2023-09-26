export default function Die({ numSides }) {
    let roll = Math.floor(Math.random() * numSides) + 1;
    return (
        <div>
            <p>{numSides}-sided Die roll: {roll}
            </p>
        </div>
    )
}