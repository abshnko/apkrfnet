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
        className={`${styles.classicsBG} min-h-screen overflow-hidden w-screen md:pt-14 pt-5 relative`}
      >
        {/* <div className={styles.blueLine}></div> */}
        {/* <div className={styles.classicsRedLine}></div> */}
        <div className={styles.yellowTitleBox}>
          <div className="title text-right mr-5">
            Классики Уральской <br /> процессуальной школы
          </div>
        </div>
        <div className={windStyles.wrapper}>
          <div className="main">
            <div
              //   className="selected grid md:grid-cols-[1fr_2fr] grid-cols-[1fr] md:mx-12 mx-2 bg-white justify-center rounded-sm shadow-md py-0 md:py-8 md:px-12 px-8 grid-rows-[1fr_2fr] md:grid-rows-[1fr] gap-4"
              className={styles.selected}
            >
              <div
                style={{
                  height: "150px",
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <div
                  className="image"
                  style={{
                    width: "40%",
                    height: "100%",
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
                <div
                  style={{
                    textAlign: "right",
                    fontSize: "18px",
                    marginRight: "20px",
                  }}
                >
                  {selectedClassic.name}
                </div>
              </div>
              <div className="text">
                <p>{selectedClassic.bio} </p>
                <button className="text-sky-500 self-end mt-4">
                  <Link href={`/classics/${selectedClassic.link}`}>
                    подробнее
                  </Link>
                </button>
              </div>
            </div>
            <div className={` ${styles.allMen}`}>
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
                    <>
                      <div className={styles.manImg}>
                        <Image
                          src={man.image}
                          alt="classic img"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className={styles.manSurname}>{wholeName[0]}</div>
                      <div
                        className={styles.manName}
                      >{`${wholeName[1]} ${wholeName[2]}`}</div>
                    </>
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
