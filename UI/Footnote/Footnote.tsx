import React from "react";
import s from "./Footnote.module.scss";

const Footnote: React.FC = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Footnote;
