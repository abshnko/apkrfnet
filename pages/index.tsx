import type { NextPage } from 'next';
import React, { useRef } from 'react';
import HomeSection from '../components/Sections/HomeSection/HomeSection';
import TeamSection from '../components/Sections/TeamSection/TeamSection';
import ClassicsSection from '../components/Sections/ClassicsSection/ClassicsSection';
import s from '../styles/index.module.scss';
import MainLayout from '../components/MainLayout';

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
