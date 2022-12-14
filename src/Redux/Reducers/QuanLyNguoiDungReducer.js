import {
   CHANGE,
   DELETE,
   EDIT,
   SUBMIT,
   UPDATE,
} from "../Types/QuanLyNguoiDungType.js";

const quanLyNguoiDungstate = {
   value: {
      id: "",
      user: "",
      name: "",
      password: "",
      phone: "",
      email: "",
      userType: "",
   },
   error: {
      id: "",
      user: "",
      name: "",
      password: "",
      phone: "",
      email: "",
      userType: "",
   },
   userList: [],
   disabledUpdate: true,
   disabledSubmit: true,
   disabledDelete: false,
};

export const QuanLyNguoiDungReducer = (
   state = quanLyNguoiDungstate,
   action
) => {
   switch (action.type) {
      case SUBMIT: {
         action.user.preventDefault();
         state.value.id = Date.now();
         state.userList = [...state.userList, { ...state.value }];
         // reset values
         let { value } = state;
         for (let key in value) {
            value[key] = "";
         }
         return { ...state };
      }
      case EDIT: {
         state.disabledUpdate = false;
         state.disabledSubmit = true;
         state.disabledDelete = true;

         state.value = { ...action.user };
         return { ...state };
      }
      case UPDATE: {
         let userListUpdate = [...state.userList];
         let index = userListUpdate.findIndex(
            (user) => user.id === state.value.id
         );
         if (index !== -1) {
            state.disabledUpdate = true;
            state.disabledSubmit = false;
            state.disabledDelete = false;

            userListUpdate[index] = { ...state.value };
         }
         state.userList = [...userListUpdate];

         // reset values
         let { value } = state;
         for (let key in value) {
            value[key] = "";
         }
         return { ...state };
      }
      case CHANGE: {
         let { value, type, name } = action.userInfo.target;
         let newValues = { ...state.value, [name]: value };
         let newErrors = { ...state.error };
         let newDisabledSubmit = { ...state.disabledSubmit };
         // Kiểm tra rỗng cho 1 Textfield
         if (value.trim() === "") {
            newErrors[name] = name + " is required !";
         } else {
            newErrors[name] = "";
         }
         // Kiểm tra Email
         if (type === "email") {
            const regexEmail =
               /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!regexEmail.test(value)) {
               newErrors[name] = name + " is invalid !";
            } else {
               newErrors[name] = "";
            }
         }
         // Kiểm tra Phone
         if (name === "phone") {
            const regexPhone = /((84|0[3|5|7|8|9])+([0-9]{8})\b)/g;

            if (!regexPhone.test(value)) {
               newErrors[name] = name + " is invalid !";
            } else {
               newErrors[name] = "";
            }
         }
         // Kiểm tra rỗng cho toàn bộ Textfield để kích hoạt Submit Button
         let valueArray = Object.entries(newValues);
         for (let item of valueArray) {
            if (item[0] !== "id" && item[1] === "") {
               newDisabledSubmit = true;
               break;
            }
            newDisabledSubmit = false;
         }
         return {
            ...state,
            value: newValues,
            error: newErrors,
            disabledSubmit: newDisabledSubmit,
         };
      }
      case DELETE: {
         let userListUpdate = [...state.userList];
         return {
            ...state,
            userList: userListUpdate.filter(
               (user) => user.id !== action.userID
            ),
         };
      }
      default:
         return { ...state };
   }
};
