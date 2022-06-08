import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import s from "./Navbar.module.scss";
import { scroll } from "../../utils/funcs";
import { ToastContainer, toast } from "react-toastify";
import Toast from "../../utils/Alerts/Toast/Toast";
import toastStyle from "../../utils/Alerts/Toast/Toast.module.scss";
import { IToast } from "../../types";
import { showAlertEN } from "../../utils/Alerts/alerts";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    showMobileNav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [showMobileNav]);

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
        <MenuIcon style={{ width: "40px", height: "40px", color: "#4A4A4A" }} />
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
              <Link href="/">интересные материалы</Link>
            </li>
            <li>
              <button>наша команда</button>
            </li>
            <li>
              <Link href="/gallery">галерея участников</Link>
            </li>
            <li>
              <Link href="/">поделиться редкой книгой</Link>
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
                <Link href="/">интересные материалы</Link>
              </li>
              <li>
                <Link href="/">наша команда</Link>
              </li>
              <li>
                <Link href="/">поделиться редкой книгой</Link>
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
                style={{ width: "40px", height: "40px", color: "#cbabab" }}
              />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
