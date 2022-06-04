import React, { useCallback, useState, useEffect, useRef } from "react";
import type { NextComponentType } from "next";
import Link from "next/link";
import s from "./Classics.module.scss";
import { classics } from "../../../data/classics";
import Image from "next/image";
import right_chevron from "../../../public/images/right_chevron.svg";

const ClassicsSection: NextComponentType = () => {
  const [selectedClassic, setSelectedClassic] = useState(classics[0]);
  const selectedRef = useRef<null | HTMLDivElement>(null);
  const [classicId, setClassicId] = useState(0);

  useEffect(() => {
    setSelectedClassic(classics.find((classic) => classic.id === classicId)!);
  }, [classicId]);

  const incrementId = () => {
    if (classicId === 5) {
      setClassicId(0);
    } else {
      setClassicId((id) => id + 1);
    }
  };
  const decrementId = () => {
    if (classicId === 0) {
      setClassicId(5);
    } else {
      setClassicId((id) => id - 1);
    }
  };

  return (
    <>
      <div ref={selectedRef} className={s.container}>
        <div className={s.title}>
          <span>Классики</span> Уральской процессуальной школы
        </div>

        <div className={s.content}>
          <div className={s.left_side}>
            <Image
              onClick={decrementId}
              className={s.left_chevron}
              src="/images/right_chevron.svg"
              alt="right_chevron"
              width="50px"
              height="30px"
            />
            <div className={s.main_img}>
              <Image
                src={selectedClassic.image}
                alt="classic img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <Image
              onClick={incrementId}
              className={s.right_chevron}
              src="/images/right_chevron.svg"
              alt="right_chevron"
              width="50px"
              height="30px"
            />
          </div>
          <div className={s.right_side}>
            <div className={s.card}>
              <div className={s.name}>
                <Link href={`/classics/${selectedClassic.link}`}>
                  {selectedClassic.name}
                </Link>
              </div>
              <p className={s.bio}>{selectedClassic.shortBio} </p>
              <div className={s.more_info}>
                <Link href={`/classics/${selectedClassic.link}`}>
                  Подробнее
                </Link>
              </div>
            </div>
          </div>

          {/* <div className={s.allMen}>
            {classics.map((man) => {
              const wholeName = man.name.split(" ");
              return (
                <button
                  key={man.id}
                  className={`${s.man}  ${
                    selectedClassic.id === man.id && s.activeClassic
                  }`}
                  onClick={() => {
                    chooseClassic(man.id);
                    selectedRef?.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <>
                    <div className={s.manImg}>
                      <Image
                        src={man.image}
                        alt="classic img"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className={s.manSurname}>{wholeName[0]}</div>
                    <div
                      className={s.manName}
                    >{`${wholeName[1]} ${wholeName[2]}`}</div>
                  </>
                </button>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ClassicsSection;
