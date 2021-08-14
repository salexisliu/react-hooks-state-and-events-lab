import React, { useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("All")
  
  function filterCate(e){
    
    setCategory(e.target.value)
  
  }

    const foodList = items.filter((item) => {
      if (selectedCategory === "All" ) { 
        return true
      } else {return item.category === selectedCategory}})

  
  return (

    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {(e) => filterCate(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
