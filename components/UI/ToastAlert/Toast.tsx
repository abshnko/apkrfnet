import React from 'react';
import { IToastCustom } from '../../../types';
import { addNBSP } from '../../../utils/funcs';
import s from './Toast.module.scss';

const Toast = ({ message, button }: IToastCustom) => {
  const _message = addNBSP(message);

  return (
    <div className={s.container}>
      <div className={s.text}>{_message}</div>
      <button className={s.button}>{button}</button>
    </div>
  );
};

export default Toast;
