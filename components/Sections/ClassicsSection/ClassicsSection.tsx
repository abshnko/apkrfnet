import React, { useCallback, useState, useEffect, useRef } from 'react';
import type { NextComponentType } from 'next';
import Link from 'next/link';
import s from './Classics.module.scss';
import { classics } from '../../../data/classics';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { decrementId, incrementId } from '../../../utils/funcs';
import useLocalStorage from 'use-local-storage';

const ClassicsSection: NextComponentType = () => {
  const [selectedClassic, setSelectedClassic] = useState(classics[0]);
  const selectedRef = useRef<null | HTMLDivElement>(null);
  const [classicId, setClassicId] = useLocalStorage('classicId', '0');

  useEffect(() => {
    setSelectedClassic(classics.find((classic) => classic.id === classicId)!);
  }, [classicId]);

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
                  onClick={() => decrementId(classicId, setClassicId, '5')}
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
                exit={{ opacity: 0, x: [0, -100] }}
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
                  onClick={() => incrementId(classicId, setClassicId, '5')}
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
                        <div className={s.more_info_arrow}>
                          <Image
                            src="/images/right_arrow.svg"
                            alt="right_arrow"
                            layout="fill"
                          />
                        </div>
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
