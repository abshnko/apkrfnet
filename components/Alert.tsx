import React, { FC } from "react";

const Alert = ({
  title,
  text,
  setState,
}: {
  title: string;
  text: string;
  setState: any;
}) => {
  return (
    <div className="flex modal justify-center items-center h-screen w-screen absolute top-0 left-0 bg-white z-20">
      <div
        className="flex flex-col modal-content w-11/12 md:w-1/3 h-min p-8"
        style={style.modal}
      >
        <div className="title text-2xl md:text-4xl text-center">{title}</div>
        <div className="text text-xl md:text-3xl p-4 md:p-8">{text}</div>
        <button
          className="self-center text-2xl"
          style={style.button}
          onClick={() => setState(false)}
        >
          ладно
        </button>
      </div>
    </div>
  );
};

export default Alert;

const style = {
  modal: {
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  },
  button: {
    border: "1px solid #ababab",
    borderRadius: "4px",
    padding: "5px 10px 10px 10px",
    lineHeight: "1.5rem",
  },
};
