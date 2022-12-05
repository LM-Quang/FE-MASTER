import React, { Component } from "react";
import { connect } from "react-redux";
import {
   giamThucAnAction,
   tangThucAnAction,
} from "../Redux/Actions/BurgerOrderAction.js";
import { SALAD, CHEESE, BEEF } from "../Redux/Reducers/BurgerOrderReducer.js";
class Order extends Component {
   render() {
      return (
         <div className="py-2 px-5">
            <h3 className="text-success">Chọn thức ăn</h3>
            <table className="table text-start">
               <thead>
                  <tr>
                     <th colSpan={2}>Thức ăn</th>
                     <th>Đơn Giá</th>
                     <th>Thành Tiền</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Salad</td>
                     <td>
                        <button
                           onClick={() => {
                              this.props.tangThucAn("salad");
                           }}
                           className="btn btn-success me-2"
                        >
                           +
                        </button>
                        {this.props.burger.salad}
                        <button
                           onClick={() => {
                              this.props.giamThucAn("salad");
                           }}
                           className="btn btn-danger ms-2"
                        >
                           -
                        </button>
                     </td>
                     <td>{SALAD}</td>
                     <td>{this.props.menu.salad}</td>
                  </tr>
                  <tr>
                     <td>Cheese</td>
                     <td>
                        <button
                           onClick={() => {
                              this.props.tangThucAn("cheese");
                           }}
                           className="btn btn-success me-2"
                        >
                           +
                        </button>
                        {this.props.burger.cheese}
                        <button
                           onClick={() => {
                              this.props.giamThucAn("cheese");
                           }}
                           className="btn btn-danger ms-2"
                        >
                           -
                        </button>
                     </td>
                     <td>{CHEESE}</td>
                     <td>{this.props.menu.cheese}</td>
                  </tr>
                  <tr>
                     <td>Beef</td>
                     <td>
                        <button
                           onClick={() => {
                              this.props.tangThucAn("beef");
                           }}
                           className="btn btn-success me-2"
                        >
                           +
                        </button>
                        {this.props.burger.beef}
                        <button
                           onClick={() => {
                              this.props.giamThucAn("beef");
                           }}
                           className="btn btn-danger ms-2"
                        >
                           -
                        </button>
                     </td>
                     <td>{BEEF}</td>
                     <td>{this.props.menu.beef}</td>
                  </tr>
               </tbody>
               <tfoot style={{ border: "transparent" }}>
                  <tr className="fw-bold">
                     <td colSpan={2}></td>
                     <td>Tổng tiền</td>
                     <td>{this.props.total}</td>
                  </tr>
               </tfoot>
            </table>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      menu: state.BurgerOrderReducer.menu,
      total: state.BurgerOrderReducer.total,
      burger: state.BurgerOrderReducer.burger,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      tangThucAn: (thanhPhan) => {
         dispatch(tangThucAnAction(thanhPhan));
      },
      giamThucAn: (thanhPhan) => {
         dispatch(giamThucAnAction(thanhPhan));
      },
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Order);
