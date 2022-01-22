import React, { useCallback, useState } from "react";
import type { NextComponentType } from "next";
import styles from "../styles/Home.module.scss";
import { classics } from "../data/classics";
import Image from "next/image";

const ClassicsSection: NextComponentType = () => {
  const [selectedClassic, setSelectedClassic] = useState(classics[0]);
  const chooseClassic = useCallback(
    (id) => {
      setSelectedClassic(classics.filter((man) => man.id === id)[0]);
    },
    [selectedClassic]
  );

  return (
    <>
      <div className={`${styles.classics} h-screen`}>
        <div className={windStyles.wrapper}>
          <div className="title text-5xl  text-center mb-12">
            Классики Уральской процессуальной школы
          </div>
          <div className="main">
            <div className={styles.selected}>
              <div className="image">
                <Image
                  src={selectedClassic.image}
                  alt="classic img"
                  height="300px"
                  width="230px"
                />
              </div>
              <div className="text">
                <div className="title text-3xl mb-4">
                  {selectedClassic.name}
                </div>
                <p>{selectedClassic.bio}</p>
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
