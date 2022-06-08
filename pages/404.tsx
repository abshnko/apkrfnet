import React from "react";
import MainContainer from "../components/MainContainer";
import MainLayout from "../components/MainLayout";
import error from "../public/images/error404.svg";
import s from "../styles/404.module.scss";
import Link from "next/link";
import Image from "next/image";
import arrow from "../public/images/right_arrow.svg";

const Page404 = () => {
  return (
    <MainLayout>
      <MainContainer>
        <div className={s.container}>
          <div className={s.left_side}>
            <div className={s.title}>Такой страницы нет. Вы заблудились. </div>
            <Link href="/">
              <div className={s.button}>
                <span>на главную</span>{" "}
                <Image src={arrow} alt="arrow" width={28} height={28} />
              </div>
            </Link>
          </div>
          <div className={s.right_side}>
            <Image src={error} alt="protectedFile" width={300} height={300} />
          </div>
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default Page404;
