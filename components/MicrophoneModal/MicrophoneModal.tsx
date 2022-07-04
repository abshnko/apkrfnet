import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import s from './MicrophoneModal.module.scss';

const MicrophoneModal = ({ setShowMicro }: any) => {
  const [fail, setFail] = useState(false);
  useEffect(() => {
    const time1 = setTimeout(() => {
      setFail(true);
      setTimeout(() => {
        setShowMicro(false);
      }, 3500);
    }, 5000);
    return () => clearTimeout(time1);
  }, []);

  return (
    <div className={s.background}>
      <div className={s.modal}>
        <div className={s.container}>
          <h2>Не молчите, говорите, мы включили аудиозапись</h2>
          <div className={`${s.img_container} ${fail && s.no_animation}`}>
            <Image src={'/images/microphone.svg'} alt="micro" layout="fill" />
          </div>
          {fail && (
            <p className={s.fail}>
              Запись не состоялась. Что-то пошло не так...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MicrophoneModal;
