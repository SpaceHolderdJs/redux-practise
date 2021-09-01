import goodsReducer from "./goods";
import cartReducer from "./cart";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  goods: goodsReducer,
  cart: cartReducer,
});

export default allReducers;
