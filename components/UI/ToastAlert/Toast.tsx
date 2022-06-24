import React from 'react';
import { IToastCustom } from '../../../types';
import s from './Toast.module.scss';

const Toast = ({ message, button }: IToastCustom) => {
  const _message = message.split('\\nbsp').map((m) => {
    return m + '\xa0';
  });

  return (
    <div className={s.container}>
      <div className={s.text}>{_message}</div>
      <button className={s.button}>{button}</button>
    </div>
  );
};

export default Toast;
