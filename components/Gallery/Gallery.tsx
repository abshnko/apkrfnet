import React from 'react';
import AccentedText from '../UI/AccentedText/AccentedText';
import MainContainer from '../MainContainer/MainContainer';
import s from './Gallery.module.scss';
import arrow from '../../public/images/right_arrow.svg';
import Image from 'next/image';
import protectedFile from '../../public/images/file_protected.svg';
import Link from 'next/link';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';

const Gallery = () => {
  return (
    <MainContainer>
      <Breadcrumbs crumbs={['Галерея']} links={['/gallery']} />
      <div className={s.container}>
        <div className={s.left_side}>
          <div className={s.title}>
            К сожалению, ни один из участников не согласился на публикацию
            фотографий.
          </div>
          <Link href="/" passHref>
            <div className={s.button}>
              <span>на главную</span>{' '}
              <div className={s.img_container}>
                <Image src={arrow} alt="arrow" layout="fill" />
              </div>
            </div>
          </Link>
        </div>
        <div className={s.right_side}>
          <div className={s.img_container_lock}>
            <Image src={protectedFile} alt="protectedFile" layout="fill" />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Gallery;
