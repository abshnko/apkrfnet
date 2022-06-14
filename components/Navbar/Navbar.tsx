import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import s from './Navbar.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import toastStyle from '../../utils/Alerts/Toast/Toast.module.scss';
import { showAlertEN } from '../../utils/Alerts/alerts';
import { useGlobalContext } from '../../context/state';

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
      <button
        type="button"
        onClick={() => setShowMobileNav((e) => !e)}
        className={s.menu_icon}
      >
        <MenuIcon style={{ width: '40px', height: '40px', color: '#4A4A4A' }} />
      </button>
      <div className={s.navbar_fixed}>
        <nav className={s.navbar}>
          <div className={s.logo}>
            <Link href="/">Апкрф.нет</Link>
          </div>
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
        <>
          <div>
            <ul className="">
              <li>
                <Link href="/meetings">заседания</Link>
              </li>
              <li>
                <Link href="/">наша команда</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    showAlertEN();
                    setShowMobileNav(false);
                  }}
                  className="font-light"
                >
                  en
                </button>
              </li>
            </ul>
            <button onClick={() => setShowMobileNav((e) => !e)}>
              <CloseIcon
                style={{ width: '40px', height: '40px', color: '#cbabab' }}
              />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
