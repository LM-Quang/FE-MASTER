const DressingRoomState = {
   activeButton: ["active", "", "", "", "", "", ""],
};
export const DressingRoomReducer = (state = DressingRoomState, action) => {
   switch (action.type) {
      case "CHUYEN_TAB": {
         let newActiveButton = [...state.activeButton];
         for (let index in newActiveButton) {
            if (Number(index) === action.index) {
               newActiveButton[index] = "active";
            } else {
               newActiveButton[index] = "";
            }
         }
         return { ...state, activeButton: newActiveButton };
      }
      default:
         return { ...state };
   }
};
