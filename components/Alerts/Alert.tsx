import React, { FC, ReactNode } from "react";
import s from "./Alert.module.scss";

const Alert = ({
  title,
  text,
  setState,
  extra,
}: {
  title: string;
  text: string | string[];
  setState: any;
  extra?: ReactNode;
}) => {
  const str = text;
  return (
    <div>
      <div className={s.modal}>
        <div className={s.modal_content}>
          <div className={s.title}>{title}</div>
          <div className={s.text}>{text}</div>
          {extra && <div className="check">{extra}</div>}
          {!extra && (
            <button
              //   className="self-center text-2xl"
              className={s.button}
              onClick={() => setState(false)}
            >
              ладно
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;
