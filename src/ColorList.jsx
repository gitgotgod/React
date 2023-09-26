export default function ColorList({ colors }) {
    return (
        <div>
            <p>Color List</p>
            <ul>
                <li>
                    {colors.map((c => <li style={{ color: c }}>{c}</li>))}
                </li>
            </ul>
        </div>
    )
}