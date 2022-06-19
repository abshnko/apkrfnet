import type { NextPage } from 'next';
import React, { useState, useRef, useEffect } from 'react';
import HomeSection from '../components/Sections/HomeSection/HomeSection';
import TeamSection from '../components/Sections/TeamSection/TeamSection';
import ClassicsSection from '../components/Sections/ClassicsSection/ClassicsSection';
import s from '../styles/index.module.scss';
import useLocalStorage from 'use-local-storage';
import MainLayout from '../components/MainLayout';
import { fixBackground } from '../utils/funcs';

const Home: NextPage = () => {
  const refTeam = useRef<null | HTMLDivElement>(null);
  const refClassics = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <MainLayout
        title={'Главная | АПКРФ НЕТ'}
        myRefTeam={refTeam}
        refClassics={refClassics}
      >
        <HomeSection />
        <div className={s.container}>
          <div ref={refClassics}>
            <ClassicsSection />
          </div>
          <div ref={refTeam}>
            <TeamSection />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
