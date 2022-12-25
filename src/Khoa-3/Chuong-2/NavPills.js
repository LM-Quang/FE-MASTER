/* eslint-disable no-useless-concat */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function NavPills(props) {
   const active = useSelector(
      (state) => state.DressingRoomReducer.activeButton
   );
   const danhSachTab = useSelector(
      (state) => state.DressingRoomReducer.danhSachTab
   );
   const dispatch = useDispatch();
   const renderNavPills = () => {
      return danhSachTab.map((item, index) => {
         return (
            <li className="nav-item" key={index}>
               <button
                  className={`nav-link ${active[index]}`}
                  onClick={() => {
                     dispatch({
                        type: "CHUYEN_TAB",
                        tabType: item.type,
                        index,
                     });
                  }}
               >
                  {item.showName}
               </button>
            </li>
         );
      });
   };
   return <ul className="nav nav-pills">{renderNavPills()}</ul>;
}
