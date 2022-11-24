import React, { Component } from "react";
import style from "./style.module.css";
import key from "./DataKey.json";
export default class MayTinhBoTui extends Component {
  //   key = [
  //     "7",
  //     "8",
  //     "9",
  //     "/",
  //     "CE",
  //     "4",
  //     "5",
  //     "6",
  //     "*",
  //     "C",
  //     "1",
  //     "2",
  //     "3",
  //     "-",
  //     "=",
  //     "0",
  //     ".",
  //     "+",
  //   ];
  state = {
    result: "0",
  };
  // isClicked để xác định xem các phép cộng, trừ, nhân, chia có được nhấn hay chưa
  isClicked = false;
  isFirstDigitOfSecondNum = false;
  operand = "";
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
  calculate = (value) => {
    switch (value) {
      case "C":
      case "CE":
        this.isClicked = false;
        this.firstNumber = 0;
        this.secondNumber = 0;
        let clearState = {
          result: "0",
        };
        this.setState(clearState);
        break;
      case "0":
        if (!this.isClicked) {
          if (this.state.result !== "0") {
            let newResult = this.state.result + value;
            let newState = {
              result: newResult,
            };
            this.setState(newState);
          }
        } else {
          this.isFirstDigitOfSecondNum = false;
          let newState = {
            result: "0",
          };
          this.setState(newState);
        }
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (!this.isClicked) {
          if (this.state.result === "0") {
            let newState = {
              result: value,
            };
            this.setState(newState);
          } else {
            let newResult = this.state.result + value;
            let newState = {
              result: Number(newResult),
            };
            this.setState(newState);
          }
        } else {
          if (this.isFirstDigitOfSecondNum) {
            this.isFirstDigitOfSecondNum = false;
            let newState = {
              result: value,
            };
            this.setState(newState);
          } else {
            let newResult = this.state.result + value;
            let newState = {
              result: Number(newResult),
            };
            this.setState(newState);
          }
        }
        break;
      case ".":
        //   if (!this.isClicked) {
        let newResultFloatPoint = this.state.result + value;
        let newFloatPointState = {
          result: newResultFloatPoint,
        };
        this.setState(newFloatPointState);
        //   }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        this.isClicked = true;
        this.isFirstDigitOfSecondNum = true;
        this.firstNumber = Number(this.state.result);
        this.operand = value;
        break;
      case "=":
        this.secondNumber = Number(this.state.result);
        let newResult;
        switch (this.operand) {
          case "+":
            newResult = this.firstNumber + this.secondNumber;
            let newStateAdd = {
              result: newResult,
            };
            this.setState(newStateAdd);
            break;
          case "-":
            newResult = this.firstNumber - this.secondNumber;
            let newStateSubtract = {
              result: newResult,
            };
            this.setState(newStateSubtract);
            break;
          case "*":
            newResult = this.firstNumber * this.secondNumber;
            let newStateMultiply = {
              result: newResult,
            };
            this.setState(newStateMultiply);
            break;
          case "/":
            newResult = this.firstNumber / this.secondNumber;
            newResult = Math.round(newResult * 100) / 100;
            let newStateDivide = {
              result: newResult,
            };
            this.setState(newStateDivide);
            break;
          default:
            alert("Invalid Operand");
        }
        break;
      default:
        alert("Invalid Input");
    }
  };
  render() {
    return (
      <div>
        <h2 className="text-danger mt-2">
          BÀI TẬP CUỐI KHOÁ - ỨNG DỤNG MÁY TÍNH
        </h2>
        <div
          className="container bg-light border border-info p-3"
          style={{ width: "300px" }}
        >
          <p className="text-end border border-secondary border-2 bg-white p-1">
            <b>{this.state.result}</b>
          </p>
          <div className={style.gridContainer}>
            {key.map((item, index) => {
              if (item === "=") {
                return (
                  <button
                    key={index}
                    className={`${style.gridItem} ${style.gridItemEqual}`}
                    onClick={() => {
                      this.calculate(item);
                    }}
                  >
                    <b>{item}</b>
                  </button>
                );
              } else if (item === "0") {
                return (
                  <button
                    key={index}
                    className={`${style.gridItem} ${style.gridItemZero}`}
                    onClick={() => {
                      this.calculate(item);
                    }}
                  >
                    <b>{item}</b>
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  className={style.gridItem}
                  onClick={() => {
                    this.calculate(item);
                  }}
                >
                  <b>{item}</b>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
