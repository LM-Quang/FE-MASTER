import React, { Component } from "react";
import burger from "./burger.module.css";
import { connect } from "react-redux";
class Burger extends Component {
   renderSalad = () => {
      let htmlContent = [];
      for (let i = 0; i < this.props.burger.salad; i++) {
         let saladHTML = <div className={burger.salad}></div>;
         htmlContent.push(saladHTML);
      }
      return htmlContent.map((salad, index) => {
         return <div key={index}>{salad}</div>;
      });
   };
   renderCheese = () => {
      let htmlContent = [];
      for (let i = 0; i < this.props.burger.cheese; i++) {
         let cheeseHTML = <div className={burger.cheese}></div>;
         htmlContent.push(cheeseHTML);
      }
      return htmlContent.map((cheese, index) => {
         return <div key={index}>{cheese}</div>;
      });
   };
   renderBeef = () => {
      let htmlContent = [];
      for (let i = 0; i < this.props.burger.beef; i++) {
         let beefHTML = <div className={burger.beef}></div>;
         htmlContent.push(beefHTML);
      }
      return htmlContent.map((beef, index) => {
         return <div key={index}>{beef}</div>;
      });
   };
   render() {
      return (
         <div className="p-2">
            <h3 className="text-danger">Bánh Burger của bạn</h3>
            <div className={burger.breadTop}></div>
            {this.renderSalad()}
            {this.renderCheese()}
            {this.renderBeef()}
            <div className={burger.breadBottom}></div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      burger: state.BurgerOrderReducer.burger,
   };
};
export default connect(mapStateToProps)(Burger);
