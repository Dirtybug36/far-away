import Listing from "./Listing";

export default function List({ items, onDeleteItems, onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Listing
            key={item.id}
            items={item}
            deleteHandler={onDeleteItems}
            toggleHandler={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
}
