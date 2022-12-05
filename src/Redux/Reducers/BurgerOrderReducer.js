import {
   TANG_THUC_AN,
   GIAM_THUC_AN,
} from "../../Redux/Types/BurgerOrderType.js";

export const SALAD = 10;
export const CHEESE = 20;
export const BEEF = 55;

const burgerState = {
   burger: { salad: 1, cheese: 1, beef: 1 },
   menu: { salad: SALAD, cheese: CHEESE, beef: BEEF },
   total: 85,
};
export const BurgerOrderReducer = (state = burgerState, action) => {
   switch (action.type) {
      case TANG_THUC_AN: {
         let menuUpdate = { ...state.menu };
         let burgerUpdate = { ...state.burger };
         let totalUpdate = { ...state.total };
         switch (action.thanhPhan) {
            case "salad":
               menuUpdate.salad += SALAD;
               burgerUpdate.salad += 1;

               break;
            case "cheese":
               menuUpdate.cheese += CHEESE;
               burgerUpdate.cheese += 1;
               break;
            case "beef":
               menuUpdate.beef += BEEF;
               burgerUpdate.beef += 1;
               break;
            default:
               break;
         }
         totalUpdate = menuUpdate.salad + menuUpdate.cheese + menuUpdate.beef;
         state.menu = menuUpdate;
         state.burger = burgerUpdate;
         state.total = totalUpdate;
         return { ...state };
      }
      case GIAM_THUC_AN: {
         let menuUpdate = { ...state.menu };
         let burgerUpdate = { ...state.burger };
         let totalUpdate = { ...state.total };
         switch (action.thanhPhan) {
            case "salad":
               if (state.menu.salad > SALAD) {
                  menuUpdate.salad -= SALAD;
                  burgerUpdate.salad -= 1;
               } else {
                  alert("Nên có ít nhất 1 miếng salad");
               }
               break;
            case "cheese":
               if (state.menu.cheese > CHEESE) {
                  menuUpdate.cheese -= CHEESE;
                  burgerUpdate.cheese -= 1;
               } else {
                  alert("Nên có ít nhất 1 miếng cheese");
               }
               break;
            case "beef":
               if (state.menu.beef > BEEF) {
                  menuUpdate.beef -= BEEF;
                  burgerUpdate.beef -= 1;
               } else {
                  alert("Nên có ít nhất 1 miếng beef");
               }
               break;
            default:
               break;
         }
         totalUpdate = menuUpdate.salad + menuUpdate.cheese + menuUpdate.beef;
         state.menu = menuUpdate;
         state.burger = burgerUpdate;
         state.total = totalUpdate;
         return { ...state };
      }
      default:
         return { ...state };
   }
};
