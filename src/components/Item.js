import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("")
  function addToCart(){
    setInCart(cart=> !cart)
  }
  return (
    <li className={inCart? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{inCart? "Remove from":"Add to"} Cart</button>
    </li>
  );
}

export default Item;
