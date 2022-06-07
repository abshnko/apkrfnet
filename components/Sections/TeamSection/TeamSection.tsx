import React from "react";
import type { NextComponentType } from "next";
import Image from "next/image";
import s from "./Team.module.scss";

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
                <Image
                  src="/images/team/dad.png"
                  alt="фотка ИВ"
                  width="250px"
                  height="340px"
                  objectFit="cover"
                />
              </div>
              <div className={s.text}>
                <div className={s.name}>Дмитрий Борисович А.</div>
                <div className={s.position}>Идейный вдохновитель</div>
                <div className={s.description}>
                  Генерирует все более и более оторванные от реальности и
                  заставляющие беспокоиться идеи.
                </div>
              </div>
            </div>
            <div className={s.teamMember}>
              <div className={s.image}>
                <Image
                  src="/images/team/starik.png"
                  alt="фотка ИВ"
                  width="280px"
                  height="340px"
                  objectFit="cover"
                />
              </div>
              <div className={s.text}>
                <div className={s.name}>Антон Александрович С.</div>
                <div className={s.position}>Штатный психолог</div>
                <div className={s.description}>
                  Антон Александрович работает с нами уже 16 лет. За эти годы он
                  не раз помогал нам пережить темные времена.
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
