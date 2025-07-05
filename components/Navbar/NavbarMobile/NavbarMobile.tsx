import React from 'react';
import s from './NavbarMobile.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { INavbarMobile } from '../../../types';
import { motion } from 'framer-motion';

const NavbarMobile = ({
  showAlertEN,
  setShowMobileNav,
  handleClick,
}: INavbarMobile) => {
  const router = useRouter();
  return (
    <motion.div
      key="mobile nav"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        x: [-150, 0],
      }}
      transition={{
        duration: 0.2,
        type: 'spring',
      }}
      exit={{ x: [0, -500] }}
      className={s.container}
    >
      <div className={s.left_side}></div>
      <div className={s.right_side}>
        <div className={s.close_container}>
          <button onClick={() => setShowMobileNav(false)} className={s.close}>
            <Image src={'/images/close.svg'} alt="close" layout="fill" />
          </button>
        </div>
        <ul className={s.links}>
          <li
            className={s.link}
            onClick={(e) => {
              setShowMobileNav(false);
              router.push('/posts');
            }}
          >
            объявления
            <div className={s.arrow}>
              <Image
                src={'/images/right_chevron.svg'}
                alt="arrow"
                layout="fill"
              />
            </div>
          </li>
          <li
            className={s.link}
            onClick={(e) => {
              setShowMobileNav(false);
              handleClick(e);
            }}
          >
            <button>наша команда</button>

            <div className={s.arrow}>
              <Image
                src={'/images/right_chevron.svg'}
                alt="arrow"
                layout="fill"
              />
            </div>
          </li>
          <li className={s.link} onClick={() => setShowMobileNav(false)}>
            <Link href="/gallery">галерея участников</Link>
            <div className={s.arrow}>
              <Image
                src={'/images/right_chevron.svg'}
                alt="arrow"
                layout="fill"
              />
            </div>
          </li>
          <li className={s.link} onClick={() => setShowMobileNav(false)}>
            <Link href="/art">творчество участников</Link>
            <div className={s.arrow}>
              <Image
                src={'/images/right_chevron.svg'}
                alt="arrow"
                layout="fill"
              />
            </div>
          </li>
          <li className={s.link} onClick={() => setShowMobileNav(false)}>
            <Link href="/autographs">дорогие автографы</Link>
            <div className={s.arrow}>
              <Image
                src={'/images/right_chevron.svg'}
                alt="arrow"
                layout="fill"
              />
            </div>
          </li>
          <li className={s.link} onClick={() => setShowMobileNav(false)}>
            <Link href="/chat">чат эй, пей!</Link>
            <div className={s.arrow}>
              <Image
                src={'/images/right_chevron.svg'}
                alt="arrow"
                layout="fill"
              />
            </div>
          </li>
          <li className={s.link} onClick={() => setShowMobileNav(false)}>
            <Link href="/it">уйти в it</Link>
            <div className={s.arrow}>
              <Image
                src={'/images/right_chevron.svg'}
                alt="arrow"
                layout="fill"
              />
            </div>
          </li>
          <li
            className={s.link}
            onClick={() => {
              showAlertEN();
              setShowMobileNav(false);
            }}
          >
            <button className="font-light">en</button>
            <div className={s.arrow}>
              <Image
                src={'/images/right_chevron.svg'}
                alt="arrow"
                layout="fill"
              />
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default NavbarMobile;
