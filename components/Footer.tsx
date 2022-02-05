import React from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className="links">
          <div className={styles.link}>
            <Link href="/">заседания</Link>
          </div>
          <div className={styles.link}>
            <Link href="/">для спонсоров</Link>
          </div>
          <div className={styles.link}>
            <Link href="/">вакансии</Link>
          </div>
          <div className={styles.link}>
            <Link href="/">форум</Link>
          </div>
          <div className={styles.link}>
            <Link href="/">опросы</Link>
          </div>
          <div className={styles.link}>
            <Link href="/">форум</Link>
          </div>
        </div>
        {/* <div className={styles.mistake}></div> */}
        <div className={styles.center}>
          <div className="">
            <CopyrightIcon /> 2022. Все права защищены
          </div>
        </div>
        <div className={styles.rights}>
          <div className="text leading-4">
            <div className="text-right">заметили ошибку?</div>
            <div className="mb-4">Выделите текст и нажмите ctrl+Enter</div>
          </div>
          <div className="text-right mb-3 leading-4">
            <CheckCircleOutlineIcon /> сайт еще не внесен
            <br /> в список иностранных агентов
          </div>
          {/* <div className="">
            <CopyrightIcon /> 2022. Все права защищены
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
