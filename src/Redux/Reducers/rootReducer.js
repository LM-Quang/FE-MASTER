import { combineReducers } from "redux";
import { BurgerOrderReducer } from "./BurgerOrderReducer.js";
const rootReducer = combineReducers({
   BurgerOrderReducer,
});
export default rootReducer;
