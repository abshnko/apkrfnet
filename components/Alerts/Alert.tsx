import React, { FC, ReactNode } from "react";

const Alert = ({
  title,
  text,
  setState,
  extra,
}: {
  title: string;
  text: string;
  setState: any;
  extra?: ReactNode;
}) => {
  return (
    <div className="flex modal justify-center items-center h-screen w-screen top-0 left-0 bg-slate-200 z-20 fixed">
      <div
        className={`flex flex-col bg-white  modal-content w-11/12 md:w-1/2  ${
          extra ? "h-95vh" : "h-min"
        } md:h-min md:p-8 p-4 overflow-auto ${!extra && "justify-center"}`}
        style={style.modal}
      >
        <div className="title text-2xl md:text-4xl text-purple-700">
          {title}
        </div>
        <div className="text text-xl leading-tight md:text-3xl py-4 md:py-8">
          {text}
        </div>
        {extra && <div className="check ">{extra}</div>}
        {!extra && (
          <button
            className="self-center text-2xl"
            style={style.button}
            onClick={() => setState(false)}
          >
            ладно
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;

const style = {
  modal: {
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    minWidth: "33%",
  },
  button: {
    border: "1px solid #ababab",
    borderRadius: "4px",
    padding: "5px 10px 10px 10px",
    lineHeight: "1.5rem",
  },
};
