import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Head from 'next/head';

const MainLayout = ({ children, title, myRefTeam, refClassics }: any) => {
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
      <Navbar myRefTeam={myRefTeam} refClassics={refClassics} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
