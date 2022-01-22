import React from "react";
import type { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const TeamSection: NextComponentType = () => {
  return (
    <>
      <div className="team h-screen ">
        <div className={windStyles.wrapper}>
          <div className="title text-5xl pt-8 text-center ">Наша команда</div>
          <div className={styles.team}>
            <div className={styles.member}>
              <Image
                src="/images/starik.jpg"
                alt="~фотка Старика~"
                width="220px"
                height="290px"
              />
              <div className={styles.name}>Старик</div>
              <div className={styles.position}>Штатный психолог</div>
              <div className={styles.description}>
                Старик работает у нас уже 16 лет, профессиональный психолог, он
                вытаскивал нашу команду из трудных времён не один раз.
              </div>
            </div>
            <div className={styles.member}>
              <Image
                src="/images/dad.jpg"
                alt="~фотка ИВ~"
                width="220px"
                height="290px"
              />
              <div className={styles.name}>Академик</div>
              <div className={styles.position}>Идейный вдохновитель</div>
              <div className={styles.description}>
                Генерирует все более и более оторванные от реальности и
                заставляющие беспокоиться идеи.
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
  wrapper: "wrapper w-11/12 md:w-11/12 lg:w-4/5 m-auto xl:w-3/5",
};
