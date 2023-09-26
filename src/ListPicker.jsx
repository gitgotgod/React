export default function ListPicker({ values }) {
    let randIdx = Math.floor(Math.random() * values.length);
    let randElement = values[randIdx];
    return (
        <div>
            <p>The list of values: {values}</p>
            <p>Random element is: {randElement}</p>
        </div>
    );
}