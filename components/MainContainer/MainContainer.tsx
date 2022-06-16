import React from 'react';
import { motion } from 'framer-motion';
import s from './MainContainer.module.scss';

const MainContainer = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
    >
      <div className={s.container}>{children}</div>
    </motion.div>
  );
};

export default MainContainer;
