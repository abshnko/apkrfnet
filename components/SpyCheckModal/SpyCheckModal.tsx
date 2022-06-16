import React, { useEffect, useState } from 'react';
import s from './SpyCheckModal.module.scss';
import { spyQuestions } from '../../data/spyQuestions';
import Footnote from '../UI/Footnote/Footnote';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const SpyCheckModal = ({ setShowSpyCheck, setDidntPass }: any) => {
  const [id, setId] = useState(randomIntFromInterval(0, 4));
  const [question, setQuestion] = useState(
    spyQuestions.find((q) => q.id === id)
  );
  const [chosenAnswer, setChosenAnswer] = useState<number>();
  const [passed, setPassed] = useState(false);
  const [failed, setFailed] = useState(false);
  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const onSubmit = () => {
    if (chosenAnswer === question?.rightAnswer) {
      setPassed(true);
      setDidntPass(false);
      const time = setTimeout(() => {
        setShowSpyCheck(false);
      }, 2000);
      return () => clearTimeout(time);
    } else {
      setFailed(true);
    }
  };

  useEffect(() => {
    setDidntPass(true);
  }, []);

  useEffect(() => {
    setFailed(false);
  }, [chosenAnswer]);

  return (
    <AnimatePresence>
      <div className={s.background}>
        <motion.div
          className={s.motion}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
          }}
        >
          <div className={s.modal}>
            <div className={s.container}>
              <div className={s.content}>
                <p>
                  <h2>{question?.title}</h2>
                </p>
                <Footnote>
                  <div className={s.instruction}>
                    Вы находитесь на сайте уже более 5-ти минут, что очень
                    подозрительно для среднестатистического участика
                    учебно-методической группы. Ответьте-ка на вопрос.
                  </div>
                </Footnote>

                <div
                  className={`${s.answers} ${
                    !('visualQuestion' in question!) && s.answers_text
                  }`}
                >
                  {question?.answers.map((a) => {
                    return 'visualQuestion' in question ? (
                      <div
                        className={`${s.img_wrapper} ${
                          chosenAnswer === a.id && !passed && s.active
                        }`}
                        onClick={() => setChosenAnswer(a.id)}
                      >
                        <div className={s.img_container}>
                          {passed && a.id === question.rightAnswer && (
                            <div className={s.passed}>
                              <Image
                                src="/images/check.svg"
                                alt={a.img}
                                layout="fill"
                              />
                            </div>
                          )}
                          <div className={s.img}>
                            <Image
                              src={a.img}
                              alt={a.img}
                              width={200}
                              height={200}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => setChosenAnswer(a.id)}
                        className={`${s.text} ${
                          chosenAnswer === a.id && !passed && s.active_text
                        }`}
                      >
                        {passed && a.id === question.rightAnswer && (
                          <motion.div
                            className={s.motion}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.25,
                            }}
                          >
                            <div className={s.passed}>
                              <Image
                                src="/images/check.svg"
                                alt={a.img}
                                layout="fill"
                              />
                            </div>
                          </motion.div>
                        )}
                        {a.text}
                      </div>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence>
                {failed && (
                  <motion.div
                    className={s.motion}
                    animate={{ x: [0, 20, -20, 0], opacity: 1 }}
                    transition={{
                      duration: 0.25,
                    }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={s.failed}>Ответ неверный</div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className={s.button} onClick={onSubmit}>
                Проверить
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SpyCheckModal;
