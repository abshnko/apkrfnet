import type { NextPage } from "next";
import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";
import HomeSection from "../components/Sections/HomeSection/HomeSection";
import TeamSection from "../components/Sections/TeamSection/TeamSection";
import ClassicsSection from "../components/Sections/ClassicsSection/ClassicsSection";
import Footer from "../components/Footer/Footer";
import s from "./index.module.scss";
import Navbar from "../components/Navbar/Navbar";
import useLocalStorage from "use-local-storage";
import MainLayout from "../components/MainLayout";

const Home: NextPage = () => {
  const [lastScrollLocation, setLastScrollLocation] = useState(0);
  const ref = useRef(null);
  const [showSpyCheck, setShowSpyCheck] = useState(false);
  const [passedSpyCheck, setPassedSpyCheck] = useLocalStorage(
    "passedSpyCheck",
    false
  );
  const [didntPass, setDidntPass] = useLocalStorage("didn't Pass", false);

  useEffect(() => {
    if (didntPass) {
      const time = setTimeout(() => {
        setShowSpyCheck(true);
      }, 1000);
      return () => clearTimeout(time);
    }
    if (!passedSpyCheck) {
      const time = setTimeout(() => {
        setShowSpyCheck(true);
      }, 300000);
      return () => clearTimeout(time);
    }
  }, []);

  useEffect(() => {
    //каждые 5 мин новый вопрос после успешного ответа
    if (showSpyCheck) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";
    }
    if (!showSpyCheck) {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      const time = setTimeout(() => {
        setShowSpyCheck(true);
      }, 300000);
      return () => clearTimeout(time);
    }
  }, [showSpyCheck]);

  return (
    <>
      <MainLayout title={"Главная | АПКРФ НЕТ"}>
        <HomeSection
          myRef={ref}
          setDidntPass={setDidntPass}
          setShowSpyCheck={setShowSpyCheck}
          showSpyCheck={showSpyCheck}
        />
        <div className={s.container}>
          <ClassicsSection />
          <div ref={ref}>
            <TeamSection />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
