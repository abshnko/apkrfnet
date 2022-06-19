import React, { useContext, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Head from 'next/head';
import SpyCheckModal from './SpyCheckModal/SpyCheckModal';
import { useSpyCheckContext } from '../context/spyCheck';
import { fixBackground } from '../utils/funcs';

const MainLayout = ({ children, title, myRefTeam, refClassics }: any) => {
  const {
    didntPass,
    passedSpyCheck,
    setDidntPass,
    setShowSpyCheck,
    showSpyCheck,
  } = useSpyCheckContext();

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
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {showSpyCheck && (
        <div style={{ width: '100%' }}>
          <SpyCheckModal
            setShowSpyCheck={setShowSpyCheck}
            setDidntPass={setDidntPass}
          />
        </div>
      )}
      <Navbar myRefTeam={myRefTeam} refClassics={refClassics} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
