export default function Heading({ color = 'olive', text, font }) {

    return (
        <div>
            <h1 style={{ color: color, fontSize: font }}>{text}</h1>
        </div>
    )
}