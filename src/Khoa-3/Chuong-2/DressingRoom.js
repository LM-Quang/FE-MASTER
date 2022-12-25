import React from "react";
import "./style.css";
import Header from "./Header.js";
import DanhSachTrangPhuc from "./DanhSachTrangPhuc.js";
import NguoiMau from "./NguoiMau.js";

export default function DressingRoom() {
   return (
      <div className="container-fluid">
         <div className="row">
            <div className="col-sm-12">
               <Header />
               <hr />
            </div>
         </div>
         <div className="row">
            <div className="col-md-8">
               <DanhSachTrangPhuc />
            </div>
            <div className="col-md-4">
               <NguoiMau />
            </div>
         </div>
      </div>
   );
}
