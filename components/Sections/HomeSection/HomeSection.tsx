import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import s from './Home.module.scss';
import Image from 'next/image';
import { showAlertWriteToUs } from '../../../utils/Alerts/alerts';
import { motion } from 'framer-motion';
import MicrophoneModal from '../../MicrophoneModal/MicrophoneModal';
import { fixBackground } from '../../../utils/funcs';

const HomeSection = () => {
  const [showMicro, setShowMicro] = useState(false);

  useEffect(() => {
    fixBackground(showMicro);
  }, [showMicro]);
  return (
    <>
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
                  <div className={s.write_image}>
                    <Image
                      src="/images/right_arrow.svg"
                      alt="right_arrow"
                      layout="fill"
                    />
                  </div>
                </button>
                <button
                  onClick={() => setShowMicro(true)}
                  className={s.write_button}
                >
                  <span>расскажите нам</span>
                  <div className={s.write_image}>
                    <Image
                      src="/images/right_arrow.svg"
                      alt="right_arrow"
                      layout="fill"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className={s.right_side}>
              <div className={s.men_img_container}>
                <div className={s.back_circle}>
                  <Image
                    src="/images/back_circle.svg"
                    alt="back_circle"
                    objectFit="contain"
                    layout="fill"
                  />
                </div>
                <div className={s.img}>
                  <Image
                    src="/images/everyone_desktop.png"
                    alt="man"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className={s.down_circle}>
                  <Image
                    src="/images/down_circle.svg"
                    alt="down_circle"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showMicro && <MicrophoneModal setShowMicro={setShowMicro} />}
      </motion.div>
    </>
  );
};

export default HomeSection;
