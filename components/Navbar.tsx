import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { CloseIcon, NavBarIcon } from "../public/utils/svgs";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
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
        className="md:hidden cursor-pointer px-2"
        onClick={() => setShowMobileNav((e) => !e)}
      >
        <MenuIcon />
      </button>
      <nav className="header-upper hidden md:block">
        <ul className={windStyles.menu}>
          <li className="hover:text-lime-600">
            <Link href="/meetings">заседания</Link>
          </li>
          <li className={windStyles.link}>
            <Link href="/">интересные материалы</Link>
          </li>
          <li className={windStyles.link}>
            <Link href="/">наша команда</Link>
          </li>
          <li className={windStyles.link}>
            <Link href="/">поделиться редкой книгой</Link>
          </li>
        </ul>
        <div className="line pt-2">
          <hr className="border-t-2 border-black" />
        </div>
      </nav>
      {showMobileNav && (
        <>
          <div
            className={`nav-mobile h-screen fixed bg-white w-full  ${
              !showMobileNav
                ? "opacity-0 -z-1 duration-300 transition-all pt-9 transform"
                : "pt-9 text-left z-50 text-3xl px-10  opacity-100  transition-all duration-300 transform "
            } `}
          >
            <ul className="">
              <li className="hover:text-lime-600 block  pb-3 font-light tracking-wide active:text-myRed">
                <Link href="/meetings">заседания</Link>
              </li>
              <li className="hover:text-lime-600 block  pb-3 font-light tracking-wide active:text-myRed">
                <Link href="/">интересные материалы</Link>
              </li>
              <li className="hover:text-lime-600 block  pb-3 font-light tracking-wide active:text-myRed">
                <Link href="/">наша команда</Link>
              </li>
              <li className="hover:text-lime-600 block  pb-3 font-light tracking-wide active:text-myRed">
                <Link href="/">поделиться редкой книгой</Link>
              </li>
            </ul>
          </div>
          <button
            className="close fixed top-7 right-10"
            onClick={() => setShowMobileNav((e) => !e)}
          >
            <CloseIcon />
          </button>
        </>
      )}
    </>
  );
};

const windStyles = {
  menu: "menu flex justify-between font-bold",
  link: "hover:text-lime-600",
};

export default Navbar;
