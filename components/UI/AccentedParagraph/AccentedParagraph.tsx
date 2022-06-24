import React from 'react';
import s from './AccentedParagraph.module.scss';

const AccentedBlock: React.FC = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default AccentedBlock;
