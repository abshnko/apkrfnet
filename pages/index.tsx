import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import HomeSection from "../components/HomeSection";
import TeamSection from "../components/TeamSection";
import ClassicsSection from "../components/ClassicsSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeSection />
      <TeamSection />
      <ClassicsSection />
    </>
  );
};

export default Home;

// const windStyles = {
//   wrapper: "wrapper w-11/12 md:w-11/12 lg:w-4/5 m-auto xl:w-3/5",
// };
