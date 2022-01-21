import React from "react";

const ClassicsSection = () => {
  return (
    <>
      <div className="classics min-h-screen bg-rose-200">
        <div className={windStyles.wrapper}>
          <div className="title">Классики Уральской процессуальной школы</div>
        </div>
      </div>
    </>
  );
};

export default ClassicsSection;

const windStyles = {
  wrapper: "wrapper w-11/12 md:w-11/12 lg:w-4/5 m-auto xl:w-3/5",
};
