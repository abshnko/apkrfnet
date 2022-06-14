import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";
import MainContainer from "../../components/MainContainer";
import s from "./Classic.module.scss";
import { classics } from "../../data/classics";
import Link from "next/link";
import Image from "next/image";
import AccentedText from "../../UI/AccentedText/AccentedText";
import { IClassic } from "../../types";
import AccentedBlock from "../../UI/AccentedParagraph/AccentedParagraph";

const Classic = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [classic, setClassic] = useState<IClassic>();
  const { id } = router.query;

  useEffect(() => {
    setClassic(classics.find((a) => a.id === id!));
  }, [id]);

  useEffect(() => {
    if (classic !== undefined) {
      classic?.fullBio.split("\\n").map((p) => {
        if (p.includes("\\a")) {
          console.log(p.split("\\a"));
        }
        return <li key={classic.id}>{p}</li>;
      });
      setLoading(false);
    }
    console.log(classic);
  }, [classic]);

  return (
    <MainLayout title="Классики | АПКРФ НЕТ">
      <MainContainer>
        <div className={s.container}>
          {loading ? (
            "Loading"
          ) : (
            <>
              <div className={s.left_side}>
                <div className={s.title}>
                  <AccentedText>{classic?.name}</AccentedText>
                </div>
                {/* <div className={s.date}>{classic?.dateOfBirth}</div> */}
                <div className={s.text}>
                  {classic?.fullBio.split("\n").map((p) => {
                    if (p.includes("\r")) {
                      return (
                        <AccentedBlock>
                          <p>{p.split("\r")}</p>
                        </AccentedBlock>
                      );
                      //   p.split("\\a").map((a) => {
                      //     return (
                      //       <AccentedBlock key={classic.id}>{a}</AccentedBlock>
                      //     );
                      //   });
                    }
                    return <p key={classic.id}>{p}</p>;
                  })}
                </div>
              </div>
              <div className={s.right_side}>
                <div className={s.main_img}>
                  <Image
                    src={classic!.image}
                    alt="classic img"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default Classic;
