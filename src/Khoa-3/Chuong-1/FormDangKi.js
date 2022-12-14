import React, { Component } from "react";
import { Heading } from "../StyledComponents/Heading.js";
import { TextField } from "../StyledComponents/TextField.js";
import { connect } from "react-redux";
import {
   ChangeAction,
   SubmitAction,
   UpdateAction,
} from "../../Redux/Actions/QuanLyNguoiDung.js";
class FormDangKi extends Component {
   render() {
      return (
         <div>
            <Heading>Form đăng ký</Heading>
            <form
               onSubmit={(event) => {
                  this.props.dispatch(SubmitAction(event));
               }}
            >
               <div className="container-fluid text-start">
                  <div className="row">
                     <div className="col-6">
                        <div className="form-group">
                           <TextField
                              label={"Tài khoản"}
                              error={this.props.error.user}
                              value={this.props.value.user}
                              type="text"
                              name="user"
                              onChange={(event) => {
                                 this.props.dispatch(ChangeAction(event));
                              }}
                           />
                        </div>
                        <div className="form-group">
                           <TextField
                              label={"Mật khẩu"}
                              error={this.props.error.password}
                              value={this.props.value.password}
                              type="password"
                              name="password"
                              onChange={(event) => {
                                 this.props.dispatch(ChangeAction(event));
                              }}
                           />
                        </div>
                        <div className="form-group">
                           <TextField
                              label={"Email"}
                              error={this.props.error.email}
                              value={this.props.value.email}
                              type="email"
                              name="email"
                              onChange={(event) => {
                                 this.props.dispatch(ChangeAction(event));
                              }}
                           />
                        </div>
                        <div className="mt-1">
                           {this.props.disabledSubmit ? (
                              <button
                                 disabled
                                 type="submit"
                                 className="btn btn-success"
                              >
                                 Đăng ký
                              </button>
                           ) : (
                              <button type="submit" className="btn btn-success">
                                 Đăng ký
                              </button>
                           )}
                           {this.props.disabledUpdate ? (
                              <button
                                 disabled
                                 type="button"
                                 className="btn btn-primary ms-2"
                              >
                                 Cập nhật
                              </button>
                           ) : (
                              <button
                                 type="button"
                                 className="btn btn-primary ms-2"
                                 onClick={() => {
                                    this.props.dispatch(UpdateAction());
                                 }}
                              >
                                 Cập nhật
                              </button>
                           )}
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="form-group">
                           <TextField
                              label={"Họ tên"}
                              error={this.props.error.name}
                              value={this.props.value.name}
                              type="name"
                              name="name"
                              onChange={(event) => {
                                 this.props.dispatch(ChangeAction(event));
                              }}
                           />
                        </div>
                        <div className="form-group">
                           <TextField
                              label={"Số điện thoại"}
                              error={this.props.error.phone}
                              value={this.props.value.phone}
                              type="name"
                              name="phone"
                              onChange={(event) => {
                                 this.props.dispatch(ChangeAction(event));
                              }}
                           />
                        </div>
                        <div className="form-group">
                           <label>Mã loại người dùng</label>
                           <select
                              value={this.props.value.userType}
                              name="userType"
                              className="form-select"
                              onChange={(event) => {
                                 this.props.dispatch(ChangeAction(event));
                              }}
                           >
                              <option value={""}>
                                 Chọn loại người dùng . . .
                              </option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                           </select>
                           <span className="text text-danger">
                              {this.props.error.userType}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      value: state.QuanLyNguoiDungReducer.value,
      error: state.QuanLyNguoiDungReducer.error,
      userList: state.QuanLyNguoiDungReducer.userList,
      disabledUpdate: state.QuanLyNguoiDungReducer.disabledUpdate,
      disabledSubmit: state.QuanLyNguoiDungReducer.disabledSubmit,
   };
};
export default connect(mapStateToProps)(FormDangKi);
