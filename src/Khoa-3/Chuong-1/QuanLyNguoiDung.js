import React, { Component } from "react";
import DanhSachNguoiDung from "./DanhSachNguoiDung.js";
import FormDangKi from "./FormDangKi.js";

export default class QuanLyNguoiDung extends Component {
   render() {
      return (
         <div>
            <FormDangKi />
            <DanhSachNguoiDung />
         </div>
      );
   }
}
