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
                  src="/images/starik.jpg"
                  alt="фотка Старика"
                  width="290px"
                  height="320px"
                  objectFit="cover"
                  //   layout="fill"
                />
              </div>
              <div className={s.text}>
                <div className={s.name}>Антон Александрович С.</div>
                <div className={s.position}>Штатный психолог</div>
                <div className={s.description}>
                  Антон Александрович работает у нас уже 16 лет,
                  профессиональный психолог, он вытаскивал нашу команду из
                  трудных времён не один раз.
                </div>
              </div>
            </div>

            <div className={s.teamMember}>
              <div className={s.image}>
                <Image
                  src="/images/dad.jpg"
                  alt="фотка ИВ"
                  width="290px"
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
                  src="/images/dad.jpg"
                  alt="фотка ИВ"
                  width="290px"
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
                  src="/images/starik.jpg"
                  alt="фотка Старика"
                  width="290px"
                  height="320px"
                  objectFit="cover"
                />
              </div>
              <div className={s.text}>
                <div className={s.name}>Антон Александрович С.</div>
                <div className={s.position}>Служба безопасности</div>
                <div className={s.description}>
                  Антон Александрович работает у нас уже 16 лет,
                  профессиональный психолог, он вытаскивал нашу команду из
                  трудных времён не один раз.
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
