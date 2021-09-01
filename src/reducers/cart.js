const cartReducer = (
  state = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  action
) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "REMOVE":
      return state.filter((e) => e.id !== action.payload.id);

    default:
      return state;
  }
};

export default cartReducer;
