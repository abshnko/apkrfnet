import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import s from './Navbar.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import toastStyle from '../../utils/Alerts/Toast/Toast.module.scss';
import { showAlertEN } from '../../utils/Alerts/alerts';
import menu_img from '../../public/images/menu.svg';
import { useGlobalContext } from '../../context/state';
import Image from 'next/image';
import NavbarMobile from './NavbarMobile/NavbarMobile';

const Navbar = ({ myRef }: any) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const router = useRouter();
  const { scrollToTeam, setScrollToTeam } = useGlobalContext();
  const handleClick = (e: any) => {
    if (myRef !== undefined) {
      myRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      setScrollToTeam(true);
      router.push('/');
    }
  };

  useEffect(() => {
    showMobileNav
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [showMobileNav]);

  useEffect(() => {
    if (scrollToTeam) {
      const time = setTimeout(() => {
        myRef.current?.scrollIntoView({ behavior: 'smooth' });
        setScrollToTeam(false);
      }, 100);
      return () => clearTimeout(time);
    }
  }, []);

  return (
    <>
      <ToastContainer
        autoClose={15000}
        closeButton={false}
        className={toastStyle.toast_container}
        toastClassName={toastStyle.toast_wrapper}
        newestOnTop
        limit={2}
        hideProgressBar
      />

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
