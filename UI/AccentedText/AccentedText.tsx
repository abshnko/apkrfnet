import React from "react";
import s from "./AccentedText.module.scss";

const AccentedText: React.FC = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default AccentedText;
