import React from "react";
import type { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/Team.module.scss";

const TeamSection: NextComponentType = () => {
  return (
    <>
      <div
        className="min-h-screen md:py-8 py-2 relative"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className={styles.redLine}>
          <div className="title text-3xl md:text-3xl  text-left ml-6 text-white font-light">
            Наша команда
          </div>
        </div>
        <div className={windStyles.wrapper}>
          <div className={styles.team}>
            <div className={styles.teamMember}>
              <div className={styles.image}>
                <Image
                  src="/images/starik.jpg"
                  alt="фотка Старика"
                  //   width="220px"
                  //   height="290px"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.text}>
                <div className={styles.name}>Антон Александрович С.</div>
                <div className={styles.position}>Штатный психолог</div>
                <div className={styles.description}>
                  Антон Александрович работает у нас уже 16 лет,
                  профессиональный психолог, он вытаскивал нашу команду из
                  трудных времён не один раз.
                </div>
              </div>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.image}>
                <Image
                  src="/images/dad.jpg"
                  alt="фотка ИВ"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.text}>
                <div className={styles.name}>Дмитрий Борисович А.</div>
                <div className={styles.position}>Идейный вдохновитель</div>
                <div className={styles.description}>
                  Генерирует все более и более оторванные от реальности и
                  заставляющие беспокоиться идеи.
                </div>
              </div>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.image}>
                <Image
                  src="/images/dad.jpg"
                  alt="фотка ИВ"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.text}>
                <div className={styles.name}>Дмитрий Борисович А.</div>
                <div className={styles.position}>Идейный вдохновитель</div>
                <div className={styles.description}>
                  Генерирует все более и более оторванные от реальности и
                  заставляющие беспокоиться идеи.
                </div>
              </div>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.image}>
                <Image
                  src="/images/starik.jpg"
                  alt="фотка Старика"
                  //   width="220px"
                  //   height="290px"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.text}>
                <div className={styles.name}>Антон Александрович С.</div>
                <div className={styles.position}>Служба безопасности</div>
                <div className={styles.description}>
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

const windStyles = {
  wrapper: "wrapper w-11/12  m-auto",
};
