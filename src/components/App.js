import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isOn, setOn] = useState(false)

  function toggleDarkMode() {
    setOn(!isOn)
    console.log(isOn)
  }

  // this data will be passed down to the ShoppingList as a prop
  // console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button> </header>
     
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
