import React, { useState, useContext } from "react";
import { Context } from "../App";
import { useSelector, useDispatch } from "react-redux";

const Good = ({ good }) => {
  const { category, description, image, price, rating, title } = good;

  const { findInCart } = useContext(Context);

  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const [more, setMore] = useState(false);

  return (
    <div className="good column">
      <div
        className="img"
        style={{ background: `url(${image})`, backgroundSize: "cover" }}>
        <h4 className="header">{title}</h4>
      </div>
      <div className="row centered" style={{ justifyContent: "space-between" }}>
        <span className="sub-info-trigger" onClick={() => setMore(!more)}>
          More
        </span>
        {findInCart(good) ? (
          <button onClick={() => dispatch({ type: "REMOVE", payload: good })}>
            Remove from cart
          </button>
        ) : (
          <button onClick={() => dispatch({ type: "ADD", payload: good })}>
            Add to cart
          </button>
        )}
      </div>

      {more && (
        <div className="sub-info">
          <p>Description: {description}</p>
          <div className="divider"></div>
          <span>Raiting: {rating.rate}</span>
        </div>
      )}
      <div>category: [{category}]</div>
      <span className="price">price: {price}$</span>
    </div>
  );
};

export default Good;
