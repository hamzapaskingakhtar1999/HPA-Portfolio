import React from "react";

import style from "./Navbar.module.css";

import logo from "../../assets/logo.png";

import { LuFlower } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className={`${style.navbar}`}>
      <div className={style.left}>
        <img src={logo} className={style.logo} />
      </div>
      <div className={style.middle}>
        <div className={style.navbarItem}>
          <p className={style.itemName}>Home</p>
        </div>
        <div className={style.navbarItem}>
          <p className={style.itemName}>Work</p>
        </div>
        <div className={style.navbarItem}>
          <p className={style.itemName}>About</p>
        </div>
        <div className={style.navbarItem}>
          <p className={style.itemName}>More</p>
        </div>

        <div className={`${style.navbarItem} ${style.navbarCTA}`}>
          <p className={style.itemName}>Book a Call</p>
        </div>
      </div>
      <div className={style.right}>
        <LuFlower size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
