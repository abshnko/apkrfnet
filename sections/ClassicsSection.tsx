import React, { useCallback, useState, useEffect, useRef } from "react";
import type { NextComponentType } from "next";
import Link from "next/link";
import styles from "../styles/Classics.module.scss";
import { classics } from "../data/classics";
import Image from "next/image";

const ClassicsSection: NextComponentType = () => {
  const [selectedClassic, setSelectedClassic] = useState(classics[0]);
  const [shortBio, setShortBio] = useState(true);
  const selectedRef = useRef<null | HTMLDivElement>(null);

  const chooseClassic = useCallback((id) => {
    setSelectedClassic(classics.filter((man) => man.id === id)[0]);
    setShortBio(true);
  }, []);

  return (
    <>
      <div
        ref={selectedRef}
        className={`${styles.classicsBG} min-h-screen md:pt-14 pt-5 relative`}
      >
        <div className={styles.blueLine}></div>
        <div className={styles.classicsRedLine}></div>
        <div className={styles.yellowTitleBox}>
          <div className="title text-xl text-right mr-5">
            Классики Уральской <br /> процессуальной школы
          </div>
        </div>
        <div className={windStyles.wrapper}>
          <div className="main">
            <div
              //   className="selected grid md:grid-cols-[1fr_2fr] grid-cols-[1fr] md:mx-12 mx-2 bg-white justify-center rounded-sm shadow-md py-0 md:py-8 md:px-12 px-8 grid-rows-[1fr_2fr] md:grid-rows-[1fr] gap-4"
              className={styles.selected}
            >
              <div className="flex h-full items-center justify-center">
                <div
                  className="image"
                  style={{
                    width: "100%",
                    height: "70%",
                    position: "relative",
                    maxWidth: "200px",
                  }}
                >
                  <Image
                    src={selectedClassic.image}
                    alt="classic img"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="text">
                <div className="title md:text-3xl text-xl mb-4 mt-12">
                  {selectedClassic.name}
                </div>
                <p>{selectedClassic.bio} </p>
                <button className="text-sky-500 self-end mt-4">
                  <Link href={`/classics/${selectedClassic.link}`}>
                    подробнее
                  </Link>
                </button>
              </div>
            </div>
            <div
              className={`grid grid-cols-2 gap-12 md:grid-cols-6 mx-auto md:mt-12 mt-6 pb-10 ${styles.allMen}`}
            >
              {classics.map((man) => {
                const wholeName = man.name.split(" ");
                return (
                  <button
                    key={man.id}
                    className={`${
                      styles.man
                    } font-bold hover:scale-110 transition-all ${
                      selectedClassic.id === man.id && styles.activeClassic
                    }`}
                    onClick={() => {
                      chooseClassic(man.id);
                      selectedRef?.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    <div className={styles.manImg}>
                      <Image
                        src={man.image}
                        alt="classic img"
                        // height="194px"
                        // width="146px"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="last-name md:mt-2 leading-tight text-sm md:text-lg mt-0">
                      {wholeName[0]}
                    </div>
                    <div className=" name mb-2 text-sm leading-tight">{`${wholeName[1]} ${wholeName[2]}`}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassicsSection;

const windStyles = {
  wrapper: "wrapper w-11/12 md:w-11/12 lg:w-10/12 m-auto xl:w-8/12 ",
};
