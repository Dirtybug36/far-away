import { useState } from "react";
import React from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //handeling form
  function handleForm(e) {
    e.preventDefault();
    if (!description) return;
    const newItems = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItems);
    setDescription("");
    setQuantity(1);
  }
  //here in handle form if there is no any description the form is not submitted,new description will come from input and quantity will come from select and then it is added to onAdditems which has  setItems((item) => [...items, item]);

  //create a array for the 'select' to use
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
  return (
    <form className="add-form" onSubmit={handleForm}>
      <h3>What do you need for your 😊 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {numbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
      />
      <button>Add</button>
    </form>
  );
}
