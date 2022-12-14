import React, { Component } from "react";
import { Heading } from "../StyledComponents/Heading.js";
import { connect } from "react-redux";
import {
   DeleteAction,
   EditAction,
} from "../../Redux/Actions/QuanLyNguoiDung.js";
class DanhSachNguoiDung extends Component {
   renderDanhSachNguoiDung = () => {
      return this.props.userList.map((user, index) => {
         return (
            <tr key={index}>
               <td>{index + 1}</td>
               <td>{user.user}</td>
               <td>{user.name}</td>
               <td>{user.password}</td>
               <td>{user.phone}</td>
               <td>{user.email}</td>
               <td>{user.type}</td>
               <td>
                  <button
                     className="btn btn-primary"
                     onClick={() => {
                        this.props.dispatch(EditAction(user));
                     }}
                  >
                     Chỉnh sửa
                  </button>
                  {this.props.disabledDelete ? (
                     <button
                        disabled
                        className="btn btn-danger ms-2"
                        onClick={() => {
                           this.props.dispatch(DeleteAction(user.id));
                        }}
                     >
                        Xóa
                     </button>
                  ) : (
                     <button
                        className="btn btn-danger ms-2"
                        onClick={() => {
                           this.props.dispatch(DeleteAction(user.id));
                        }}
                     >
                        Xóa
                     </button>
                  )}
               </td>
            </tr>
         );
      });
   };
   render() {
      return (
         <div className="mt-3">
            <Heading>Danh sách người dùng</Heading>
            <table className="table">
               <thead>
                  <tr>
                     <th>STT</th>
                     <th>Tài khoản</th>
                     <th>Họ tên</th>
                     <th>Mật khẩu</th>
                     <th>Số điện thoại</th>
                     <th>Email</th>
                     <th>Loại người dùng</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>{this.renderDanhSachNguoiDung()}</tbody>
            </table>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      userList: state.QuanLyNguoiDungReducer.userList,
      disabledDelete: state.QuanLyNguoiDungReducer.disabledDelete,
   };
};
export default connect(mapStateToProps)(DanhSachNguoiDung);
