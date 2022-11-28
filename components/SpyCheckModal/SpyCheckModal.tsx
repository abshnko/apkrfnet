import React, { useEffect, useState } from 'react'
import s from './SpyCheckModal.module.scss'
import { spyQuestions } from '../../data/spyQuestions'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import useLocalStorage from 'use-local-storage'

const SpyCheckModal = ({ setShowSpyCheck, setDidntPass }: any) => {
  const [shownQuestions, setShownQuestions] = useLocalStorage<number[]>('shown questions', [])
  const [id, setId] = useState(() => {
    let id = randomIntFromInterval(spyQuestions[0].id, spyQuestions[spyQuestions.length - 1].id)
    while (shownQuestions.length < spyQuestions.length && shownQuestions.includes(id)) {
      id = randomIntFromInterval(spyQuestions[0].id, spyQuestions[spyQuestions.length - 1].id)
    }
    return id
  })

  const [question, setQuestion] = useState(spyQuestions.find((q) => q.id === id))
  const [chosenAnswer, setChosenAnswer] = useState<number | undefined>(undefined)
  const [passed, setPassed] = useState(false)
  const [failed, setFailed] = useState(false)
  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const onSubmit = () => {
    if (chosenAnswer !== undefined) {
      //   shownQuestions.push(id);
      if (chosenAnswer === question?.rightAnswer) {
        setPassed(true)
        setDidntPass(false)
        const time = setTimeout(() => {
          setShowSpyCheck(false)
        }, 2000)
        return () => clearTimeout(time)
      } else {
        setFailed(true)
      }
    }
  }

  useEffect(() => {
    setDidntPass(true)
  }, [])

  useEffect(() => {
    setFailed(false)
  }, [chosenAnswer])

  useEffect(() => {
    setQuestion(spyQuestions.find((q) => q.id === id))
    if (shownQuestions.length < spyQuestions.length) {
      setShownQuestions([...shownQuestions, id])
    } else {
      setShownQuestions([id])
    }
  }, [id])

  useEffect(() => {
    const time = setTimeout(() => {
      if (failed) {
        let newId = randomIntFromInterval(spyQuestions[0].id, spyQuestions[spyQuestions.length - 1].id)
        while (newId === id || (shownQuestions.length < spyQuestions.length && shownQuestions.includes(newId))) {
          newId = randomIntFromInterval(spyQuestions[0].id, spyQuestions[spyQuestions.length - 1].id)
        }
        setId(newId)
      }
    }, 1300)
    return () => clearTimeout(time)
  }, [failed])

  useEffect(() => {
    setFailed(false)
    setChosenAnswer(undefined)
  }, [question])

  return (
    <>
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
              <div className={s.container} key={question!.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <div className={s.content}>
                    <p>
                      <h2>{question?.title}</h2>
                    </p>
                    <div className={s.instruction}>
                      Вы находитесь на сайте уже подозрительно долго для среднестатистического участика учебно-методической группы. Ответьте-ка на вопрос.
                    </div>

                    <div className={`${s.answers} ${!('visualQuestion' in question!) && s.answers_text}`}>
                      {question?.answers.map((a) => {
                        return 'visualQuestion' in question ? (
                          <div className={`${s.img_wrapper} ${chosenAnswer === a.id && !passed && s.active}`} onClick={() => setChosenAnswer(a.id)}>
                            {/* <div className={s.img_container}>
                              {passed && a.id === question?.rightAnswer && (
                                <div className={s.passed}>
                                  <Image src='/images/check.svg' alt={a.img} layout='fill' />
                                </div>
                              )}
                              <div className={s.img}>
                                <Image src={a.img} alt={a.img} layout='fill' />
                              </div>
                            </div> */}
                          </div>
                        ) : (
                          <div onClick={() => setChosenAnswer(a.id)} className={`${s.text} ${chosenAnswer === a.id && !passed && s.active_text}`}>
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
                                  <Image src='/images/check.svg' alt={a.img} layout='fill' objectFit='contain' />
                                </div>
                              </motion.div>
                            )}
                            {a.text}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
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
    </>
  )
}

export default SpyCheckModal
