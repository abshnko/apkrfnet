import type { NextPage } from 'next';
import React, { useState, useRef, useEffect } from 'react';
import HomeSection from '../components/Sections/HomeSection/HomeSection';
import TeamSection from '../components/Sections/TeamSection/TeamSection';
import ClassicsSection from '../components/Sections/ClassicsSection/ClassicsSection';
import s from './index.module.scss';
import useLocalStorage from 'use-local-storage';
import MainLayout from '../components/MainLayout';
import { fixBackground } from '../utils/funcs';

const Home: NextPage = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [showSpyCheck, setShowSpyCheck] = useState(false);
  const [passedSpyCheck, setPassedSpyCheck] = useLocalStorage(
    'passedSpyCheck',
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
    fixBackground(showSpyCheck);
    if (!showSpyCheck) {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      const time = setTimeout(() => {
        setShowSpyCheck(true);
      }, 300000);
      return () => clearTimeout(time);
    }
  }, [showSpyCheck]);

  return (
    <>
      <MainLayout title={'Главная | АПКРФ НЕТ'} myRef={ref}>
        <HomeSection
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
