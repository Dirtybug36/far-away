export default function Listing({ items, deleteHandler, toggleHandler }) {
  return (
    <li>
      <input
        type="checkbox"
        value={items.id}
        onChange={() => toggleHandler(items.id)}
      />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button onClick={() => deleteHandler(items.id)}>✖️</button>
    </li>
  );
}
