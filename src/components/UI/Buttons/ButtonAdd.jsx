import React from "react";
import { useCart } from "../../../Context/CartContext.jsx";

function ButtonAdd({ product }) {
  const { dispatch } = useCart();

  const addToCart = (event) => {
    event.preventDefault();
    if (product) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    } else {
      console.error("Product is not defined.");
    }
  }

  return (
    <form onSubmit={addToCart}>
      <button type="submit">
        Agregar +
      </button>
    </form>
  );
}

export default ButtonAdd;