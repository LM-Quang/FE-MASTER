import React from "react";
import Data from "../../Data/Data.json";
import NavPills from "./NavPills.js";
import TabPanes from "./TabPanes.js";
export default function DanhSachTrangPhuc() {
   return (
      <div>
         <NavPills navPills={Data.navPills} />
         <div className="well">
            <TabPanes tabPanesData={Data} />
         </div>
      </div>
   );
}
