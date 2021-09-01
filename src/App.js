import "./App.css";
import Main from "./components/Main";
import { createContext, useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart";

export const Context = createContext();

function App() {
  const cart = useSelector((store) => store.cart);

  const findInCart = (item) => {
    return cart.find((e) => e.id === item.id);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Context.Provider value={{ findInCart }}>
      <div className="app row">
        <Main />
        <Cart cart={cart} />
      </div>
    </Context.Provider>
  );
}

export default App;
