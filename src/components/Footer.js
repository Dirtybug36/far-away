export default function Footer({ items }) {
  const totalItems = items.length;
  //we use filter method because we mustnot use the original array
  const totalPacked = items.filter((item) => item.packed).length;
  const totalPercentage = Math.round((totalPacked / totalItems) * 100);
  if (!totalItems)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  return (
    <div className="stats">
      <p>
        You have {totalItems} items on your list,and you have already packed{" "}
        {totalPacked} ({totalPercentage}%)
      </p>
    </div>
  );
}
