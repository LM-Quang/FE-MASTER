import React from "react";
import NavPills from "./NavPills.js";
import TabPanes from "./TabPanes.js";
export default function DanhSachTrangPhuc() {
   return (
      <div>
         <NavPills />
         <div className="well">
            <TabPanes />
         </div>
      </div>
   );
}
