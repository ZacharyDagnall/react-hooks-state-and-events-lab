import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [cat, setCat]=useState("All")
  function handleSelection(event){
    setCat(event.target.value)
  }
  const filteredItems = cat === "All" ? items : items.filter(item=>item.category === cat) 
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
