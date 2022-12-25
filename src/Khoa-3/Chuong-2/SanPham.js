import React from "react";
import { useDispatch } from "react-redux";
export default function SanPham(props) {
   const dispatch = useDispatch();
   const { thongTinSanPham } = props;
   return (
      <div className="card text-center">
         <img src={thongTinSanPham.imgSrc_jpg} alt="dress" />
         <h4>
            <b>{thongTinSanPham.name}</b>
         </h4>
         <button
            onClick={() => {
               dispatch({
                  type: "CHON_SAN_PHAM",
                  thongTinSanPham,
               });
            }}
         >
            Thử đồ
         </button>
      </div>
   );
}
