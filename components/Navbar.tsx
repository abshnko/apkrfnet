import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/Home.module.scss";
import { scroll } from "../public/utils/funcs";

const Navbar = ({ setshowAlertEN }: { setshowAlertEN: any }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  useEffect(() => {
    showMobileNav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [showMobileNav]);

  return (
    <>
      <button
        type="button"
        className="md:hidden absolute top-8  left-8 cursor-pointer px-2"
        onClick={() => setShowMobileNav((e) => !e)}
      >
        <MenuIcon style={{ width: "40px", height: "40px", color: "#4A4A4A" }} />
      </button>
      <div className={styles.navWrapper}>
        <nav className="header-upper hidden md:block py-4">
          <ul className={windStyles.menu}>
            <li>
              <Link href="/meetings">заседания</Link>
            </li>
            <li>
              <Link href="/">интересные материалы</Link>
            </li>
            <li>
              <button>наша команда</button>
            </li>
            <li>
              <Link href="/meetings">процессуальная шляпа</Link>
            </li>
            <li>
              <Link href="/">поделиться редкой книгой</Link>
            </li>
            <li>
              <button
                className="font-semibold"
                onClick={() => setshowAlertEN(true)}
              >
                en
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {showMobileNav && (
        <>
          <div
            className={`nav-mobile h-screen fixed bg-white w-full  ${
              !showMobileNav
                ? "opacity-0 -z-1 duration-300 transition-all pt-9 transform"
                : "pt-16 text-left z-50 text-3xl px-14  opacity-100  transition-all duration-300 transform "
            } `}
          >
            <ul className="">
              <li className=" block  pb-3 font-light tracking-wide active:text-myRed">
                <Link href="/meetings">заседания</Link>
              </li>
              <li className=" block  pb-3 font-light tracking-wide active:text-myRed">
                <Link href="/">интересные материалы</Link>
              </li>
              <li className=" block  pb-3 font-light tracking-wide active:text-myRed">
                <Link href="/">наша команда</Link>
              </li>
              <li className=" block  pb-3 font-light tracking-wide active:text-myRed">
                <Link href="/">поделиться редкой книгой</Link>
              </li>
              <li className=" block  pb-3 font-light tracking-wide active:text-myRed">
                <button
                  onClick={() => {
                    setshowAlertEN(true);
                    setShowMobileNav(false);
                  }}
                  className="font-light"
                >
                  en
                </button>
              </li>
            </ul>
          </div>
          <button
            className="close fixed top-14 right-10 z-50"
            onClick={() => setShowMobileNav((e) => !e)}
          >
            <CloseIcon
              style={{ width: "40px", height: "40px", color: "#cbabab" }}
            />
          </button>
        </>
      )}
    </>
  );
};

const windStyles = {
  menu: "menu flex justify-between font-semibold",
  //   link: "hover:text-lime-600",
};

export default Navbar;
