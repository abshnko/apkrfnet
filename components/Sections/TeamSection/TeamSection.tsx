import React from 'react';
import type { NextComponentType } from 'next';
import Image from 'next/image';
import s from './Team.module.scss';

const TeamSection: NextComponentType = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.title}>
          Наша <span className={s.accent}>команда</span>
        </div>
        <div className={s.wrapper}>
          <div className={s.team}>
            <div className={s.teamMember}>
              <div className={s.image}>
                <div className={s.image_dad}>
                  <Image
                    src="/images/team/dad.png"
                    alt="ideator"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={s.text}>
                <div className={s.name}>Дмитрий Борисович А.</div>
                <div className={s.position}>Идейный вдохновитель</div>
                <div className={s.description}>
                  Генерирует все более оторванные от реальности теории про
                  зачет.
                </div>
              </div>
            </div>
            <div className={s.teamMember}>
              <div className={s.image}>
                <div className={s.image_starik}>
                  <Image
                    src="/images/team/starik.png"
                    alt="therapist"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={s.text}>
                <div className={s.name}>Антон Александрович С.</div>
                <div className={s.position}>Штатный психолог</div>
                <div className={s.description}>
                  Работает с нами уже 16 лет. За эти годы он не раз разбирал и
                  собирал мебель.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
