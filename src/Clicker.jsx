
export default function Clicker({ message, buttonText }) {
    const handleClick = () => {
        alert(message);
    }

    return (
        <div>
            <p></p>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}