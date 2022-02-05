import React, { FC, ReactNode } from "react";
import styles from "../../styles/Alert.module.scss";

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
    <div className="h-screen w-screen  fixed z-40 top-0 left-0 ">
      <div
        className={`flex justify-center items-center h-screen w-screen top-0 left-0 z-40 fixed ${styles.modal}`}
      >
        <div
          className={`${
            styles.modalContent
          } flex flex-col  min-h-1/2 w-11/12 md:w-1/2  ${
            extra ? "h-95vh" : "h-min"
          } md:h-min md:p-12 md:pb-8 p-4 overflow-auto ${
            !extra && "justify-center"
          }`}
        >
          <div className={`${styles.title} text-2xl md:text-4xl`}>{title}</div>
          <div
            className={`${styles.text} text-xl leading-tight md:text-3xl py-4 md:py-8`}
          >
            {text}
          </div>
          {extra && <div className="check ">{extra}</div>}
          {!extra && (
            <button
              //   className="self-center text-2xl"
              className={styles.button}
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

const style = {
  modal: {
    minWidth: "33%",
  },
  button: {
    border: "1px solid #ababab",
    padding: "5px 10px 10px 10px",
    lineHeight: "1.5rem",
  },
};
