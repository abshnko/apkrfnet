import React from 'react';
import s from './RedactedText.module.scss';
import { IRedactedText } from '../../../types';

const RedactedText = ({ theme }: IRedactedText) => {
  return (
    <span className={`${s.redacted} ${theme === 'white' ? s.white : ''}`}>
      .
    </span>
  );
};

export default RedactedText;
