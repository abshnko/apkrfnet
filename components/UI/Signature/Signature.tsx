import React from 'react';
import s from './Signature.module.scss';

const Signature: React.FC = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Signature;
