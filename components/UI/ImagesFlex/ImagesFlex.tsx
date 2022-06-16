import React from "react";
import s from "./ImagesFlex.module.scss";

interface IImageFlex {
  n: number;
}

const ImagesFlex = ({ n }: IImageFlex) => {
  return (
    <div className={s.img_container}>
      {[...Array(n)].map((n) => {
        return <div key={n} className={s.img}></div>;
      })}
    </div>
  );
};

export default ImagesFlex;
