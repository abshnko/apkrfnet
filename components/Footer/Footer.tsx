import React from 'react';
import s from './Footer.module.scss';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Image from 'next/image';
import { showAlertFoundMistake } from '../../utils/Alerts/alerts';

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
          2020 - 2022. АПКРФ.НЕТ. <br></br>Все права на сайт принадлежат кому
          надо
        </div>
      </div>
      <div className={s.right_side}>
        <div>нашли ошибку?</div>
        <div className={s.notify_us} onClick={showAlertFoundMistake}>
          <span>сообщите нам</span>
          <div className={s.img_container}>
            <Image src="/images/right_arrow.svg" alt="arrow" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
