import { TANG_THUC_AN, GIAM_THUC_AN } from "../Types/BurgerOrderType.js";
export const tangThucAnAction = (thanhPhan) => {
   return {
      type: TANG_THUC_AN,
      thanhPhan,
   };
};
export const giamThucAnAction = (thanhPhan) => {
   return {
      type: GIAM_THUC_AN,
      thanhPhan,
   };
};
