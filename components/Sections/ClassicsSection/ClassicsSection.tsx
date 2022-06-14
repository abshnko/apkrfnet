import React, { useCallback, useState, useEffect, useRef } from 'react';
import type { NextComponentType } from 'next';
import Link from 'next/link';
import s from './Classics.module.scss';
import { classics } from '../../../data/classics';
import Image from 'next/image';
import right_chevron from '../../../public/images/right_chevron.svg';
import { motion, AnimatePresence } from 'framer-motion';
import img from '../../../public/images/man_1.png';

const ClassicsSection: NextComponentType = () => {
  const [selectedClassic, setSelectedClassic] = useState(classics[0]);
  const selectedRef = useRef<null | HTMLDivElement>(null);
  const [classicId, setClassicId] = useState('0');

  useEffect(() => {
    setSelectedClassic(classics.find((classic) => classic.id === classicId)!);
  }, [classicId]);

  const incrementId = () => {
    if (classicId === '5') {
      setClassicId('0');
    } else {
      setClassicId((id) => {
        const newId = parseInt(id) + 1;
        return newId.toString();
      });
    }
  };
  const decrementId = () => {
    if (classicId === '0') {
      setClassicId('5');
    } else {
      setClassicId((id) => {
        const newId = parseInt(id) - 1;
        return newId.toString();
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        <div ref={selectedRef} className={s.container}>
          <div className={s.title}>
            <span>Классики</span> уральской процессуальной школы
          </div>

          <div className={s.content}>
            <div className={s.left_side}>
              <div className={s.arrow}>
                <Image
                  onClick={decrementId}
                  className={s.left_chevron}
                  src="/images/right_chevron.svg"
                  alt="left_chevron"
                  layout="fill"
                />
              </div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.55,
                }}
                key={selectedClassic.image}
              >
                <div className={s.main_img}>
                  <Image
                    src={selectedClassic.image}
                    alt="classic img"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </motion.div>
              <div className={s.arrow}>
                <Image
                  onClick={incrementId}
                  className={s.right_chevron}
                  src="/images/right_chevron.svg"
                  alt="right_chevron"
                  layout="fill"
                />
              </div>
            </div>
            <div className={s.right_side}>
              <div className={s.card}>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.55,
                  }}
                  key={selectedClassic.name}
                >
                  <div className={s.name}>
                    <Link href={`/classics/${selectedClassic.id}`}>
                      {selectedClassic.name}
                    </Link>
                  </div>
                  <p className={s.bio}>
                    {selectedClassic.shortBio.split('\n').map((p, i) => {
                      return <p key={i}>{p}</p>;
                    })}
                  </p>
                  <div className={s.more_info}>
                    <Link href={`/classics/${selectedClassic.id}`} passHref>
                      <div className={s.button}>
                        <span> Подробнее</span>
                        <Image
                          src="/images/right_arrow.svg"
                          alt="right_arrow"
                          width="30px"
                          height="15px"
                        />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default ClassicsSection;
