import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import s from './Navbar.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import toastStyle from '../UI/ToastAlert/Toast.module.scss';
import { showAlertEN } from '../../utils/Alerts/alerts';
import menu_img from '../../public/images/menu.svg';
import { useGlobalContext } from '../../context/refs';
import Image from 'next/image';
import NavbarMobile from './NavbarMobile/NavbarMobile';
import { removeScrollUnderModal, scrollToRef } from '../../utils/funcs';

const Navbar = ({ myRefTeam, refClassics }: any) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const router = useRouter();
  const {
    scrollToTeam,
    setScrollToTeam,
    scrollToClassics,
    setScrollToClassics,
  } = useGlobalContext();
  const handleClick = (e: any) => {
    if (myRefTeam !== undefined) {
      myRefTeam.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      setScrollToTeam(true);
      router.push('/');
    }
  };

  useEffect(() => {
    removeScrollUnderModal(showMobileNav);
  }, [showMobileNav]);

  useEffect(() => {
    scrollToRef(myRefTeam, scrollToTeam, setScrollToTeam);
    scrollToRef(refClassics, scrollToClassics, setScrollToClassics);
  }, []);

  return (
    <>
      {/* <ToastContainer
        autoClose={60000}
        closeButton={false}
        className={toastStyle.toast_container}
        toastClassName={toastStyle.toast_wrapper}
        newestOnTop
        limit={6}
        hideProgressBar
      /> */}

      <div className={s.navbar_fixed}>
        <nav className={s.navbar}>
          <div className={s.logo}>
            <Link href="/">Апкрф.нет</Link>
          </div>
          <button
            type="button"
            onClick={() => setShowMobileNav((e) => !e)}
            className={s.menu_icon}
          >
            <Image src={'/images/menu.svg'} alt="menu" layout="fill" />
          </button>
          <ul className={s.links}>
            <li>
              <Link href="/posts">Объявления</Link>
            </li>
            <li>
              <button onClick={handleClick}>наша команда</button>
            </li>
            <li>
              <Link href="/gallery">галерея участников</Link>
            </li>
            <li>
              <button onClick={showAlertEN}>en</button>
            </li>
          </ul>
        </nav>
      </div>
      {showMobileNav && (
        <NavbarMobile
          setShowMobileNav={setShowMobileNav}
          showAlertEN={showAlertEN}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default Navbar;
