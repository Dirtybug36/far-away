import { useState } from "react";
import "./index.css";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";
import Header from "./Header";

function App() {
  //lifting in parent so that it can be accessible for the children
  const [items, setItems] = useState([]);

  //create a function so that the children can use setitems
  function handleItems(item) {
    setItems((prevItem) => [...prevItem, item]);
  }

  //only filters when the input id is not equal to previous id
  function handleDeleteItems(id) {
    setItems((prevItem) => prevItem.filter((item) => item.id !== id));
  }

  //**determine if the item is packed or not in controlled way

  function handlerToggleItem(id) {
    setItems((items) =>
      items.map((prevItem) =>
        prevItem.id === id
          ? { ...prevItem, packed: !prevItem.packed }
          : prevItem
      )
    );
  }
  //clear all function
  function handlerClear() {
    if (!items.length) return;
    const confirm = window.confirm("Are you sure you want to clear the list");
    if (confirm) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleItems} />
      <List
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handlerToggleItem}
        onClearItems={handlerClear}
      />
      <Footer items={items} />
    </div>
  );
}
export default App;
