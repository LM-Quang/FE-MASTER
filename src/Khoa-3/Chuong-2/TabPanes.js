import React from "react";
import SanPham from "./SanPham.js";
import { useSelector } from "react-redux";
export default function TabPanes(props) {
   const danhSachSanPhamRender = useSelector(
      (state) => state.DressingRoomReducer.danhSachSanPhamRender
   );
   const renderTabPanes = () => {
      return danhSachSanPhamRender.map((sanPham, index) => {
         return (
            <div className="col-md-3" key={index}>
               <SanPham thongTinSanPham={sanPham} />
            </div>
         );
      });
   };
   return <div className="row">{renderTabPanes()}</div>;
}
