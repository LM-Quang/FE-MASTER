import React from "react";
import style from "./style.module.css";
export default function MayTinhBoTui() {
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
          <b>0</b>
        </p>
        <div className={style.gridContainer}>
          <div className={style.gridItem}>
            <b>7</b>
          </div>
          <div className={style.gridItem}>
            <b>8</b>
          </div>
          <div className={style.gridItem}>
            <b>9</b>
          </div>
          <div className={style.gridItem}>
            <b>/</b>
          </div>
          <div className={style.gridItem}>
            <b>CE</b>
          </div>
          <div className={style.gridItem}>
            <b>4</b>
          </div>
          <div className={style.gridItem}>
            <b>5</b>
          </div>
          <div className={style.gridItem}>
            <b>6</b>
          </div>
          <div className={style.gridItem}>
            <b>*</b>
          </div>
          <div className={style.gridItem}>
            <b>C</b>
          </div>
          <div className={style.gridItem}>
            <b>1</b>
          </div>
          <div className={style.gridItem}>
            <b>2</b>
          </div>
          <div className={style.gridItem}>
            <b>3</b>
          </div>
          <div className={style.gridItem}>
            <b>-</b>
          </div>
          <div className={`${style.gridItemEqual} ${style.gridItem}`}>
            <b>=</b>
          </div>
          <div className={`${style.gridItemZero} ${style.gridItem}`}>
            <b>0</b>
          </div>
          <div className={style.gridItem}>
            <b>.</b>
          </div>
          <div className={style.gridItem}>
            <b>+</b>
          </div>
        </div>
      </div>
    </div>
  );
}
