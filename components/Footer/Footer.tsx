import React from 'react';
import s from './Footer.module.scss';
import Link from 'next/link';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CopyrightIcon from '@mui/icons-material/Copyright';

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
          2021 - 2022. АПКРФ.НЕТ
        </div>
      </div>
    </div>
  );
};

export default Footer;
