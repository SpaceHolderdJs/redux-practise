const goodsReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...action.payload];
    case "DELETE":
      return [];
    default:
      return state;
  }
};

export default goodsReducer;
