import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import s from "./Home.module.scss";
import Navbar from "../../Navbar/Navbar";
import Image from "next/image";
import { showAlertWriteToUs } from "../../../utils/Alerts/alerts";
import { motion } from "framer-motion";
import useLocalStorage from "use-local-storage";
import SpyCheckModal from "../../SpyCheckModal/SpyCheckModal";

const Home = ({ myRef }: { myRef: any }) => {
  const [showAlert5Min, setShowAlert5Min] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showSpyCheck, setShowSpyCheck] = useState(false);
  const [passedSpyCheck, setPassedSpyCheck] = useLocalStorage(
    "passedSpyCheck",
    false
  );
  const [didntPass, setDidntPass] = useLocalStorage("didn't Pass", false);

  useEffect(() => {
    if (didntPass) {
      const time = setTimeout(() => {
        setShowSpyCheck(true);
      }, 1000);
      return () => clearTimeout(time);
    }
    if (!passedSpyCheck) {
      const time = setTimeout(() => {
        setShowSpyCheck(true);
      }, 300000);
      return () => clearTimeout(time);
    }
  }, []);

  useEffect(() => {
    //каждые 5 мин новый вопрос после успешного ответа
    if (!showSpyCheck) {
      const time = setTimeout(() => {
        setShowSpyCheck(true);
      }, 300000);
      return () => clearTimeout(time);
    }
  }, [showSpyCheck]);

  return (
    <>
      <Navbar />
      {showSpyCheck && (
        <SpyCheckModal
          setShowSpyCheck={setShowSpyCheck}
          setDidntPass={setDidntPass}
        />
      )}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.25,
        }}
        exit="out"
      >
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
              <Link href="/posts" passHref>
                <div className={s.events_subtitle}>
                  {/* пока заседаний не планируется */}
                  <div className={s.new_event}>!</div>
                  <div className={s.new_event_text}>
                    объявлена дата нового заседания
                  </div>

                  <div className={s.new_event_icon}>
                    <Image
                      src="/images/right_arrow.svg"
                      alt="right_arrow"
                      width="30px"
                      height="17px"
                    />
                  </div>
                </div>
              </Link>
              <div className={s.write_to_us_btn}>
                <p className="">появились вопросы?</p>
                <button onClick={showAlertWriteToUs} className={s.write_button}>
                  <span>напишите нам</span>
                  <Image
                    src="/images/right_arrow.svg"
                    alt="right_arrow"
                    width="30px"
                    height="17px"
                  />
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
                    objectFit="contain"
                  />
                </div>
                <div className={s.back_circle}>
                  <Image
                    src="/images/back_circle.svg"
                    alt="down_circle"
                    width="800px"
                    height="500px"
                    objectFit="contain"
                  />
                </div>
                <div className={s.img}>
                  <Image
                    src="/images/everyone_desktop.png"
                    alt="man"
                    width="800px"
                    height="600px"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
