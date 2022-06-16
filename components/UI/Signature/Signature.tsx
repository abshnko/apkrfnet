import React from 'react';
import s from './Signature.module.scss';
import { ISignature } from '../../../types';

const Signature: React.FC = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Signature;
