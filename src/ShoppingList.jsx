
function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((i) => (
                <li key={i.id}
                    style={{ color: i.completed ? "grey" : "red", textDecoration: i.completed ? "line-through" : "none" }}>
                    {i.item} - {i.quantity}
                </li>
            ))}
        </ul>
    );
}

export default ShoppingList;


// const items = {
//     { item: 'eggs', quantity: 12, completed: false },
//     { item: 'milk', quantity: 1, completed: true },
//     { item: 'chicken breast', quantity: 4, completed: false },
//     { item: 'carrots', quantity: 6, completed: true }
//     };