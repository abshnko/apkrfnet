import React, { useCallback, useState, useEffect, useRef } from "react";
import type { NextComponentType } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
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
      <div className={`min-h-screen md:pt-12 pt-5 bg-light-purple`}>
        <div className={windStyles.wrapper}>
          <div className="title text-2xl md:text-5xl  text-center md:mb-12 mb-5">
            Классики Уральской процессуальной школы
          </div>
          <div className="main">
            <div
              ref={selectedRef}
              className="selected grid md:grid-cols-[1fr_2fr] grid-cols-[1fr] md:mx-12 mx-2 bg-white justify-center rounded-sm shadow-md py-0 md:py-8 md:px-12 px-8 grid-rows-[1fr_2fr] md:grid-rows-[1fr] gap-4"
            >
              <div
                className="image"
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <Image
                  src={selectedClassic.image}
                  alt="classic img"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="text">
                <div className="title md:text-3xl text-xl mb-4">
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
            <div className="grid grid-cols-2 gap-4 md:grid-cols-6 mx-auto md:mt-12 mt-6 pb-10">
              {classics.map((man) => {
                const wholeName = man.name.split(" ");
                return (
                  <button
                    key={man.id}
                    className={`${
                      styles.man
                    } font-bold hover:scale-110 hover:text-purple-700 transition-all ${
                      selectedClassic.id === man.id && styles.activeClassic
                    }`}
                    onClick={() => {
                      chooseClassic(man.id);
                      selectedRef?.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    <div className="image ">
                      <Image
                        src={man.image}
                        alt="classic img"
                        height="194px"
                        width="146px"
                      />
                    </div>
                    <div className="last-name md:mt-2 leading-tight text-sm md:text-lg mt-0">
                      {wholeName[0]}
                    </div>
                    <div className="name mb-2 text-sm leading-tight">{`${wholeName[1]} ${wholeName[2]}`}</div>
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
  wrapper: "wrapper w-11/12 md:w-11/12 lg:w-4/5 m-auto xl:w-3/5",
};
