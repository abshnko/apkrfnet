import React from "react";
import s from "./Signature.module.scss";
import { ISignature } from "../../types";

const Signature = ({ position, signature, name }: ISignature) => {
  return (
    <div className={s.container}>
      <div className={s.position}>{position}</div>
      <div>{signature}</div>
      <div>{name}</div>
    </div>
  );
};

export default Signature;
