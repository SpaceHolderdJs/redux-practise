import React, { useState, useEffect } from "react";
import Good from "./Good";
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  const goods = useSelector((store) => store.goods);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const getALLItem = (value) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        dispatch({ type: "CREATE", payload: json });
      });
  };

  useEffect(() => {
    getALLItem();
  }, []);

  return (
    <div className="main">
      <h1 style={{ margin: "0" }}>Goods</h1>
      {goods && (
        <div className="column centered search-wrapper">
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <span>Search items...</span>
        </div>
      )}

      <div className="row goods-wrapper">
        {value.length < 0
          ? goods && goods.map((e, i) => <Good key={i} good={e} />)
          : goods &&
            goods
              .filter((e) => e.title.includes(value))
              .map((e, i) => <Good key={i} good={e} />)}
      </div>
    </div>
  );
};

export default Main;
