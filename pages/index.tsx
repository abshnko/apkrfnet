import type { NextPage } from "next";
import Head from "next/head";
import React, { useState, useRef } from "react";
import HomeSection from "../components/Sections/HomeSection/HomeSection";
import TeamSection from "../components/Sections/TeamSection/TeamSection";
import ClassicsSection from "../components/Sections/ClassicsSection/ClassicsSection";
import Footer from "../components/Footer/Footer";
import s from "./index.module.scss";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  const [lastScrollLocation, setLastScrollLocation] = useState(0);
  const ref = useRef(null);

  return (
    <>
      <Head>
        <title>APKRF.NET</title>
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
      <HomeSection myRef={ref} />
      <div className={s.container}>
        <ClassicsSection />
        <div ref={ref}>
          <TeamSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
