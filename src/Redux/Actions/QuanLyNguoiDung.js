import {
   SUBMIT,
   EDIT,
   UPDATE,
   DELETE,
   CHANGE,
} from "../Types/QuanLyNguoiDungType.js";
export const SubmitAction = (user) => ({
   type: SUBMIT,
   user,
});
export const EditAction = (user) => ({
   type: EDIT,
   user,
});
export const UpdateAction = () => ({
   type: UPDATE,
});
export const DeleteAction = (userID) => ({
   type: DELETE,
   userID,
});
export const ChangeAction = (userInfo) => ({
   type: CHANGE,
   userInfo,
});
