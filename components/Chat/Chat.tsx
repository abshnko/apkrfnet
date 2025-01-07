import React, { useEffect, useRef, useState } from 'react';
import s from './Chat.module.scss';
import InputComponent from '../Input/Input';
import { chatAnswers } from '../../data/chatAnswers';
import SpeechBubble from '../Speechbubble/Speechbubble';

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const Chat = () => {
    const [message, setMessage] = useState("");
    const [answers, setAnswers] = useState<string[]>([]);
    const [questions, setQuestions] = useState<string[]>([]);
    const [id, setId] = useState(() => {
        const id = randomIntFromInterval(chatAnswers[0].id, chatAnswers[chatAnswers.length - 1].id)
        return id
    })
    const chatContainerRef = useRef<HTMLDivElement | null>(null);

    const handleSend = () => {
        console.log("Message sent:", message);
        setMessage("");
        setQuestions((prev) => [...prev, message])
        setAnswers((prev) => [...prev, chatAnswers.find((ans) => ans.id === id)?.text || ''])
        const id = randomIntFromInterval(chatAnswers[0].id, chatAnswers[chatAnswers.length - 1].id)
        setId(id)
    };

    // Scroll to the bottom whenever messages change
    useEffect(() => {
        const container = chatContainerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [answers]);

    return (
        <>
            <div className={s.container}>
                {!questions.length ? (
                    <h2 style={{ alignSelf: 'center' }}>Чем я могу помочь?</h2>
                ) : (
                    <div className={s.messages} ref={chatContainerRef}>
                        {questions.map((q, i) => {
                            return (<span key={i}>
                                <SpeechBubble key={i} text={q} isAnswer={true} />
                                <SpeechBubble key={i} text={answers[i]} />
                            </span>)
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