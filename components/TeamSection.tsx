import React from "react";
import type { NextComponentType } from "next";

const TeamSection: NextComponentType = () => {
  return (
    <>
      <div className="team min-h-screen bg-indigo-200">
        <div className={windStyles.wrapper}>
          <div className="title">Наша команда</div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;

const windStyles = {
  wrapper: "wrapper w-11/12 md:w-11/12 lg:w-4/5 m-auto xl:w-3/5",
};
