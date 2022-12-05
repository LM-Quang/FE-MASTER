import React, { Component } from "react";
import Burger from "./Burger.js";
import Order from "./Order.js";

class OrderBurger extends Component {
   render() {
      return (
         <div className="container mt-3">
            <h1 className="text-success">Bài Tập Order Burger</h1>
            <div className="row mt-3">
               <div className="col-6 me-3">
                  <Burger />
               </div>
               <div className="col-5">
                  <Order />
               </div>
            </div>
         </div>
      );
   }
}

export default OrderBurger;
