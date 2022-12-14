import { combineReducers } from "redux";
// import { BurgerOrderReducer } from "./BurgerOrderReducer.js";
import { QuanLyNguoiDungReducer } from "./QuanLyNguoiDungReducer.js";
const rootReducer = combineReducers({
   // BurgerOrderReducer,
   QuanLyNguoiDungReducer,
});
export default rootReducer;
