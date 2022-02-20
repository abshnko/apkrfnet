import type { NextComponentType } from "next";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArchiveIcon from "@mui/icons-material/Archive";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import Alert from "../components/Alerts/Alert";
import { alerts } from "../data/alerts";
import Navbar from "../components/Navbar";
import CaptchaCheck from "../components/Alerts/CaptchaCheck";
import Image from "next/image";

const Home = ({ myRef }: { myRef: any }) => {
  const [showAlertWriteToUs, setShowAlertWriteToUs] = useState(false);
  const [showAlert5Min, setShowAlert5Min] = useState(false);
  const [showAlertEN, setshowAlertEN] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [alertDisplayed, setAlertDisplayed] = useState(false);
  const [passedSpyCheck, setPassedSpyCheck] = useState(false);

  useEffect(() => {
    if (alertDisplayed) {
      setScrollPosition(document.documentElement.scrollTop);
      document.body.style.top = `-${document.documentElement.scrollTop}px`;
      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";

      return;
    }
    document.body.style.position = "static";
    //??? scrolls back to top on alert close
    document.body.style.top = `${scrollPosition}px`;
  }, [alertDisplayed]);

  useEffect(() => {
    showAlertWriteToUs || showAlert5Min || showAlertEN
      ? setAlertDisplayed(true)
      : setAlertDisplayed(false);

    !showAlert5Min && setPassedSpyCheck(true);
  }, [showAlertWriteToUs, showAlert5Min, showAlertEN]);

  if (!passedSpyCheck) {
    setTimeout(() => {
      setShowAlert5Min(true);
    }, 300000);
  }

  return (
    <>
      {/* <div
        className={`${styles.all} all h-screen md:relative md:grid md:grid-rows-[min-content_auto] block static`}
      >
        <Navbar setshowAlertEN={setshowAlertEN} />
        <div
          className={`${styles.redLine} hidden md:block md:absolute w-full h-[110px] left-0] `}
        ></div>
        <div className={`${styles.myContainer} md:relative md:w-11/12 w-full`}>
          <div className={`${styles.blueSquare}  md:absolute`}>
            <div
              className={`${styles.titleContainer} md:absolute static w-full h-2/4`}
            >
              <div className={styles.title}>
                учебно-методическая
                <br /> группа
              </div>
              <div className={styles.subtitle}>по арбитражному процессу</div>
            </div>
          </div>
          <div className={`${styles.blueRect} md:absolute static`}>
            <div className={styles.eventsContainer}>
              <div className={styles.eventsTitle}>предстоящие заседания</div>
              <div className={styles.eventsSubtitle}>
                пока заседаний
                <br /> не планируется
              </div>
            </div>
          </div>

          <div
            style={{
              width: "290px",
              height: "63%",
              position: "absolute",
              bottom: 0,
              left: "15%",
              zIndex: "30",
            }}
            className="hidden lg:block"
          >
            <Image
              src="/images/single_man.png"
              alt="man"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
          <div
            className="w-[500px] md:w-[700px] md:h-1/2 h-1/3"
            style={{
              //   width: "700px",
              //   height: "50%",
              position: "absolute",
              bottom: 0,
              right: "5%",
              zIndex: "30",
            }}
            // className="bg-slate-600"
          >
            <Image
              src="/images/group.png"
              alt="man"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
          <div className="writeToUsButton absolute bottom-10 ">
            <p className="mb-2 text-gray-500">появились вопросы?</p>
            <button
              onClick={() => setShowAlertWriteToUs(true)}
              className={styles.writeButton}
            >
              написать
            </button>
          </div>
        </div>
      </div> */}
      <div
        className={styles.allMobile}
        // className={`${styles.all} all h-screen md:relative md:grid md:grid-rows-[min-content_auto] block static`}
      >
        <Navbar setshowAlertEN={setshowAlertEN} />
        {/* <div
          className={`${styles.redLine} hidden md:block md:absolute w-full h-[110px] left-0] `}
        ></div> */}
        <div className={styles.titleContainer}>
          <div className={styles.title}>учебно-методическая группа</div>
          <div className={styles.subtitle}>по арбитражному процессу</div>
        </div>
        <div className={styles.blueRect}>
          <div className={styles.eventsContainer}>
            <div className={styles.eventsTitle}>предстоящие заседания</div>
            <div className={styles.eventsSubtitle}>
              пока заседаний не планируется
            </div>
          </div>
          <div
            className="writetoUs"
            style={{ textAlign: "right", marginTop: "10px" }}
          >
            <p className="" style={{ color: "white" }}>
              появились вопросы?
            </p>
            <button
              onClick={() => setShowAlertWriteToUs(true)}
              className={styles.writeButton}
              style={{ color: "white", marginTop: "10px", zIndex: "90" }}
            >
              написать
            </button>
          </div>
        </div>
        <div className={styles.redLineMobile}></div>

        {/* IMAGE */}
        <div
          style={{
            width: "290px",
            height: "63%",
            position: "absolute",
            bottom: 0,
            left: "15%",
            zIndex: "30",
          }}
          className="hidden lg:block"
        >
          <Image
            src="/images/single_man.png"
            alt="man"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div
          //   className="w-[400px] md:w-[700px] md:h-1/2 h-1/3"
          style={{
            width: "370px",
            height: "230px",
            position: "absolute",
            bottom: 0,
            right: 0,
            zIndex: "10",
          }}
          // className="bg-slate-600"
        >
          <Image
            src="/images/group.png"
            alt="man"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
      </div>
      {showAlertWriteToUs && (
        <Alert
          title={alerts[0].title}
          text={alerts[0].text}
          setState={setShowAlertWriteToUs}
        />
      )}
      {showAlert5Min && (
        <Alert
          title={alerts[1].title}
          text={alerts[1].text}
          setState={setShowAlert5Min}
          extra={<CaptchaCheck setState={setShowAlert5Min} />}
        />
      )}
      {showAlertEN && (
        <Alert
          title={alerts[2].title}
          text={alerts[2].text}
          setState={setshowAlertEN}
        />
      )}
    </>
  );
};

export default Home;

const windStyles = {
  wrapper: "wrapper w-11/12 md:w-11/12 lg:w-4/5 m-auto xl:w-3/5 bg-blue-200",
  menu: "menu flex justify-between font-bold",
  link: "hover:text-lime-600",
};
