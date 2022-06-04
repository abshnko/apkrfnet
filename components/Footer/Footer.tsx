import React from "react";
import s from "./Footer.module.scss";
import Link from "next/link";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.infos}>
        <div className={s.agent}>
          <div className={s.icon}>
            <CheckCircleOutlineIcon />
          </div>
          <div>
            сайт еще <span className={s.accent}>не внесен </span> в список
            иностранных агентов
          </div>
        </div>
        <div className={s.copyright}>
          <div className={s.icon}>
            <CopyrightIcon />
          </div>
          2021 - 2022. Все права защищены
        </div>
      </div>

      {/* <div className="links">
          <div className={s.link}>
            <Link href="/">заседания</Link>
          </div>
          <div className={s.link}>
            <Link href="/">для спонсоров</Link>
          </div>
          <div className={s.link}>
            <Link href="/">вакансии</Link>
          </div>
          <div className={s.link}>
            <Link href="/">форум</Link>
          </div>
          <div className={s.link}>
            <Link href="/">опросы</Link>
          </div>
          <div className={s.link}>
            <Link href="/">форум</Link>
          </div>
        </div> */}
      {/* <div className={s.mistake}></div> */}
      {/* <div className={s.center}>
          <div className="">
            <CopyrightIcon /> 2022. Все права защищены
          </div>
          <div>
            <div className="">заметили ошибку?</div>
            <div>Выделите текст и нажмите ctrl+Enter</div>
            <div>
              <CheckCircleOutlineIcon /> сайт еще не внесен
              <br /> в список иностранных агентов
            </div>
          </div>
        </div>
        <div className={s.rights}> */}
      {/* <div className="text leading-4">
            <div className="">заметили ошибку?</div>
            <div className="mb-4">Выделите текст и нажмите ctrl+Enter</div>
          </div>
          <div className=" mb-3 leading-4">
            <CheckCircleOutlineIcon /> сайт еще не внесен
            <br /> в список иностранных агентов
          </div> */}
      {/* <div className="">
            <CopyrightIcon /> 2022. Все права защищены
          </div> */}
      {/* </div> */}
    </div>
  );
};

export default Footer;
