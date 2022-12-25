import React from "react";
import { useSelector } from "react-redux";
export default function NguoiMau() {
   const danhSachSanPhamDuocChon = useSelector(
      (state) => state.DressingRoomReducer.danhSachSanPhamDuocChon
   );
   const renderSanPhamDuocChon = () => {
      return danhSachSanPhamDuocChon.map((sanPham, index) => {
         return (
            <div
               key={index}
               className={sanPham.type}
               style={{
                  backgroundImage: `url(${sanPham.imgSrc_png})`,
               }}
            />
         );
      });
   };
   return (
      <div className="contain">
         <div
            className="body"
            style={{ backgroundImage: "url(./images/allbody/bodynew.png)" }}
         />
         <div
            className="model"
            style={{ backgroundImage: "url(./images/model/1000new.png)" }}
         />
         <div
            className="bikini_bra"
            style={{ backgroundImage: "url(./images/allbody/bikini_bra.png)" }}
         ></div>
         <div
            className="bikini_pants"
            style={{
               backgroundImage: "url(./images/allbody/bikini_pants.png)",
            }}
         ></div>
         <div
            className="feet_high_left"
            style={{
               backgroundImage: "url(./images/allbody/feet_high_left.png)",
            }}
         ></div>
         <div
            className="feet_high_right"
            style={{
               backgroundImage: "url(./images/allbody/feet_high_right.png)",
            }}
         ></div>
         {renderSanPhamDuocChon()}
      </div>
   );
}
