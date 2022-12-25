import React from "react";

export default function SanPham(props) {
   return (
      <div className="card text-center">
         <img src={props.thongTinSanPham.imgSrc_jpg} alt="dress" />
         <h4>
            <b>{props.thongTinSanPham.name}</b>
         </h4>
         <button>Thử đồ</button>
      </div>
   );
}
