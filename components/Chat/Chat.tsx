import React, { useEffect, useRef, useState } from 'react';
import s from './Chat.module.scss';
import InputComponent from '../Input/Input';
import { chatAnswers } from '../../data/chatAnswers';
import SpeechBubble from '../Speechbubble/Speechbubble';
import useLocalStorage from 'use-local-storage';

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const Chat = () => {
    const [message, setMessage] = useState("");
    const [answers, setAnswers] = useState<string[]>([]);
    const [questions, setQuestions] = useState<string[]>([]);
    const [shownAnswers, setShownAnswers] = useLocalStorage<number[]>('shown answers', [])
    const [id, setId] = useState(() => {
        let id = randomIntFromInterval(chatAnswers[0].id, chatAnswers[chatAnswers.length - 1].id)
        while (shownAnswers.length < chatAnswers.length && shownAnswers.includes(id)) {
            id = randomIntFromInterval(chatAnswers[0].id, chatAnswers[chatAnswers.length - 1].id)
        }
        return id
    })
    const chatContainerRef = useRef<HTMLDivElement | null>(null);

    const handleSend = () => {
        setMessage("");
        setQuestions((prev) => [...prev, message])
        setAnswers((prev) => [...prev, chatAnswers.find((ans) => ans.id === id)?.text || ''])
        let newId = randomIntFromInterval(chatAnswers[0].id, chatAnswers[chatAnswers.length - 1].id)
        while (newId === id || (shownAnswers.length < chatAnswers.length && shownAnswers.includes(newId))) {
            newId = randomIntFromInterval(chatAnswers[0].id, chatAnswers[chatAnswers.length - 1].id)
        }
        setId(newId)
    };

    // Scroll to the bottom whenever messages change
    useEffect(() => {
        const container = chatContainerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [answers]);

      useEffect(() => {
        if (shownAnswers.length < chatAnswers.length) {
          setShownAnswers([...shownAnswers, id])
        } else {
          setShownAnswers([id])
        }
      }, [id])

    return (
        <>
            <div className={s.container}>
                {!questions.length ? (
                    <h2 style={{ alignSelf: 'center' }}>Чем я могу помочь?</h2>
                ) : (
                    <div className={s.messages} ref={chatContainerRef}>
                        {questions.map((q, i) => {
                            return (<div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                                <SpeechBubble text={q} isAnswer={true} />
                                <SpeechBubble text={answers[i]} />
                            </div>)
                        })}
                    </div>
                )}
                <InputComponent
                    value={message}
                    onChange={setMessage}
                    onSend={handleSend}
                    placeholder="Напишите ваш вопрос..."
                    buttonLabel="Отправить"
                />
            </div>
        </>

    );
};