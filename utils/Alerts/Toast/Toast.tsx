import React from "react";
import { IToastCustom } from "../../../types";
import s from "./Toast.module.scss";

const Toast = ({ message, button }: IToastCustom) => {
  return (
    <div className={s.container}>
      <div className={s.text}>{message}</div>
      <button className={s.button}>{button}</button>
    </div>
  );
};

export default Toast;
