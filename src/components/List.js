import { useState } from "react";
import Listing from "./Listing";

export default function List({
  items,
  onDeleteItems,
  onToggleItems,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("item");
  let sortedItems;
  if (sortBy === "item") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packedItems")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Listing
            key={item.id}
            items={item}
            deleteHandler={onDeleteItems}
            toggleHandler={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="item">Sort by item</option>
          <option value="description">Sort by description</option>
          <option value="packedItems">Sort by packedItems</option>
        </select>
        <button onClick={onClearItems}>Clear All</button>
      </div>
    </div>
  );
}
