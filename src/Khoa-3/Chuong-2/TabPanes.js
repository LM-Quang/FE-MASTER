import React from "react";
import SanPham from "./SanPham.js";

export default function TabPanes(props) {
   const renderTabPanes = () => {
      return props.tabPanesData.tabPanes.map((item, index) => {
         if (item.type === "topclothes") {
            return (
               <div className="col-md-3" key={index}>
                  <SanPham thongTinSanPham={item} />
               </div>
            );
         }
         return "";
      });
   };
   return <div className="row">{renderTabPanes()}</div>;
}
