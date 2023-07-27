import { useState } from "react";
import "./index.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {
  //lifting in parent so that it can be accesible for the children
  const [items, setItems] = useState(initialItems);

  //create a function so that the children can use setitems
  function handleItems(item) {
    setItems((prevItem) => [...prevItem, item]);
  }
  return (
    <div className="app">
      <h1> 🏝️Far Away🛍️</h1>
      <Form onAddItems={handleItems} />
      <List items={items} />
    </div>
  );
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleForm(e) {
    e.preventDefault();
    if (!description) return;
    const newItems = [{ description, quantity, packed: false, id: Date.now() }];
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
function List({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((items) => (
          <Listing items={items} />
        ))}
      </ul>
    </div>
  );
}
function Listing({ items }) {
  return (
    <>
      <li key={items.id}>
        {items.quantity}- {items.description}
      </li>
    </>
  );
}

export default App;
