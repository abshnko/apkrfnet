import Link from 'next/link';
import React from 'react';
import MainContainer from '../components/MainContainer/MainContainer';
import MainLayout from '../components/MainLayout';
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
import Image from 'next/image';
import s from '../styles/gallery.module.scss';

const gallery = () => {
  return (
    <MainLayout title="Галерея | АПКРФ НЕТ">
      <MainContainer>
        <Breadcrumbs crumbs={['Галерея']} links={['/gallery']} />
        <div className={s.container}>
          <div className={s.left_side}>
            <div className={s.title}>
              К сожалению, ни один из участников не согласился на публикацию
              фотографий. Может, это и к лучшему
            </div>
            <Link href="/" passHref>
              <div className={s.button}>
                <span>на главную</span>{' '}
                <div className={s.img_container}>
                  <Image
                    src="/images/right_arrow.svg"
                    alt="arrow"
                    layout="fill"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className={s.right_side}>
            <div className={s.img_container_lock}>
              <Image
                src="/images/file_protected.svg"
                alt="protectedFile"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default gallery;
