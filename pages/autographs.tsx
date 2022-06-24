import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import useLocalStorage from 'use-local-storage';
import MainContainer from '../components/MainContainer/MainContainer';
import MainLayout from '../components/MainLayout';
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
import s from '../styles/autographs.module.scss';

const Autographs = () => {
  const [show, setShow] = useLocalStorage('open autograph id', '-1');
  const handleClick = (id: string) => {
    if (id === show) {
      setShow('-1');
    } else {
      setShow(id);
    }
  };
  return (
    <MainLayout title="Автографы | АПКРФ.НЕТ">
      <MainContainer>
        <Breadcrumbs crumbs={['Дорогие автографы']} links={['/autographs']} />
        <div className={s.list}>
          <div className={s.list_item} onClick={() => handleClick('0')}>
            <span>Е. А. Крашенинников</span>
            <div className={`${s.icon} ${show === '0' && s.active_icon}`}>
              <Image
                src="/images/right_chevron.svg"
                alt="autograph"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <AnimatePresence>
            {show === '0' && (
              <motion.div
                key={show}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [-60, 0] }}
                exit={{ opacity: 0, y: [0, -50] }}
                transition={{
                  duration: 0.35,
                }}
              >
                <div className={s.image_container}>
                  <div className={s.image}>
                    <Image
                      src="/images/autographs/krash/autograph_1.jpg"
                      alt="autograph"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={s.image}>
                    <Image
                      src="/images/autographs/krash/autograph_2.jpg"
                      alt="autograph"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={s.image}>
                    <Image
                      src="/images/autographs/krash/autograph_3.jpg"
                      alt="autograph"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default Autographs;
