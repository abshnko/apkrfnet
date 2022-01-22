import React, { useCallback, useState, useEffect } from "react";
import type { NextComponentType } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { classics } from "../data/classics";
import Image from "next/image";

const ClassicsSection: NextComponentType = () => {
  const [selectedClassic, setSelectedClassic] = useState(classics[0]);
  const [shortBio, setShortBio] = useState(true);

  //   useEffect(() => {
  //     setInterval(() => {
  //       const newClassic = classics.filter((man) => {
  //         if (selectedClassic.id === 5) {
  //           return man.id === 0;
  //         }
  //         return man.id === selectedClassic.id + 1;
  //       });
  //       setSelectedClassic(newClassic[0]);
  //     }, 3000);
  //   }, []);

  const chooseClassic = useCallback(
    (id) => {
      setSelectedClassic(classics.filter((man) => man.id === id)[0]);
      setShortBio(true);
    },
    [selectedClassic]
  );

  const expand = useCallback(() => {
    setShortBio(false);
  }, [shortBio]);

  return (
    <>
      <div className={`${styles.classics} min-h-screen`}>
        <div className={windStyles.wrapper}>
          <div className="title text-5xl  text-center mb-12">
            Классики Уральской процессуальной школы
          </div>
          <div className="main">
            <div className={styles.selected}>
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
                <div className="title text-3xl mb-4">
                  {selectedClassic.name}
                </div>
                <p>{selectedClassic.bio} </p>
                <button className="text-sky-500 self-end  mt-4">
                  <Link href={`/classics/${selectedClassic.link}`}>
                    подробнее
                  </Link>
                </button>
              </div>
            </div>
            <div className={styles.all}>
              {classics.map((man) => {
                const wholeName = man.name.split(" ");
                return (
                  <button
                    key={man.id}
                    className={`${
                      styles.man
                    } font-bold hover:scale-110 transition-all ${
                      selectedClassic.id === man.id && styles.active
                    }`}
                    onClick={() => chooseClassic(man.id)}
                  >
                    <div className="image ">
                      <Image
                        src={man.image}
                        alt="classic img"
                        height="194px"
                        width="146px"
                      />
                    </div>
                    <div className="last-name mt-2">{wholeName[0]}</div>
                    <div className="name mb-2">{`${wholeName[1]} ${wholeName[2]}`}</div>
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
