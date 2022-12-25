import { combineReducers } from "redux";
// import { BurgerOrderReducer } from "./BurgerOrderReducer.js";
// import { QuanLyNguoiDungReducer } from "./QuanLyNguoiDungReducer.js";
import { DressingRoomReducer } from "./DressingRoomReducer.js";
const rootReducer = combineReducers({
   // BurgerOrderReducer,
   // QuanLyNguoiDungReducer,
   DressingRoomReducer,
});
export default rootReducer;
