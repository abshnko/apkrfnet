import Image from 'next/image';
import React from 'react';
import MainContainer from '../components/MainContainer/MainContainer';
import MainLayout from '../components/MainLayout';
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
import s from '../styles/autographs.module.scss';

const Autographs = () => {
  return (
    <MainLayout title="Автографы">
      <MainContainer>
        <Breadcrumbs crumbs={['Дорогие автографы']} links={['/autographs']} />
        <div className={s.container}>
          <div className={s.image}>
            <Image
              src="/images/autographs/autograph_1.jpg"
              alt="autograph"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={s.image}>
            <Image
              src="/images/autographs/autograph_2.jpg"
              alt="autograph"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={s.image}>
            <Image
              src="/images/autographs/autograph_3.jpg"
              alt="autograph"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default Autographs;
