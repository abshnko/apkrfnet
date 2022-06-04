import type { NextComponentType } from "next";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./Home.module.scss";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArchiveIcon from "@mui/icons-material/Archive";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import Alert from "../../Alerts/Alert";
import { alerts } from "../../../data/alerts";
import Navbar from "../../Navbar/Navbar";
import CaptchaCheck from "../../Alerts/CaptchaCheck";
import Image from "next/image";
import Toast from "../../../utils/Alerts/Toast/Toast";
import toastStyle from "../../../utils/Alerts/Toast/Toast.module.scss";
import { showAlertWriteToUs } from "../../../utils/Alerts/alerts";
import { IToast } from "../../../types";

const Home = ({ myRef }: { myRef: any }) => {
  const [showAlert5Min, setShowAlert5Min] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [alertDisplayed, setAlertDisplayed] = useState(false);
  const [passedSpyCheck, setPassedSpyCheck] = useState(false);

  //!needed
  //   if (!passedSpyCheck) {
  //     setTimeout(() => {
  //       setShowAlert5Min(true);
  //     }, 300000);
  //   }

  return (
    <>
      <ToastContainer
        autoClose={15000}
        closeButton={false}
        className={toastStyle.toast_container}
        toastClassName={toastStyle.toast_wrapper}
        newestOnTop
        limit={2}
        hideProgressBar
      />
      <Navbar />
      <div className={s.container}>
        <div className={s.titleContainer}>
          <div className={s.title}>Учебно-методическая группа</div>
          <div className={s.subtitle}>по арбитражному процессу</div>
        </div>
        <div className={s.content}>
          <div className={s.left_side}>
            <div className={s.events_title}>
              предстоящие <span>заседания</span> группы
            </div>
            <div className={s.events_subtitle}>
              пока заседаний не планируется
            </div>
            <div className={s.write_to_us_btn}>
              <p className="">появились вопросы?</p>
              <button onClick={showAlertWriteToUs} className={s.write_button}>
                <span>напишите нам</span>
                <Image
                  src="/images/right_arrow.svg"
                  alt="right_arrow"
                  width="30px"
                  height="17px"
                ></Image>
              </button>
            </div>
          </div>
          <div className={s.right_side}>
            <div className={s.men_img_container}>
              <div className={s.down_circle}>
                <Image
                  src="/images/down_circle.svg"
                  alt="down_circle"
                  width="800px"
                  height="100px"
                  layout="intrinsic"
                  objectFit="contain"
                />
              </div>
              <div className={s.back_circle}>
                <Image
                  src="/images/back_circle.svg"
                  alt="down_circle"
                  width="800px"
                  height="500px"
                  layout="intrinsic"
                  objectFit="contain"
                />
              </div>
              <div className={s.img}>
                <Image
                  src="/images/everyone_desktop.png"
                  alt="man"
                  width="800px"
                  height="600px"
                  layout="intrinsic"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "none",
        }}
      >
        <Image
          src="/images/single_man.png"
          alt="man"
          layout="fill"
          objectFit="contain"
        ></Image>
      </div>

      {showAlert5Min && (
        <Alert
          title={alerts[1].title}
          text={alerts[1].text}
          setState={setShowAlert5Min}
          extra={<CaptchaCheck setState={setShowAlert5Min} />}
        />
      )}
      {/* {showAlertEN && (
        <Alert
          title={alerts[2].title}
          text={alerts[2].text}
          setState={setshowAlertEN}
        />
      )} */}
    </>
  );
};

export default Home;
