import React from "react";
import AccentedText from "../../UI/AccentedText/AccentedText";
import MainContainer from "../MainContainer";
import s from "./Gallery.module.scss";
import arrow from "../../public/images/right_arrow.svg";
import Image from "next/image";
import protectedFile from "../../public/images/file_protected.svg";
import Link from "next/link";

const Gallery = () => {
  return (
    <MainContainer>
      <div className={s.container}>
        <div className={s.left_side}>
          <div className={s.title}>
            К сожалению, ни один из участников не согласился на публикацию
            фотографий.
          </div>
          <Link href="/">
            <div className={s.button}>
              <span>на главную</span>{" "}
              <Image src={arrow} alt="arrow" width={28} height={28} />
            </div>
          </Link>
        </div>
        <div className={s.right_side}>
          <Image
            src={protectedFile}
            alt="protectedFile"
            width={300}
            height={300}
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default Gallery;
