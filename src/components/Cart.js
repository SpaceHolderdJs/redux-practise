import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="column cart">
      <h1>Cart</h1>
      {cart.map((e) => (
        <div className="row small-good">
          <div
            className="img"
            style={{
              background: `url(${e.image})`,
              sbackgroundSize: "cover",
            }}></div>
          <h4>{e.title}</h4>
          <span>{e.price.value}</span>
          <button onClick={() => dispatch({ type: "REMOVE", payload: e })}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
